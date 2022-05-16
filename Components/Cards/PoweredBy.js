import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import PopupStatus from "../PopUps/PopUpStatus";
import PaymentOptions from "../PopUps/PaymentOptions";
import BuyEventTicket from "../PopUps/BuyEventTicket";

const PoweredBy = () => {
  const [activeModal, setActiveModal] = useState("");
  const [show, setShow] = useState(false);
  const [statusTitle, setStatusTitle] = useState();
  const [linkText, setLinkText] = useState();
  const [text, setText] = useState();

  // function onBuyTicket() {
  //   setActiveModal("PaymentOptions");
  // }

  function onBuyTicket() {
    setActiveModal("PaymentOptions");
  }

  function onSelectPayOption() {
    setLinkText("Go to dashboard");
    setStatusTitle("Purchase Order Success");
    setText("Your purchase order for 20 tickets was successful");
    setActiveModal("Status");
  }

  function toggle() {
    console.log("toggleing...");
    show ? setShow(false) : setShow(true);
  }

  return (
    <>
      <Dialog open={show} onClose={toggle}>
        {activeModal == "Status" && <PopupStatus action={toggle} title={statusTitle} link={`/dashboard`} linkText={linkText} text={text} status={"success"}></PopupStatus>}
        {activeModal == "BuyEventTicket" && <BuyEventTicket onCancel={toggle} onBuyTicket={onBuyTicket}></BuyEventTicket>}
        {activeModal == "PaymentOptions" && <PaymentOptions onCancel={toggle} onSelectPayOption={onSelectPayOption}></PaymentOptions>}
      </Dialog>
      {/* // <div className="py-[4.1rem] px-[5.9rem] bg-party rounded-[2rem] bg-cover w-[565px]"> */}
      <div className="py-[3.1rem] px-[2.9rem] sidebar:px-[5.9rem]  bg-party rounded-[2rem] bg-cover flex-1 bg-slate-900">
        <h3 className="mb-[1.92rem] font-bold text-[3.4rem] sidebar:text-[4.4rem] max-w-[408px] text-[#FAFAFA] leading-[4.8rem]">Kennis Easter Fiesta</h3>
        <p className="mb-[4.2rem] font-normal text-[1.4rem] max-w-[27rem] leading-[2rem] text-[#FAFAFA]">Get your ticket for the event and book your spot to the most exciting event this easter</p>
        <button
          onClick={() => {
            setActiveModal("BuyEventTicket");
            toggle();
          }}
          className="btn btn--outlined text-white !border-white mb-[4.8rem]"
        >
          Buy Event Ticket
        </button>
        <div className="flex items-center">
          <span className="font-normal text-[1.2rem] text-[#FAFAFA] mr-12">Powered by</span>
          <img src="/kudibar-logo.svg"></img>
        </div>
      </div>
    </>
  );
};

export default PoweredBy;
