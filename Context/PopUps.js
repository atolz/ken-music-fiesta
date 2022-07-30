import React, { useState, createContext, useEffect, useContext } from "react";
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
import ReceiptStatus from "../Components/PopUps/ReceiptStatus";
import { DataContext } from "./fetchData";
import formatNumberWithCommas from "../Utils/addCommas";
import ContinueToCountry from "../Components/PopUps/ContinueToCountry";
import BuyProgressiveToken from "../Components/PopUps/BuyProgressiveToken";
import NairaSymbol from "../Components/NairaSymbol";
import AppConfetti from "../Components/Confetti";
import useIsNigerian from "../hooks/useIsNigerian";

const pouUpContextFunctions = {
  initSelfCheckOut: () => {},
  initReviewVendorPayment: (amount, vendor, transactionId) => {},
  initBuyRaffleTicket: () => {},
  initBuyProgressiveToken: () => {},
  initConfirmLocation: () => {},
  initBuyToken: () => {},
  initActivateCard: () => {},
  initPayPerView: () => {},
  initChangePassword: () => {},
  initBuyTicket: (eventName, slugName, ticketCategories) => {},
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
  openMintTicketPrompt: () => {},
  // test: "",
};
export const popUpContext = createContext(pouUpContextFunctions);

export const PopUpContextProvider = ({ children }) => {
  const [purpose, setPurpose] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [recycle, setRecyle] = useState(true);
  const [transactionId, setTransactionId] = useState("");
  const [nameOfEvent, setNameOfEvent] = useState("");
  const [eventSlugName, setEventSlugName] = useState("");
  const [eventTicketCategories, setEventTicketCategories] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [statusTitle, setStatusTitle] = useState();
  const [statusAction, setStatusAction] = useState(null);
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
  const [diasporanConfirmedNigerian, setDiasporanConfirmedNigerian] = useState(false);

  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const { toggleLoad } = useLoading();
  const toggleAlertBar = useShowAlert();
  const { isNigerian } = useIsNigerian();
  const dispatch = useDispatch();
  const [page, setGlobalPage] = useState("Dashboard");
  const AppData = useContext(DataContext);

  const pouUpContextFunctions = {
    initBuyRaffleTicket: initBuyRaffleTicket,
    initBuyProgressiveToken: initBuyProgressiveToken,
    onBuyTicket: onBuyTicket,
    initConfirmLocation: initConfirmLocation,
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
    openMintTicketPrompt,
    openMintTicketPrompt,
    initReviewVendorPayment: initReviewVendorPayment,

    onReview: onReview,

    onSelectPayOption: onSelectPayOption,
    toggle: toggle,
    closeModal: closeModal,
    test: "activeModal",
  };

  function initBuyTicket(eventName, slugName, tickets) {
    if (!isLoggedIn() || getLocalStorage("section") !== "User") {
      return router.push("/auth/sign-in");
    }
    setPurpose("EventTicket");
    toggle();
    setActiveModal("BuyEventTicket");
    setNameOfEvent(eventName);
    setEventSlugName(slugName);
    setEventTicketCategories(tickets);
  }

  function initBuyRaffleTicket() {
    if (!isLoggedIn()) {
      return router.push("/auth/sign-in");
    }
    setPurpose("RaffleTicket");
    toggle();
    setActiveModal("BuyRaffleTicket");
  }
  function initBuyProgressiveToken() {
    if (!isLoggedIn()) {
      return router.push("/auth/sign-in");
    }
    setPurpose("BuyProgressiveToken");
    toggle();
    setActiveModal("ProgressiveToken");
  }
  function initConfirmLocation() {
    setActiveModal("ContinueToCountry");
    toggle();
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
  function initReviewVendorPayment(amount, vendor, transactionId) {
    setPurpose("SelfCheckout");
    setTransactionId(transactionId);
    setCheckAmount(amount);
    setVendor(vendor);
    toggle();
    setActiveModal("ReviewCheckOut");
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

  function onContinueToCountry(isNigerian) {
    // At this point the user profile hasConfirmedNigerian should be updated on user if the user continued as Nigerian and stored in the AppDataState.user.data.hasConfirmedNigerian
    // The call to confirm diasporan country is done in the ContinueToCountry popUp
    // Which also update the app state(user) and the udpated value is used in the mintTicketPrompt
    if (isNigerian) {
      setDiasporanConfirmedNigerian(true);
    } else {
      setDiasporanConfirmedNigerian(false);
    }
    openMintTicketPrompt();
  }

  function openRequestBvnPrompt() {
    setActiveModal("ProvideBvnPrompt");
    setPurpose("MintTicket");
    setShowPopUp(true);
  }
  function openMintTicketPrompt() {
    setActiveModal("MintPrompt");
    setPurpose("MintTicket");
    setShowPopUp(true);
  }

  function onBuyTicket(quantity, tickets) {
    // setTicketAmount(amount);
    // setTicketType(type);
    // setItemQuantity(quantity);
    // setActiveModal("PaymentOptions");
    onSelectPayOption("SEERBIT", quantity, tickets);
  }
  function onBuyRaffleTicket(quantity) {
    // setTicketAmount(amount);
    // setItemQuantity(quantity);
    // setActiveModal("PaymentOptions");
    onSelectPayOption("SEERBIT", quantity);
  }
  function onBuyProgressiveToken(quantity) {
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

  function onCheckOut(amount, vendor) {
    setActiveModal("ReviewCheckOut");
    setCheckAmount(amount);
    setVendor(vendor);
  }

  function onReview() {
    // setActiveModal("SelectCardType");
    onSelectCardType();
    // setLinkText("View Receipt");
    // setStatusTitle("Purchase Successful");
    // setText("Your purchase order is successful and your account has been credited.");
    // setActiveModal("Status");
  }

  function onVerify() {
    setActiveModal("Status");
  }

  function onContinueToMint() {
    console.log("on mint ticket: country is", AppData.user?.data?.country);
    setPurpose("MintTicket");
    if (AppData.user?.data?.country == "Nigeria") {
      // onSelectPayOption("SEERBIT", 200);
      setActiveModal("NigerianUserConsent");
      return;
    } else if (AppData.user?.data?.country !== "Nigeria" && diasporanConfirmedNigerian) {
      setActiveModal("NigerianUserConsent");
      return;
    } else {
      setActiveModal("DiasporaUserConsent");
    }
  }

  function onNigeriaUserConsent() {
    setActiveModal("VerifyBVN");
  }

  function onDiasporaConsent() {
    onSelectPayOption("SEERBIT", 200);
  }

  function onInputBVN(status) {
    // setItemQuantity(quantity);
    if (status == false) {
      return;
    } else {
      // setActiveModal("PaymentOptions");
      onSelectPayOption("SEERBIT", 200);
    }
  }

  async function onSelectPayOption(payOptType, quantity, tickets) {
    const env = process.env.NODE_ENV;
    console.log("enviroment is", env);
    let redirectUrl = "";
    if (env == "development") {
      redirectUrl = `http://${window?.location.hostname}:${window?.location.port}/dashboard?amount=${quantity}&status=success&purpose=${purpose}`;
    } else if (env == "production") {
      redirectUrl = `https://${window?.location.hostname}/dashboard?amount=${quantity}&status=success&purpose=${purpose}`;
    }
    console.log("payment details is", {
      purpose: purpose,
      eventName: nameOfEvent,
      eventSlug: eventSlugName,
      itemQuantity: quantity || itemQuantity,
      payment_agent: payOptType || "SEERBIT",
      // payment_agent: "PAYSTACK",
      tickets: tickets || ticketType,
      redirectUrl: redirectUrl,
    });
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.post(
        "/payment/buy",
        {
          purpose: purpose,
          eventName: nameOfEvent,
          eventSlug: eventSlugName,
          itemQuantity: quantity || itemQuantity,
          payment_agent: payOptType,
          // payment_agent: "PAYSTACK",
          tickets: tickets || ticketType,
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
      redirectUrl = `http://${window?.location.hostname}:${window?.location.port}/dashboard?status=success&amount=${checkAmount}&purpose=${purpose}&transactionId=${transactionId}&vendor=${vendor}`;
    } else if (env == "production") {
      // redirectUrl = `https://ken-music-fiesta-2.vercel.app/dashboard?status=success&amount=${checkAmount}&purpose=${purpose}&transactionId=${transactionId}&vendor=${vendor}`;
      redirectUrl = `https://${window?.location.hostname}/dashboard?status=success&amount=${checkAmount}&purpose=${purpose}&transactionId=${transactionId}&vendor=${vendor}`;
    }
    console.log("payment details is", {
      purpose: purpose,
      amount: parseInt(checkAmount),
      // itemQuantity: ticketAmount,
      payment_agent: "SEERBIT",
      // ticketType: "string",
      redirectUrl: redirectUrl,
      transactionId: transactionId,
    });
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.post(
        "/payment/buy",
        {
          purpose: purpose,
          itemQuantity: ticketAmount,
          // amount: parseInt(checkAmount?.replaceAll(",", "")),
          amount: parseInt(checkAmount),
          payment_agent: "SEERBIT",
          // ticketType: "string",
          redirectUrl: redirectUrl,
          transactionId: transactionId,
        },
        {
          headers: {
            Authorization: `Bearer ${getLocalStorage("token")}`,
          },
        }
      );
      // console.log("after response is.................................");
      console.log("response is", resp.data);
      router.push(resp.data.redirectUrl);
      toggleLoad();
    } catch (error) {
      console.log("AN error has occured pls try again laters", error);
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

  const setPage = (p) => {
    console.log("in set page< pageis", p);
    dispatch(setActivePage(p));
  };

  useEffect(() => {
    console.log("Roter is ////////", router.query?.status);
    console.log("Roter is ////////", router.query);
    if (
      router.query?.status?.includes("success") &&
      (!router.query?.purpose?.includes("LiveStream") || !router.query?.purpose?.includes("SelfCheckout") || !router.query?.purpose?.includes("MintTicket"))
    ) {
      console.log("sucess payed");
      setLinkText("Go to dashboard");
      // if
      setStatusTitle("Purchase Order Success");
      setText(`Your purchase order for ${router?.query?.amount} tickets was successful`);
      setActiveModal("Status");
      toggle();
      setTimeout(() => {
        router.replace("/dashboard");
      }, 1000);
    }
    if (router.query?.status?.includes("success") && router.query?.purpose?.includes("SelfCheckout")) {
      setLinkText("View Receipt");
      setStatusTitle("Purchase Order Success");
      setText(`Your payment of ${router?.query?.amount} was successful!`);
      setActiveModal("Status");
      setVendor(router?.query?.vendor);
      setTransactionId(router?.query?.transactionId);
      setCheckAmount(router?.query?.amount);
      setStatusAction(() => {
        return () => {
          setActiveModal("PaymentDetails");
        };
      });
      toggle();
      setTimeout(() => {
        router.replace("/dashboard");
      }, 1000);
    }
    if (router.query?.status?.includes("success") && router.query?.purpose?.includes("MintTicket")) {
      setLinkText("View Ticket");
      setStatusTitle("Mint Kennis Music Ticket Successfully!");
      setText(
        <p>
          Your payment of {isNigerian() ? <NairaSymbol></NairaSymbol> : "$"}
          {router?.query?.amount} was successful. You have earned the Kennis all access pass.
        </p>
      );
      setActiveModal("Status");
      setVendor(router?.query?.vendor);
      setTransactionId(router?.query?.transactionId);
      setCheckAmount(router?.query?.amount);
      setLink("/dashboard?mint=true");
      setShowConfetti(true);
      setTimeout(() => {
        setRecyle(false);
      }, 2000);
      setStatusAction(() => {
        return () => {
          setPage("Profile");
          setShowPopUp(false);
          // router.push("/dashboard?mint=true");
        };
      });
      toggle();
      setTimeout(() => {
        router.replace("/dashboard");
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
        router.replace("/dashboard");
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
      <AppConfetti recycle={recycle} setShow={setShowConfetti} show={showConfetti}></AppConfetti>
      <popUpContext.Provider value={pouUpContextFunctions}>
        <Dialog scroll="body" open={showPopUp} onClose={pouUpContextFunctions.toggle}>
          {activeModal == "Status" && (
            <PopupStatus
              action={() => {
                if (statusAction) {
                  statusAction();
                } else {
                  toggle();
                }
                // setPage(page);
              }}
              title={statusTitle}
              link={link}
              linkText={linkText}
              text={text}
              status={"success"}
              onCancel={toggle}
            ></PopupStatus>
          )}
          {activeModal == "ContinueToCountry" && <ContinueToCountry onCancel={toggle} onAction={onContinueToCountry}></ContinueToCountry>}
          {/* {activeModal == "ContinueToCountry" && <ContinueToCountry></ContinueToCountry>} */}

          {activeModal == "MintPrompt" && (
            <Prompt
              title={"Mint Kennis Music Ticket"}
              desc={<span>Thank you for signing up. To further make your experience better, mint you ticket today and enjoy more offers.</span>}
              onCancel={toggle}
              imgUrl="/3d-onpoint-finger.jpg"
              onAction={onContinueToMint}
            ></Prompt>
          )}

          {activeModal == "DiasporaUserConsent" && (
            <Prompt
              title={"Notice"}
              desc={
                <span>
                  By continuing, you will be charged a fee of<span className=" font-bold !text-[#827F7F]"> $2 </span>to mint your first kennis ticket.
                </span>
              }
              onCancel={toggle}
              imgUrl="/3d-onpoint-finger.jpg"
              onAction={onDiasporaConsent}
            ></Prompt>
          )}

          {activeModal == "NigerianUserConsent" && (
            <Prompt
              title={"Your consent is needed"}
              desc={
                <span>
                  By continuing, you consent to and authorize Parallex Bank Limited to open an account with your details on the platform and issue a Kennis Music Bites debit card in your name. You
                  will be charged a fee of{" "}
                  <span className=" font-bold !text-[#827F7F]">
                    {" "}
                    <NairaSymbol></NairaSymbol>200
                  </span>{" "}
                  to mint your first kennis ticket{" "}
                </span>
              }
              onCancel={toggle}
              imgUrl="/info-yellow.svg"
              onAction={onNigeriaUserConsent}
            ></Prompt>
          )}
          {activeModal == "PaymentDetails" && (
            <ReceiptStatus
              onCancel={toggle}
              items={[
                { name: "Vendor Details", value: vendor?.split("?")[0] || "*Kfc Nigeria" },
                {
                  name: "Amount",
                  value:
                    (
                      <span>
                        <span className=" font-sans">&#8358;</span>
                        {formatNumberWithCommas(checkAmount)}
                      </span>
                    ) || 5000,
                },
                { name: "Transaction ID", value: transactionId || "34538590584736s" },
              ]}
              caption="Transaction Receipt"
            ></ReceiptStatus>
          )}
          {activeModal == "BuyEventTicket" && <BuyEventTicket ticketCategories={eventTicketCategories} onCancel={toggle} onBuyTicket={onBuyTicket}></BuyEventTicket>}
          {activeModal == "BuyRaffleTicket" && <BuyRaffleTicket onCancel={toggle} onBuyRaffleTicket={onBuyRaffleTicket}></BuyRaffleTicket>}
          {activeModal == "BuyProgressiveToken" && <BuyProgressiveToken onCancel={toggle} onBuyProgressiveToken={onBuyProgressiveToken}></BuyProgressiveToken>}
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
