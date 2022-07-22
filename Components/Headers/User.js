import React, { useState, useEffect, useContext } from "react";

import { Avatar, Tooltip } from "@mui/material";

import { useRouter } from "next/router";
import useLocalStorage from "../../hooks/useLocalStorage";
import { toggleAlert } from "../../store/alert";
import { useDispatch } from "react-redux";
import useLoading from "../../hooks/useLoading";
import { popUpContext } from "../../Context/PopUps";
import { DataContext } from "../../Context/fetchData";
import SvgIconWrapper from "../SvgIconWrapper";
import HeaderDropDown from "../HeaderDropDown";

const UserHeader = ({ title, setActivePage }) => {
  // const VerifyPaymentProcess = ["VerifyPayment", "Status"];

  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  const { logOut } = useLocalStorage();
  const dispatch = useDispatch();
  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const { toggleLoad } = useLoading();
  const AppData = useContext(DataContext);
  const user = AppData.user.data;
  const baseURL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  const popUpFunctions = useContext(popUpContext);
  function onLogOut() {
    logOut();
    dispatch(toggleAlert("success", "Logged Out successfully!", true));
    router.replace("/");
  }

  return (
    <>
      <div className="flex items-center mb-[2.4rem] sidebar:mb-[4.5rem] hdr:mb-[8.4rem] w-full pt-[1.4rem] bg-[#FBFAFA]  sidebar:pt-[3.4rem] sticky top-0 sidebar:pb-[2rem] z-[1000]">
        <h1 className="h1 transition-all">{title}</h1>
        <div className="flex flex-wrap ml-auto">
          {/* Buttons */}

          <div className="flex-none hidden items-center ml-auto hdr:flex ">
            {/* <button
              onClick={() => {
                popUpFunctions.initSelfCheckOut();
              }}
              className="btn ml-auto !bg-[#F0F0F0]"
            >
              Self Checkout
            </button> */}
            <button
              onClick={() => {
                popUpFunctions.initBuyRaffleTicket();
              }}
              className="btn ml-[1.6rem]"
            >
              Buy Raffle Ticket
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center ml-auto relative">
            <div className="relative mobile:ml-[59px] mr-[16px]">
              <HeaderDropDown>
                <div className=" peer relative w-[42px] h-[42px] rounded-full grid place-items-center bg-[#F6EBF5] ml-auto " title="Notification">
                  <div className="bg-red-500 w-[10px] h-[10px] rounded-full top-2 -left-0 absolute"></div>
                  <i className="icon icon-notification text-[1.7rem]"></i>
                </div>
              </HeaderDropDown>
            </div>

            <div className="peer  py-4">
              <div className="b border-l cursor-pointer">
                <Avatar sx={{ width: 42, height: 42, marginLeft: "16px", bgcolor: "#A307A8" }} alt={user?.name} src={`${user?.avatar}`}>
                  <span className=" font-semibold"> {user?.firstName ? user?.firstName[0] : "Name"}</span>
                </Avatar>
              </div>
            </div>
            {/* Logout/Profile Dropdown */}
            <ul className=" w-1/2 overflow-hidden duration-300 h-auto -translate-x-1 translate-y-1 scale-y-0 hover:scale-y-100 peer-hover:scale-y-100 origin-top -z-30 opacity-0 hover:w-full hover:h-auto hover:opacity-100 transition-all peer-hover:w-full peer-hover:h-auto peer-hover:opacity-100 absolute top-[5.5rem] hover:z-50 peer-hover:z-50 right-0 bg-white shadow-lg rounded-[2rem] border rounded-tr-none">
              <li
                onClick={() => {
                  setActivePage("Profile");
                }}
                className="flex items-center  cursor-pointer hover:bg-slate-50 p-[2.2rem]"
              >
                <img src="/profile-box.svg"></img> <span className=" font-medium text-[1.4rem] ml-3">Profile</span>
              </li>
              <li
                onClick={() => {
                  onLogOut();
                }}
                className="flex items-center text-red-700 cursor-pointer hover:bg-slate-50 p-[2.2rem]"
              >
                <img src="/logout.svg"></img> <span className=" font-medium text-[1.4rem] ml-3">Log out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Base Break point */}
      <div className="flex items-center ml-auto hdr:hidden mb-[2.9rem] sidebar:mb-[4.5rem] overflow-scroll scroll_hide">
        {/* <button
          onClick={() => {
            popUpFunctions.initSelfCheckOut();
          }}
          className="btn flex-1 sm:flex-grow-0 ml-auto !bg-[#F0F0F0]"
        >
          Self Checkout
        </button> */}
        <button
          onClick={() => {
            popUpFunctions.initBuyRaffleTicket();
          }}
          className="btn ml-[1.6rem] flex-1 sm:flex-grow-0"
        >
          Buy Raffle Ticket...
        </button>
      </div>

      {/* Verify BVN notification */}
      {user && !user?.hasMintedTicket && (
        <div className="py-[2rem] px-[4.8rem] w-full bg-[#A307A80F] rounded-[2rem] mb-[2.7rem] flex items-center -translate-y-6">
          <SvgIconWrapper className={" mr-[2.6rem]"} iconName={"info-circle"}></SvgIconWrapper>
          <span className=" mr-10 text-black font-semibold text-2xl">
            To enjoy more offers, mint your ticket for just <span className=" font-bold">N200 today.</span>
          </span>
          <span className=" underline underline-offset-2 text-primary">
            <span
              onClick={() => {
                popUpFunctions.openRequestBvnPrompt();
              }}
              className=" font-bold text-[1.65rem] underline text-grad cursor-pointer"
            >
              Mint ticket
            </span>
          </span>
        </div>
      )}
    </>
  );
};

export default UserHeader;
