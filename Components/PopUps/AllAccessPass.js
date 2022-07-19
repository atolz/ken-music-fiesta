import React from "react";
import Popup from "../Layout/Popup";

const AllAccessPass = ({ onClose, qrCode, assetId = "XW25Y5XQKBL2FUUVUEMQ" }) => {
  return (
    <Popup footer={false}>
      <div className="grid place-items-center px-6 relative">
        <img
          onClick={() => {
            onClose();
          }}
          className=" absolute -right-4 -top-4 cursor-pointer"
          src="/cancel-filled.png"
        ></img>
        <img className=" h-[66.5px] cursor-pointer mb-[4rem] mt-5" src="/new_logo.png"></img>
        <p className=" font-bold text-[2rem] text-black">All Access Pass</p>
        <div className="p-[2.5rem] !border-2 grid place-items-center rounded-primary w-[25.6rem] mt-[2.7rem] mb-[2.4rem] gradient-border-bg">
          <img className="p-1 rounded-[1rem] border-2 border-dashed" src={qrCode}></img>
        </div>
        <div className="rounded-[1rem] bg-[#F6EBF5] grid place-items-center h-[6.2rem] px-[2rem] text-[1.7rem] text-primary font-bold mb-8">{assetId}</div>
      </div>
    </Popup>
  );
};

export default AllAccessPass;
