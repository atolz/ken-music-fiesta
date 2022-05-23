import React, { useState } from "react";
import CountDown from "../Dashboard/CountDown";

import Dialog from "@mui/material/Dialog";
// import AmountOfTickets from "../PopUps/AmountOfTickets";
import VerifyPayment from "../PopUps/VerifyPayment";
import PaymentOptions from "../PopUps/PaymentOptions";
import PopupStatus from "../PopUps/PopUpStatus";
import CardAddress from "../PopUps/CardAddress";
import ActivateCard from "../PopUps/ActivateCard";
import ClaimReward from "../PopUps/ClaimReward";
import CardColor from "../PopUps/CardColor";
import VerifyBVN from "../PopUps/VerifyBVN";

const Activate = () => {
  const [visible, setVisible] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const [show, setShow] = useState(false);
  function toggle() {
    console.log("toggleing...");
    open ? setShow(false) : setShow(true);
  }

  function onActivate() {
    setActiveModal("CardAddress");
  }
  function onFillCardAddress() {
    setActiveModal("CardColor");
  }
  function onSelectColor() {
    setActiveModal("VerifyBVN");
  }
  function onInputBVN() {
    setActiveModal("PaymentOptions");
  }
  function onSelectPayOption() {
    setActiveModal("Status");
  }

  return (
    <>
      <Dialog open={show} onClose={toggle}>
        {activeModal == "Status" && (
          <PopupStatus
            action={toggle}
            title={"Card Activation successful"}
            linkText="Go to dashboard"
            text={"Your card has been successfully activated and now ready for use."}
            status={"success"}
          ></PopupStatus>
        )}
        {activeModal == "CardAddress" && <CardAddress onCancel={toggle} onFillCardAddress={onFillCardAddress}></CardAddress>}
        {activeModal == "ActivateCard" && <ActivateCard onCancel={toggle} onActivate={onActivate}></ActivateCard>}
        {activeModal == "PaymentOptions" && <PaymentOptions onCancel={toggle} onSelectPayOption={onSelectPayOption}></PaymentOptions>}
        {activeModal == "CardColor" && <CardColor onCancel={toggle} onSelectColor={onSelectColor}></CardColor>}
        {activeModal == "VerifyBVN" && <VerifyBVN onCancel={toggle} onInputBVN={onInputBVN}></VerifyBVN>}
      </Dialog>

      <div className="py-[4.4rem] mobile:py-[5.4rem] px-[3.2rem] mobile:px-[5.2rem] rounded-[2rem] flex-1 bgGrad text-white relative overflow-hidden min-h-[30rem] flex-grow min-w-[30rem] mb-[3.2rem]">
        <h2 className="text-[2.8rem] sm:text-[3.6rem] font-bold leading-[3.4rem] mb-[1.2rem]">Activate Card</h2>
        <p className="font-normal leading-[2rem] text-[1.4rem]  max-w-[27rem] relative z-20">You have to activate your card to start making purchases. Kindly do that ASAP.</p>
        <div className="flex items-center">
          {/* <button
            onClick={() => {
              setActiveModal("ActivateCard");
              setShow(true);
            }}
            className="btn !bg-white white-shadow !text-black mr-[29rem] mt-[3.7rem] z-10"
          >
            Activate
          </button> */}
          {/* {!visible && (
            <button
              onClick={() => {
                setVisible(true);
              }}
              className="btn !bg-white white-shadow !text-black mr-[29rem] mt-[3.7rem]"
            >
              Activate
            </button>
          )}
          {visible && <CountDown completed={<h2 className="text-[2.8rem] font-bold leading-[3.4rem] mb-[1.2rem] mr-[18rem] mt-[2rem]">Timer completed</h2>}></CountDown>} */}

          <img src="/3d-hand-card.png" className="absolute bottom-0 right-0 2xl:h-[311px] mobile:h-[25rem] h-[19rem] slide-up-now-opacity"></img>
        </div>
      </div>
    </>
  );
};

export default Activate;
