import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import PaymentOptions from "../PopUps/PaymentOptions";
import PopupStatus from "../PopUps/PopUpStatus";
import LSCountDown from "../LiveStream/CountDown";
import Container from "../Layout/Container";
import { popUpContext } from "../../Context/PopUps";

const LiveStream = (props) => {
  const [accessType, setAccessType] = useState("");
  const [showLiveStream, setShowLiveStream] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [status, setStatus] = useState("");
  const [statusText, setStatusText] = useState("");
  const [statusTitle, setStatusTitle] = useState("");
  const [statusLinkText, setStatusLinkText] = useState("");
  const popUpFunctions = useContext(popUpContext);

  const [show, setShow] = useState(false);
  function toggle() {
    console.log("toggleing...");
    open ? setShow(false) : setShow(true);
  }
  function onSelectPayOption() {
    if (accessType == "Pay-Per-View") {
      setStatus("success");
      setStatusLinkText("Go to livestream");
      setStatusText("Your purchase order for pay-per-view access was successful");
      setStatusTitle("Pay-Per-View Access Successful");
    } else {
      setStatus("success");
      setStatusLinkText("Go to livestream");
      setStatusText("Your purchase order for pay-per-view access was successful");
      setStatusTitle("Data Bundle Access Successful");
    }
    setActiveModal("Status");
  }

  function onGoLiveStream() {
    setShowLiveStream(true);
    setShow(false);
  }

  return (
    <div {...props}>
      <div className="h-full">
        <Dialog open={show} onClose={toggle}>
          <div className={`transition-all ${activeModal == "Status" ? "visible" : "hidden"}`}>
            {" "}
            <PopupStatus title={statusTitle} text={statusText} status={status} linkText={statusLinkText} action={onGoLiveStream}></PopupStatus>
          </div>
          <div className={`transition-all ${activeModal == "PaymentOptions" ? "visible" : "hidden"}`}>
            <PaymentOptions onCancel={toggle} onSelectPayOption={onSelectPayOption}></PaymentOptions>
          </div>
        </Dialog>

        {!showLiveStream && (
          <div className="flex flex-wrap gap-16">
            <div
              onClick={() => {
                // setShow(true);
                // setActiveModal("PaymentOptions");
                // setAccessType("Pay-Per-View");
                popUpFunctions.initPayPerView();
              }}
              className="relative bg-[#F0F0F0] rounded-[2rem] max-w-[59.1rem] py-[3.9rem] px-[3.5rem] text-[1rem] min-w-[27rem] flex-1 hover:scale-[1.01] hover:shadow-sm cursor-pointer"
            >
              <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[21.4rem]">Pay-Per-View to Get Access</h3>
              <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">Watch the event as you go by buying the event ticket.</p>
              <img src="/3d-live.svg" className="absolute bottom-[3.3rem] right-[4rem] w-[45%]"></img>
            </div>
            <div
              onClick={() => {
                setShow(true);
                setActiveModal("PaymentOptions");
                setAccessType("Data Bundle");
              }}
              className="relative bg-[#FFF6E4] min-w-[27rem] rounded-[2rem] max-w-[59.1rem] py-[3.9rem] px-[3.5rem] flex-1 hover:scale-[1.01] hover:shadow-sm cursor-pointer"
            >
              <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]">Buy Data Bundle to Get Access</h3>
              <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">Buy data bundles to get tickets to the event.</p>
              <img src="/3d-hand-phone.svg" className="absolute bottom-0 right-[4rem] w-[45%]"></img>
            </div>
          </div>
        )}

        {/* LiveStream && Count down */}
        {showLiveStream && (
          <section className="px-[2rem] bg-[#FFF6E4] w-full h-[70vh] mobile:h-[70vh] md:!h-[79vh] rounded-[2rem] grid place-items-center place-content-center text-center">
            <p className=" font-bold text-[2.9rem] leading-[3.5rem]">Livestream of Easter fiesta</p>
            <LSCountDown time={1000000}></LSCountDown>
          </section>
        )}
      </div>
    </div>
  );
};

export default LiveStream;
