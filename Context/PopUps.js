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
import BuyToken from "../Components/PopUps/BuyToken";
import { setActivePage } from "../store/pages";
import { useDispatch } from "react-redux";
import CardColor from "../Components/PopUps/CardColor";
import VerifyBVN from "../Components/PopUps/VerifyBVN";
import ActivateCard from "../Components/PopUps/ActivateCard";
import Head from "next/head";
import Prompt from "../Components/PopUps/Prompt";

const pouUpContextFunctions = {
  initSelfCheckOut: () => {},
  initBuyRaffleTicket: () => {},
  initBuyToken: () => {},
  initActivateCard: () => {},
  initPayPerView: () => {},
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
  initSetStatus: () => {},
  openRequestBvnPrompt: () => {},
  // test: "",
};
export const popUpContext = createContext(pouUpContextFunctions);

export const PopUpContextProvider = ({ children }) => {
  const [purpose, setPurpose] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [statusTitle, setStatusTitle] = useState();
  const [linkText, setLinkText] = useState();
  const [link, setLink] = useState("/dashboard");
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
  const dispatch = useDispatch();
  const [page, setGlobalPage] = useState("Dashboard");

  const pouUpContextFunctions = {
    initBuyRaffleTicket: initBuyRaffleTicket,
    onBuyTicket: onBuyTicket,
    initBuyToken: initBuyToken,
    initActivateCard: initActivateCard,
    initPayPerView: initPayPerView,
    initSelfCheckOut: initSelfCheckOut,
    initChangePassword: initChangePassword,
    initBuyTicket: initBuyTicket,
    onCheckOut: onCheckOut,
    initEditCatalogue: initEditCatalogue,
    initCreateCatalogue: initCreateCatalogue,
    initSetStatus: initSetStatus,
    openRequestBvnPrompt: openRequestBvnPrompt,

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
  function initBuyToken() {
    if (!isLoggedIn()) {
      return router.push("/auth/sign-in");
    }
    setPurpose("ProgressiveToken");
    toggle();
    setActiveModal("BuyToken");
  }
  function initActivateCard() {
    setPurpose("CardActivation");
    toggle();
    setActiveModal("ActivateCard");
  }

  function initPayPerView() {
    if (!isLoggedIn()) {
      return router.push("/auth/sign-in");
    }
    setPurpose("LiveStream");
    setActiveModal("PaymentOptions");
    toggle();
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

  function initSetStatus(linkText, text, title) {
    console.log("setting status.................'''");
    setLinkText(linkText);
    setLink("/catalogues/dashboard");
    setText(text);
    setStatusTitle(title);
    setActiveModal("Status");
    setShowPopUp(true);
  }

  function openRequestBvnPrompt() {
    setActiveModal("ProvideBvnPrompt");
    setShowPopUp(true);
  }

  function onBuyTicket(quantity, type) {
    // setTicketAmount(amount);
    // setTicketType(type);
    // setItemQuantity(quantity);
    // setActiveModal("PaymentOptions");
    onSelectPayOption("SEERBIT", quantity, type);
  }
  function onBuyRaffleTicket(quantity) {
    // setTicketAmount(amount);
    // setItemQuantity(quantity);
    // setActiveModal("PaymentOptions");
    onSelectPayOption("SEERBIT", quantity);
  }
  function onBuyToken(quantity) {
    // setTicketAmount(amount);
    // setItemQuantity(quantity);
    // setActiveModal("PaymentOptions");
    onSelectPayOption("SEERBIT", quantity);
  }
  function onActivate(type) {
    // setItemQuantity(quantity);
    setActiveModal("CardColor");
  }
  function onSelectColor(type) {
    // setItemQuantity(quantity);
    // setActiveModal("PaymentOptions");
    onSelectPayOption("SEERBIT");
  }
  function onInputBVN(status) {
    // setItemQuantity(quantity);
    if (status == false) {
      return;
    }
    setShowPopUp(false);
    // setActiveModal("PaymentOptions");
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
  function onContinueToBvnVerification() {
    setActiveModal("VerifyBVN");
  }

  async function onSelectPayOption(payOptType, quantity, type) {
    const env = process.env.NODE_ENV;
    console.log("enviroment is", env);
    let redirectUrl = "";
    if (env == "development") {
      redirectUrl = `http://localhost:3000/dashboard?amount=${quantity}&status=success&purpose=${purpose}`;
    } else if (env == "production") {
      redirectUrl = `https://ken-music-fiesta-2.vercel.app/dashboard?amount=${quantity}&status=success&purpose=${purpose}`;
    }
    console.log("payment details is", {
      purpose: purpose,
      itemQuantity: quantity || itemQuantity,
      payment_agent: payOptType || "SEERBIT",
      // payment_agent: "PAYSTACK",
      ticketType: type || ticketType,
      redirectUrl: redirectUrl,
    });
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.post(
        "/payment/buy",
        {
          purpose: purpose,
          itemQuantity: quantity || itemQuantity,
          payment_agent: payOptType,
          // payment_agent: "PAYSTACK",
          ticketType: ticketType,
          redirectUrl: redirectUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${getLocalStorage("token")}`,
          },
        }
      );
      console.log("response is", resp.data);
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
      redirectUrl = `http://localhost:3000/dashboard?status=success&amount=${checkAmount}&purpose=${purpose}`;
    } else if (env == "production") {
      redirectUrl = `https://ken-music-fiesta-2.vercel.app/dashboard?status=success&amount=${checkAmount}&purpose=${purpose}`;
    }
    console.log("payment details is", {
      purpose: purpose,
      amount: checkAmount,
      // itemQuantity: ticketAmount,
      payment_agent: "SEERBIT",
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
          payment_agent: "SEERBIT",
          // ticketType: "string",
          redirectUrl: redirectUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${getLocalStorage("token")}`,
          },
        }
      );
      console.log("response is", resp.data);
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

  const setPage = (page) => {
    dispatch(setActivePage(page));
  };

  useEffect(() => {
    console.log("Roter is ////////", router.query?.status);
    console.log("Roter is ////////", router.query);
    if (router.query?.status?.includes("success") && (!router.query?.purpose?.includes("LiveStream") || !router.query?.purpose?.includes("SelfCheckout"))) {
      console.log("sucess payed");
      setLinkText("Go to dashboard");
      // if
      setStatusTitle("Purchase Order Success");
      setText(`Your purchase order for ${router?.query?.amount} tickets was successful`);
      setActiveModal("Status");
      toggle();
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
    if (router.query?.status?.includes("success") && router.query?.purpose?.includes("SelfCheckout")) {
      setLinkText("Go to dashboard");
      setStatusTitle("Purchase Order Success");
      setText(`Your payment of ${router?.query?.amount} was successful!`);
      setActiveModal("Status");
      toggle();
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }

    if (router.query?.status?.includes("success") && router.query?.purpose?.includes("LiveStream")) {
      setLinkText("Go to livestream");
      setText("Your purchase order for pay-per-view access was successful!");
      setStatusTitle("Pay-Per-View Access Successful");
      setActiveModal("Status");
      toggle();
      setGlobalPage("Livestream Event");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
  }, [router.query?.status]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://checkout.seerbitapi.com/" />
        <link rel="dns-prefetch" href="https://checkout.seerbitapi.com/" />
        <link rel="prefetch" href="https://checkout.seerbitapi.com/" />
      </Head>
      <popUpContext.Provider value={pouUpContextFunctions}>
        <Dialog scroll="body" open={showPopUp} onClose={pouUpContextFunctions.toggle}>
          {activeModal == "Status" && (
            <PopupStatus
              action={() => {
                toggle();
                setPage(page);
              }}
              title={statusTitle}
              link={link}
              linkText={linkText}
              text={text}
              status={"success"}
            ></PopupStatus>
          )}
          {activeModal == "ProvideBvnPrompt" && (
            <Prompt
              title={"We need more information"}
              desc={"Thank you for signing up. To further make your card collection easier, we will need you to provide your BVN"}
              onCancel={toggle}
              imgUrl="/3d-Padlock.png"
              onAction={onContinueToBvnVerification}
            ></Prompt>
          )}
          {activeModal == "BuyEventTicket" && <BuyEventTicket onCancel={toggle} onBuyTicket={onBuyTicket}></BuyEventTicket>}
          {activeModal == "BuyRaffleTicket" && <BuyRaffleTicket onCancel={toggle} onBuyRaffleTicket={onBuyRaffleTicket}></BuyRaffleTicket>}
          {activeModal == "BuyToken" && <BuyToken onCancel={toggle} onBuyToken={onBuyToken}></BuyToken>}
          {activeModal == "PaymentOptions" && <PaymentOptions onCancel={toggle} onSelectPayOption={onSelectPayOption}></PaymentOptions>}
          {activeModal == "SelfCheckOut" && <SelfCheckOut onCancel={toggle} onCheckOut={onCheckOut}></SelfCheckOut>}
          {activeModal == "ReviewCheckOut" && <ReviewCheckOut amount={checkAmount} vendor={vendor} onCancel={toggle} onReview={onReview}></ReviewCheckOut>}
          {activeModal == "SelectCardType" && <SelectCardType onCancel={toggle} onSelectCardType={onSelectCardType}></SelectCardType>}
          {activeModal == "VerifyPayment" && <VerifyPayment onCancel={toggle} onVerify={onVerify}></VerifyPayment>}
          {activeModal == "CardColor" && <CardColor onCancel={toggle} onSelectColor={onSelectColor}></CardColor>}
          {activeModal == "VerifyBVN" && <VerifyBVN onCancel={toggle} onInputBVN={onInputBVN}></VerifyBVN>}
          {activeModal == "ActivateCard" && <ActivateCard onCancel={toggle} onActivate={onActivate}></ActivateCard>}
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
        {children}
      </popUpContext.Provider>
    </>
  );
};
