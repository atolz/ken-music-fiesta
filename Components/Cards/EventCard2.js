import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import PopupStatus from "../PopUps/PopUpStatus";
import PaymentOptions from "../PopUps/PaymentOptions";
import BuyEventTicket from "../PopUps/BuyEventTicket";
import { popUpContext } from "../../Context/PopUps";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../store/pages";

const EventCard2 = ({ title = "Kennis Easter Fiesta", desc = "Get your ticket for the event and book your spot to the most exciting event this easter", action = () => {}, img }) => {
  const popUpFunctions = useContext(popUpContext);

  const dispatch = useDispatch();
  return (
    <>
      {/* // <div className="py-[4.1rem] px-[5.9rem] bg-party rounded-[2rem] bg-cover w-[565px]"> */}
      <div
        style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})` }}
        className="py-[6.1rem] px-[2.9rem] sidebar:px-[5.9rem]   rounded-[2rem] bg-cover bg-slate-900 flex flex-col items-start h-max min-h-[25rem]"
      >
        <h3 className="mb-[1.92rem] font-bold text-[3.4rem] sidebar:text-[4.4rem] max-w-[408px] text-[#FAFAFA] leading-[4.8rem] block !text-left">{title}</h3>
        <p className="mb-[4.2rem] font-normal text-[1.4rem] max-w-[27rem] leading-[2rem] text-[#FAFAFA] !text-left h-[100px] overflow-hidden text-ellipsis">{desc}</p>
        <button
          onClick={() => {
            action();
          }}
          className="btn btn--outlined text-white !border-white mb-[4.8rem]"
        >
          Buy Event Ticket
        </button>
        <div className="flex items-center mt-auto">
          <span className="font-normal text-[1.2rem] text-[#FAFAFA] mr-12 !text-left whitespace-nowrap">Powered by</span>
          <img src="/kudibar-logo.svg"></img>
        </div>
      </div>
    </>
  );
};

export default EventCard2;
