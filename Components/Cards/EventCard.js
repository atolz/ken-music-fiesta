import React, { useContext, useState } from "react";
import { popUpContext } from "../../Context/PopUps";

const EventCard = ({ name, desc, action = () => {} }) => {
  const popUpFunctions = useContext(popUpContext);
  return (
    <>
      {/* // <div className="py-[4.1rem] px-[5.9rem] bg-party rounded-[2rem] bg-cover w-[565px]"> */}
      <div className="py-[4.1rem] pb-[2rem] px-[2.9rem] sidebar:px-[4.9rem]  bg-party rounded-[2rem] bg-cover bg-slate-900 flex flex-col items-start h-max ">
        <h3 className="mb-[1.92rem] font-bold text-[3.4rem] sidebar:text-[4.4rem] max-w-[408px] text-[#FAFAFA] leading-[4.8rem] block">Kennis Easter Fiesta</h3>
        <p className="mb-[4.2rem] font-normal text-[1.4rem] max-w-[27rem] leading-[2rem] text-[#FAFAFA]">Get your ticket for the event and book your spot to the most exciting event this easter</p>
        <button
          onClick={() => {
            action();
          }}
          className="btn btn--outlined text-white !border-white mb-[2.8rem]"
        >
          Event Details
        </button>
      </div>
    </>
  );
};

export default EventCard;
