import { Dialog } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/fetchData";
import AllAccessPass from "../PopUps/AllAccessPass";
import QRCode from "qrcode";
import useIsNigerian from "../../hooks/useIsNigerian";

const Assets = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState();
  const AppData = useContext(DataContext);
  const [qrCode, setQrCode] = useState("");
  const { isNigerian } = useIsNigerian();

  useEffect(() => {
    const generateQR = async (text) => {
      try {
        setQrCode(await QRCode.toDataURL(text));
        console.log(await QRCode.toDataURL(text));
      } catch (err) {
        console.error(err);
      }
    };
    if (AppData?.user?.asset?.address) {
      console.log("in ge funct", AppData?.user?.asset?.address);
      generateQR(AppData?.user?.asset?.address);
    }
  }, [AppData?.user?.asset?.address]);

  return (
    <div>
      <Dialog
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        {activeModal == "ViewTicket" && (
          <AllAccessPass
            qrCode={qrCode}
            assetId={AppData?.user?.asset?.uuid}
            onClose={() => {
              setShowModal(false);
            }}
          ></AllAccessPass>
        )}
      </Dialog>
      {AppData?.user?.data?.hasMintedTicket && (
        <div className="flex items-center">
          <img src={"/badge.jpg"}></img>
          <div className=" flex flex-col ml-[2.5rem] self-start">
            <label>
              You have earned the Kennis<br></br> all access pass
            </label>
            <span className="!text-[1.4rem]">Download this ticket for easy verification</span>
          </div>

          <div className="flex items-center ml-auto">
            <a
              onClick={(e) => {
                e.preventDefault();
                setShowModal(true);
                setActiveModal("ViewTicket");
              }}
              className="kef-link !text-[1.3rem]"
            >
              View Ticket
            </a>
            <a
              title="Download Ticket"
              download={"Kennis Music Fiesta All Access Pass"}
              href="/qr-code.png"
              // onClick={(e) => {
              //   e.preventDefault();
              //   // setShowModal(true);
              //   // setActiveModal("ViewTicket");
              // }}
              className="kef-link !text-[1.3rem] ml-[1.6rem]"
            >
              Download Ticket
            </a>
          </div>
        </div>
      )}
      {!AppData?.user?.data?.hasMintedTicket && (
        <div className="grid flex-1 place-content-center place-items-center my-auto min-h-[30vh]">
          <span className=" !font-medium !text-[2.5rem] !text-[#E0E0E0] !leading-[3.2rem]">
            To enjoy more offers, mint your ticket for just{" "}
            <span className=" font-bold ">
              {isNigerian() ? (
                <span className="!font-medium !text-[2.5rem] !text-[#E0E0E0] !leading-[3.2rem]">
                  <span className="!font-medium !text-[2.5rem] !text-[#E0E0E0] !leading-[3.2rem] font-sans">&#8358;</span>200
                </span>
              ) : (
                <span className="!font-medium !text-[2.5rem] !text-[#E0E0E0] !leading-[3.2rem]">$2 </span>
              )}
              .
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Assets;
