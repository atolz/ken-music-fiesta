import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { popUpContext } from "../../Context/PopUps";
import { DataContext } from "../../Context/fetchData";

const UserSideBar = ({ activePage, setActivePage }) => {
  const pages = ["Dashboard", "Raffle Tickets", "Rewards", "Livestream Event"];
  const icons = ["Dashboard", "Raffle-Tickets", "Rewards", "Livestream-Event"];
  const popUpFunctions = useContext(popUpContext);
  const AppData = useContext(DataContext);

  useEffect(() => {
    setActivePage("Dashboard");
  }, []);

  return (
    <>
      <div className="w-[37rem] h-screen px-[4.7rem] py-[4.9rem] hidden flex-col bg-[#010101] text-white bg-sidebar sidebar:flex">
        <Link href={"/"}>
          <img src="/kef-logo.svg" className="mb-[5.1rem] w-[11.3rem] mx-auto cursor-pointer"></img>
        </Link>
        <ul className="bg-r whitespace-nowrap">
          {/* Base Page Sidebar Items */}
          {pages.map((page, i) => {
            return (
              <li
                className="flex items-center mb-[4.2rem] cursor-pointer"
                key={i}
                onClick={() => {
                  setActivePage(page);
                }}
              >
                {/* Dot */}
                <div
                  className={`transition-all duration-200 w-[1rem] h-[1rem] rounded-full bg-[#FCAC0D] mr-[2.6rem] opacity-0 ${page == activePage ? " opacity-100" : ""} 
                 ${page == "Dashboard" && activePage == "Profile" ? " opacity-100" : ""}`}
                ></div>
                {/* Icon */}
                <i
                  className={`icon icon-${icons[i]} mr-[1.7rem] text-[1.8rem] ${icons[i] == "Dashboard" ? " text-[2.8rem]" : ""}  ${page == activePage ? "  text-[#FCAC0D]" : ""}
                  ${page == "Dashboard" && activePage == "Profile" ? " !text-[#FCAC0D]" : ""}`}
                ></i>
                {/* Text */}
                <span
                  className={`transition-all duration-200 font-normal text-[1.6rem] text-ellipsis overflow-hidden w-[160px]  ${
                    page == activePage ? " text-[#FCAC0D] !font-bold text-[2rem]" : "text-white"
                  }  
                  ${page == "Dashboard" && activePage == "Profile" ? " !text-[#FCAC0D] !font-bold text-[2rem]" : ""}`}
                >
                  {page}
                </span>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => {
            popUpFunctions.initBuyRaffleTicket();
          }}
          className="btn btn--outlined mt-auto mb-[57px]"
        >
          Buy Raffle Ticket
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="fixed bottom-0 right-0 h-[8rem] bg-black w-screen z-50 flex justify-between sidebar:hidden py-[2.23rem] px-[2.8rem]">
        <ul className="bg-r whitespace-nowrap flex justify-between w-full">
          {pages.map((page, i) => {
            return (
              <li
                className={`flex items-center transition-all ease-in mb-[4.2rem] cursor-pointer flex-col ${page == activePage ? "  text-[#FCAC0D]" : "text-white"}`}
                key={i}
                onClick={() => {
                  setActivePage(page);
                }}
              >
                <i className={`icon icon-${icons[i]} text-[2rem] ${icons[i] == "Dashboard" ? " text-[1.8rem]" : ""} `}></i>
                <span className="mt-[1rem] text-[1.15rem]">{page}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UserSideBar;
