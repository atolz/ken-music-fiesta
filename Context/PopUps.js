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

const pouUpContextFunctions = {
  initSelfCheckOut: () => {},
  initBuyRaffleTicket: () => {},
  initBuyTicket: () => {},
  onBuyTicket: () => {},
  onCheckOut: () => {},
  onReview: () => {},
  onSelectPayOption: () => {},
  toggle: function toggle() {
    console.log("toggleing...");
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  },
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

  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const { toggleLoad } = useLoading();
  const toggleAlertBar = useShowAlert();

  const pouUpContextFunctions = {
    initBuyRaffleTicket: initBuyRaffleTicket,
    onBuyTicket: onBuyTicket,
    initSelfCheckOut: initSelfCheckOut,
    initBuyTicket: initBuyTicket,
    onCheckOut: onCheckOut,

    onReview: onReview,

    onSelectPayOption: onSelectPayOption,
    toggle: toggle,
  };

  function initBuyTicket() {
    if (!isLoggedIn()) {
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
      redirectUrl = "http://localhost:3000/dashboard?status=success";
    } else if (env == "production") {
      redirectUrl = "https://ken-music-fiesta-2.vercel.app/dashboard?status=success";
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
    console.log("toggleing...");
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  }

  useEffect(() => {
    console.log("Roteris", router.query?.status);
    if (router.query.status == "success") {
      console.log("sucess payed");
      setLinkText("Go to dashboard");
      setStatusTitle("Purchase Order Success");
      setText("Your purchase order for 20 tickets was successful");
      setActiveModal("Status");
      toggle();
    }
  }, [router.query?.status]);

  return (
    <>
      <Dialog open={showPopUp} onClose={pouUpContextFunctions.toggle}>
        {activeModal == "Status" && <PopupStatus action={toggle} title={statusTitle} link={`/dashboard`} linkText={linkText} text={text} status={"success"}></PopupStatus>}
        {activeModal == "BuyEventTicket" && <BuyEventTicket onCancel={toggle} onBuyTicket={onBuyTicket}></BuyEventTicket>}
        {activeModal == "BuyRaffleTicket" && <BuyRaffleTicket onCancel={toggle} onBuyRaffleTicket={onBuyRaffleTicket}></BuyRaffleTicket>}
        {activeModal == "PaymentOptions" && <PaymentOptions onCancel={toggle} onSelectPayOption={onSelectPayOption}></PaymentOptions>}
        {activeModal == "SelfCheckOut" && <SelfCheckOut onCancel={toggle} onCheckOut={onCheckOut}></SelfCheckOut>}
        {activeModal == "ReviewCheckOut" && <ReviewCheckOut amount={checkAmount} vendor={vendor} onCancel={toggle} onReview={onReview}></ReviewCheckOut>}
        {activeModal == "SelectCardType" && <SelectCardType onCancel={toggle} onSelectCardType={onSelectCardType}></SelectCardType>}
        {activeModal == "VerifyPayment" && <VerifyPayment onCancel={toggle} onVerify={onVerify}></VerifyPayment>}
      </Dialog>
      <popUpContext.Provider value={pouUpContextFunctions}>{children}</popUpContext.Provider>
    </>
  );
};
