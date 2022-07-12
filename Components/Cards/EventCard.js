import React, { useContext, useState } from "react";
import { popUpContext } from "../../Context/PopUps";

const EventCard = ({ name = "Kennis Easter Fiesta", desc = "Get your ticket for the event and book your spot to the most exciting event this easter", action = () => {}, img }) => {
  const popUpFunctions = useContext(popUpContext);
  return (
    <>
      {/* // <div className="py-[4.1rem] px-[5.9rem] bg-party rounded-[2rem] bg-cover w-[565px]"> */}
      <div
        style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})` }}
        className={`py-[4.1rem] relative overflow-hidden pb-[2rem] px-[2.7rem] sidebar:px-[4.9rem] min-h-[34rem]   rounded-[2rem] bg-cover bg-slate-900 flex flex-col items-start h-auto ${
          img ? "" : "bg-party"
        }`}
      >
        {/* <div style={{ bacground: "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(.jpg)" }} className=" absolute top-0 left-0 w-full h-full z-0"></div> */}
        <h3 className="mb-[1.92rem] font-bold text-[3.4rem] sidebar:text-[4.4rem] text-[#FAFAFA] leading-[4.8rem] block  text-ellipsis z-10">{name}</h3>
        {/* <h3 className="mb-[1.92rem] font-bold text-[3.4rem] sidebar:text-[4.4rem] max-w-[408px] text-[#FAFAFA] leading-[4.8rem] block  text-ellipsis z-10">{name}</h3> */}
        {/* <p className="mb-[4.2rem] font-normal text-[1.4rem] leading-[2rem] text-[#FAFAFA] relative">{desc}</p> */}
        <p className="mb-[4.2rem] font-normal text-[1.4rem] max-w-[27rem] leading-[2rem] text-[#FAFAFA] relative">{desc}</p>
        <button
          onClick={() => {
            action();
          }}
          className="btn btn--outlined text-white !border-white mb-[2.8rem] mt-auto relative"
        >
          Event Details
        </button>
      </div>
    </>
  );
};

export default EventCard;
