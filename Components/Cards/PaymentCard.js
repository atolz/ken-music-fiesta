import React from "react";
import SvgIconWrapper from "../SvgIconWrapper";

const StatusCircle = ({ type, color, children }) => {
  return (
    <div className=" relative grid  place-items-center w-[75px] h-[75px]">
      <div style={{ backgroundColor: color }} className={`w-[75px] h-[75px] rounded-full grid place-content-center opacity-50 absolute`}></div>
      <div style={{ backgroundColor: color }} className={`w-[65px] h-[65px] rounded-full grid place-content-center opacity-80 absolute `}></div>
      <div style={{ backgroundColor: color }} className={`w-[55px] h-[55px] rounded-full grid place-content-center absolute `}></div>
      <div className=" absolute">{children}</div>
    </div>
  );
};

const PaymentCard = ({ className, color, action = () => {}, iconName = "info-circle", iconClassName }) => {
  return (
    <div
      onClick={() => {
        action();
      }}
      style={{ boxShadow: "0px 4px 44px rgba(163, 7, 168, 0.1)" }}
      className={`py-[2.4rem]  px-[3.6rem] rounded-[2rem] max-w-[100rem] bg-white flex items-center w-full relative ${className}`}
    >
      <StatusCircle color={color}>
        <SvgIconWrapper className={` text-black w-[2.84rem] h-[2.84rem] ${iconClassName}`} iconName={iconName}></SvgIconWrapper>
      </StatusCircle>
      <div className="ml-[3.9rem] flex justify-between">
        <span className="text-[#706C6C] mr-[4rem]">
          <p className=" font-semibold text-[1.4rem] mb-[8px]">Amount</p>
          <p className=" font-bold text-[2rem]">N4,000</p>
        </span>
        <span className="text-[#706C6C] mr-[4rem]">
          <p className=" font-semibold text-[1.4rem] mb-[8px]">Vendor</p>
          <p className=" font-bold text-[2rem]">The Place, Lekki</p>
        </span>
        <span className="text-[#706C6C]">
          <p className=" font-semibold text-[1.4rem] mb-[8px]">Date Issued</p>
          <p className=" font-bold text-[2rem]">22-06-2022. 6:15pm</p>
        </span>
      </div>
    </div>
  );
};

export default PaymentCard;
