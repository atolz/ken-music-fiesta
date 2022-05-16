import React, { useState, createContext, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import BuyEventTicket from "../Components/PopUps/BuyEventTicket";
import PaymentOptions from "../Components/PopUps/PaymentOptions";
import PopupStatus from "../Components/PopUps/PopUpStatus";
import ReviewCheckOut from "../Components/PopUps/ReviewCheckOut";
import SelfCheckOut from "../Components/PopUps/SelfCheckOut";

const pouUpContextFunctions = {
  initSelfCheckOut: () => {},
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
  const [activeModal, setActiveModal] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [statusTitle, setStatusTitle] = useState();
  const [linkText, setLinkText] = useState();
  const [text, setText] = useState();

  const pouUpContextFunctions = {
    onBuyTicket: onBuyTicket,
    initSelfCheckOut: initSelfCheckOut,
    initBuyTicket: initBuyTicket,
    onCheckOut: onCheckOut,

    onReview: onReview,

    onSelectPayOption: onSelectPayOption,
    toggle: toggle,
  };

  function initBuyTicket() {
    toggle();
    setActiveModal("BuyEventTicket");
  }

  function initSelfCheckOut() {
    toggle();
    setActiveModal("SelfCheckOut");
  }

  function onBuyTicket() {
    setActiveModal("PaymentOptions");
  }

  function onCheckOut() {
    setActiveModal("ReviewCheckOut");
  }

  function onReview() {
    setLinkText("View Receipt");
    setStatusTitle("Purchase Successful");
    setText("Your purchase order is successful and your account has been credited.");
    setActiveModal("Status");
  }

  function onSelectPayOption() {
    setLinkText("Go to dashboard");
    setStatusTitle("Purchase Order Success");
    setText("Your purchase order for 20 tickets was successful");
    setActiveModal("Status");
  }
  function toggle() {
    console.log("toggleing...");
    showPopUp ? setShowPopUp(false) : setShowPopUp(true);
  }

  return (
    <>
      <Dialog open={showPopUp} onClose={pouUpContextFunctions.toggle}>
        {activeModal == "Status" && <PopupStatus action={toggle} title={statusTitle} link={`/dashboard`} linkText={linkText} text={text} status={"success"}></PopupStatus>}
        {activeModal == "BuyEventTicket" && <BuyEventTicket onCancel={toggle} onBuyTicket={onBuyTicket}></BuyEventTicket>}
        {activeModal == "PaymentOptions" && <PaymentOptions onCancel={toggle} onSelectPayOption={onSelectPayOption}></PaymentOptions>}
        {activeModal == "SelfCheckOut" && <SelfCheckOut onCancel={toggle} onCheckOut={onCheckOut}></SelfCheckOut>}
        {activeModal == "ReviewCheckOut" && <ReviewCheckOut onCancel={toggle} onReview={onReview}></ReviewCheckOut>}
      </Dialog>
      <popUpContext.Provider value={pouUpContextFunctions}>{children}</popUpContext.Provider>
    </>
  );
};
