import React from "react";
import SvgIconWrapper from "./SvgIconWrapper";

const HeaderDropDown = ({ children, imgSlot }) => {
  return (
    <div className="relative">
      <div className="peer cursor-pointer">{children}</div>
      <ul
        style={{ willChange: "font-size" }}
        className={` overflow-hidden w-max duration-300 h-auto -translate-x-1 translate-y-1 scale-0 hover:scale-100 peer-hover:scale-100 origin-top-right -z-30 opacity-0 hover:h-auto hover:opacity-100 transition-all peer-hover:h-auto peer-hover:opacity-100 absolute top-[4.5rem] hover:z-50 peer-hover:z-50 right-0 bg-white shadow-lg rounded-[2rem] border rounded-tr-none`}
      >
        <li
          onClick={() => {
            // setActivePage("Profile");
          }}
          className="flex items-center  cursor-pointer hover:bg-slate-50 p-[2.2rem]"
        >
          <div className=" w-[34px] h-[34px] rounded-full bg-[#FCAC0D] grid place-items-center">
            <SvgIconWrapper className={"!w-[13.5px] !h-[13.5px]"} iconName={"coin-dollar"}></SvgIconWrapper>
          </div>
          <span className=" font-medium text-[1.4rem] ml-[1.2rem]">
            Pending payment - <span className=" font-bold">N5,000</span>
          </span>
        </li>
        <li
          onClick={() => {
            // setActivePage("Profile");
          }}
          className="flex items-center  cursor-pointer hover:bg-slate-50 p-[2.2rem]"
        >
          <div className=" w-[34px] h-[34px] rounded-full bg-[#348B52] grid place-items-center">
            <SvgIconWrapper className={"!w-[13.5px] !h-[13.5px] text-white"} iconName={"coin-dollar"}></SvgIconWrapper>
          </div>
          <span className=" font-medium text-[1.4rem] ml-[1.2rem]">
            Payment successful - <span className=" font-bold">N4,000</span>
          </span>
        </li>
        <li
          onClick={() => {
            // setActivePage("Profile");
          }}
          className="flex items-center  cursor-pointer hover:bg-slate-50 p-[2.2rem]"
        >
          <div className=" w-[34px] h-[34px] rounded-full bg-[#348B52] grid place-items-center">
            <SvgIconWrapper className={"!w-[13.5px] !h-[13.5px] text-white"} iconName={"Raffle-Tickets"}></SvgIconWrapper>
          </div>
          <span className=" font-medium text-[1.4rem] ml-[1.2rem]">Raffle ticket purchased</span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderDropDown;

{
  /* <div className="relative">
      {active && <div onClick={() => setActive(false)} className="fixed top-0 left-0 w-screen h-screen "></div>}
      <div
        onClick={() => {
          console.log("set active");
          setActive(!active);
        }}
        className="peer cursor-pointer"
      >
        {children}
      </div>
      <ul
        className={` overflow-hidden w-max duration-300 h-auto  -translate-x-1 translate-y-1  ${
          active ? " scale-100 opacity-100 z-50 " : " scale-0 -z-30 opacity-0"
        }  origin-top-right   transition-all  absolute top-[4.5rem] right-0 bg-white shadow-lg rounded-[2rem] border rounded-tr-none`}
      >
        <li
          onClick={() => {
            // setActivePage("Profile");
          }}
          className="flex items-center  cursor-pointer hover:bg-slate-50 p-[2.2rem]"
        >
          <div className=" w-[34px] h-[34px] rounded-full bg-[#FCAC0D] grid place-items-center">
            <SvgIconWrapper className={"!w-[13.5px] !h-[13.5px]"} iconName={"coin-dollar"}></SvgIconWrapper>
          </div>
          <span className=" font-medium text-[1.4rem] ml-[1.2rem]">
            Pending payment - <span className=" font-bold">N5,000</span>
          </span>
        </li>
        <li
          onClick={() => {
            // setActivePage("Profile");
          }}
          className="flex items-center  cursor-pointer hover:bg-slate-50 p-[2.2rem]"
        >
          <div className=" w-[34px] h-[34px] rounded-full bg-[#348B52] grid place-items-center">
            <SvgIconWrapper className={"!w-[13.5px] !h-[13.5px] text-white"} iconName={"coin-dollar"}></SvgIconWrapper>
          </div>
          <span className=" font-medium text-[1.4rem] ml-[1.2rem]">
            Payment successful - <span className=" font-bold">N4,000</span>
          </span>
        </li>
        <li
          onClick={() => {
            // setActivePage("Profile");
          }}
          className="flex items-center  cursor-pointer hover:bg-slate-50 p-[2.2rem]"
        >
          <div className=" w-[34px] h-[34px] rounded-full bg-[#348B52] grid place-items-center">
            <SvgIconWrapper className={"!w-[13.5px] !h-[13.5px] text-white"} iconName={"Raffle-Tickets"}></SvgIconWrapper>
          </div>
          <span className=" font-medium text-[1.4rem] ml-[1.2rem]">Raffle ticket purchased</span>
        </li>
      </ul>
    </div> */
}
