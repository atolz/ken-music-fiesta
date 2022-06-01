import React, { useState, createContext, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import BuyEventTicket from "../Components/PopUps/BuyEventTicket";
import PaymentOptions from "../Components/PopUps/PaymentOptions";
import PopupStatus from "../Components/PopUps/PopUpStatus";
import ReviewCheckOut from "../Components/PopUps/ReviewCheckOut";
import SelfCheckOut from "../Components/PopUps/SelfCheckOut";
import useLocalStorage from "../hooks/useLocalStorage";
import useLoading from "../hooks/useLoading";
import { useRouter } from "next/router";
import { baseInstanceAPI } from "../axios";
import useShowAlert from "../hooks/useShowAlert";
import BuyRaffleTicket from "../Components/PopUps/BuyRaffleTicket";
import VerifyPayment from "../Components/PopUps/VerifyPayment";
import SelectCardType from "../Components/PopUps/SelectCardType";
import ChangePassword from "../Components/PopUps/ChangePassword";
import EditCatalogue from "../Components/PopUps/EditCatalogue";
import CreateCatalogue from "../Components/PopUps/CreateCatalogue";

const pouUpContextFunctions = {
  initSelfCheckOut: () => {},
  initBuyRaffleTicket: () => {},
  initChangePassword: () => {},
  initBuyTicket: () => {},
  onBuyTicket: () => {},
  onCheckOut: () => {},
  onReview: () => {},
  onSelectPayOption: () => {},
  toggle: () => {},
  closeModal: () => {},
  initEditCatalogue: (catalogue) => {},
  initCreateCatalogue: () => {},
  // test: "",
};
export const popUpContext = createContext(pouUpContextFunctions);

export const PopUpContextProvider = ({ children }) => {
  const [purpose, setPurpose] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [statusTitle, setStatusTitle] = useState();
  const [linkText, setLinkText] = useState();
  const [text, setText] = useState();
  const [ticketAmount, setTicketAmount] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [checkAmount, setCheckAmount] = useState(500);
  const [vendor, setVendor] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const router = useRouter();
  const [editCatalogueObj, setEditCatalougueObj] = useState({});

  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const { toggleLoad } = useLoading();
  const toggleAlertBar = useShowAlert();

  const pouUpContextFunctions = {
    initBuyRaffleTicket: initBuyRaffleTicket,
    onBuyTicket: onBuyTicket,
    initSelfCheckOut: initSelfCheckOut,
    initChangePassword: initChangePassword,
    initBuyTicket: initBuyTicket,
    onCheckOut: onCheckOut,
    initEditCatalogue: initEditCatalogue,
    initCreateCatalogue: initCreateCatalogue,

    onReview: onReview,

    onSelectPayOption: onSelectPayOption,
    toggle: toggle,
    closeModal: closeModal,
    test: "activeModal",
  };

  function initBuyTicket() {
    if (!isLoggedIn() || getLocalStorage("section") !== "User") {
      return router.push("/auth/sign-in");
    }
    setPurpose("EventTicket");
    toggle();
    setActiveModal("BuyEventTicket");
  }

  function initBuyRaffleTicket() {
    if (!isLoggedIn()) {
      return router.push("/auth/sign-in");
    }
    setPurpose("RaffleTicket");
    toggle();
    setActiveModal("BuyRaffleTicket");
  }

  function initSelfCheckOut() {
    setPurpose("SelfCheckout");
    toggle();
    setActiveModal("SelfCheckOut");
  }

  function initChangePassword() {
    setActiveModal("ChangePassword");
    toggle();
    console.log("change pass called");
  }
  function initEditCatalogue(catalogue) {
    setActiveModal("EditCatalogue");
    setEditCatalougueObj(catalogue);
    console.log("Edit catalogue obj is", catalogue);
    toggle();
  }
  function initCreateCatalogue() {
    setActiveModal("CreateCatalogue");
    toggle();
  }

  function onBuyTicket(quantity, type) {
    // setTicketAmount(amount);
    setTicketType(type);
    setItemQuantity(quantity);
    setActiveModal("PaymentOptions");
  }
  function onBuyRaffleTicket(quantity) {
    // setTicketAmount(amount);
    setItemQuantity(quantity);
    setActiveModal("PaymentOptions");
  }

  function onCheckOut(amount, vendor) {
    setActiveModal("ReviewCheckOut");
    setCheckAmount(amount);
    setVendor(vendor);
  }

  function onReview() {
    setActiveModal("SelectCardType");
    // setLinkText("View Receipt");
    // setStatusTitle("Purchase Successful");
    // setText("Your purchase order is successful and your account has been credited.");
    // setActiveModal("Status");
  }

  function onVerify() {
    setActiveModal("Status");
  }

  async function onSelectPayOption(payOptType) {
    const env = process.env.NODE_ENV;
    console.log("enviroment is", env);
    let redirectUrl = "";
    if (env == "development") {
      redirectUrl = `http://localhost:3000/dashboard?amount=${itemQuantity}&status=success`;
    } else if (env == "production") {
      redirectUrl = `https://ken-music-fiesta-2.vercel.app/dashboard?amount=${itemQuantity}&status=success`;
    }
    console.log("payment details is", {
      purpose: purpose,
      itemQuantity: itemQuantity,
      payment_agent: payOptType,
      ticketType: ticketType,
      redirectUrl: redirectUrl,
    });
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.post(
        "/payment/buy",
        {
          purpose: purpose,
          itemQuantity: ticketAmount,
          payment_agent: payOptType,
          ticketType: ticketType,
          redirectUrl: redirectUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${getLocalStorage("token")}`,
          },
        }
      );
      console.log("response is", resp.data.redirectUrl);
      router.push(resp.data.redirectUrl);
      toggleLoad();
    } catch (error) {
      if (error.response) {
        console.log("AN error has occured... try agina later", error.response.data);
      }
      console.log("AN error has occured pls try again laters", error);
      toggleLoad();
      toggleAlertBar("An error occured. Pls try again later!", "error", true, 20000);
      toggle();
    }
  }
  async function onSelectCardType(type) {
    const env = process.env.NODE_ENV;
    console.log("enviroment is", env);
    let redirectUrl = "";
    if (env == "development") {
      redirectUrl = "http://localhost:3000/dashboard?status=success";
    } else if (env == "production") {
      redirectUrl = "https://ken-music-fiesta-2.vercel.app/dashboard?status=success";
    }
    console.log("payment details is", {
      purpose: purpose,
      amount: checkAmount,
      itemQuantity: ticketAmount,
      payment_agent: "PAYSTACK",
      // ticketType: "string",
      redirectUrl: redirectUrl,
    });
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.post(
        "/payment/buy",
        {
          purpose: purpose,
          itemQuantity: ticketAmount,
          amount: checkAmount,
          payment_agent: "PAYSTACK",
          // ticketType: "string",
          redirectUrl: redirectUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${getLocalStorage("token")}`,
          },
        }
      );
      console.log("response is", resp.data.redirectUrl);
      router.push(resp.data.redirectUrl);
      toggleLoad();
    } catch (error) {
      console.log("AN error has occured pls try again laters", error.response);
      toggleLoad();
      toggleAlertBar("An error occured. Pls try again later!", "error", true, 20000);
      toggle();
    }
  }

  function toggle() {
    console.log("toggleing...", showPopUp);
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  }

  function closeModal() {
    console.log("closing popup...", showPopUp);
    setShowPopUp(false);
  }

  useEffect(() => {
    console.log("Roter is ////////", router.query?.status);
    if (router.query?.status?.includes("success")) {
      console.log("sucess payed");
      setLinkText("Go to dashboard");
      setStatusTitle("Purchase Order Success");
      setText(`Your purchase order for ${router.query.amount} tickets was successful`);
      setActiveModal("Status");
      toggle();
      router.push("/dashboard");
    }

    // setTimeout(() => {
    //   router.push("/dashboard");
    // }, 5000);
  }, [router.query?.status]);

  return (
    <>
      <Dialog scroll="body" open={showPopUp} onClose={pouUpContextFunctions.toggle}>
        {activeModal == "Status" && <PopupStatus action={toggle} title={statusTitle} link={`/dashboard`} linkText={linkText} text={text} status={"success"}></PopupStatus>}
        {activeModal == "BuyEventTicket" && <BuyEventTicket onCancel={toggle} onBuyTicket={onBuyTicket}></BuyEventTicket>}
        {activeModal == "BuyRaffleTicket" && <BuyRaffleTicket onCancel={toggle} onBuyRaffleTicket={onBuyRaffleTicket}></BuyRaffleTicket>}
        {activeModal == "PaymentOptions" && <PaymentOptions onCancel={toggle} onSelectPayOption={onSelectPayOption}></PaymentOptions>}
        {activeModal == "SelfCheckOut" && <SelfCheckOut onCancel={toggle} onCheckOut={onCheckOut}></SelfCheckOut>}
        {activeModal == "ReviewCheckOut" && <ReviewCheckOut amount={checkAmount} vendor={vendor} onCancel={toggle} onReview={onReview}></ReviewCheckOut>}
        {activeModal == "SelectCardType" && <SelectCardType onCancel={toggle} onSelectCardType={onSelectCardType}></SelectCardType>}
        {activeModal == "VerifyPayment" && <VerifyPayment onCancel={toggle} onVerify={onVerify}></VerifyPayment>}
        {activeModal == "EditCatalogue" && <EditCatalogue catalogueObj={editCatalogueObj} onCancel={toggle} toggleModal={toggle}></EditCatalogue>}
        {activeModal == "CreateCatalogue" && <CreateCatalogue onCancel={toggle} toggleModal={toggle}></CreateCatalogue>}
        {activeModal == "ChangePassword" && (
          <ChangePassword
            toggleModal={toggle}
            // onCancel={() => {
            //   // console.log("should toggleChange password");
            //   toggle();
            // }}
          ></ChangePassword>
        )}
      </Dialog>
      <popUpContext.Provider value={pouUpContextFunctions}>{children}</popUpContext.Provider>
    </>
  );
};
