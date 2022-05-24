import React, { useState, useEffect, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import VerifyPayment from "./PopUps/VerifyPayment";
import PaymentOptions from "./PopUps/PaymentOptions";
import PopupStatus from "./PopUps/PopUpStatus";
import CardAddress from "./PopUps/CardAddress";
import ActivateCard from "./PopUps/ActivateCard";
import ClaimReward from "./PopUps/ClaimReward";
import { Avatar, Tooltip } from "@mui/material";
import SelfCheckOut from "./PopUps/SelfCheckOut";
import ReviewCheckOut from "./PopUps/ReviewCheckOut";
import { useRouter } from "next/router";
import useLocalStorage from "../hooks/useLocalStorage";
import { toggleAlert } from "../store/alert";
import { useDispatch, useSelector } from "react-redux";
import { baseInstanceAPI } from "../axios";
import useLoading from "../hooks/useLoading";
import { getUser } from "../store/user";
import BuyRaffleTicket from "./PopUps/BuyRaffleTicket";
import { popUpContext } from "../Context/PopUps";

const Header = ({ title, setActivePage }) => {
  // const VerifyPaymentProcess = ["VerifyPayment", "Status"];

  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  const { logOut } = useLocalStorage();
  const dispatch = useDispatch();
  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const { toggleLoad } = useLoading();
  const user = useSelector(getUser);
  const baseURL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  const popUpFunctions = useContext(popUpContext);
  const [section, setSection] = useState("");

  function onLogOut() {
    logOut();
    router.replace("/auth/sign-in");
    dispatch(toggleAlert("success", "Logged Out successfully!", true));
  }

  useEffect(() => {
    if (router.route.includes("admin")) {
      // setIsAdmin(true);
      setSection("admin");
    } else if (router.route.includes("catalogues")) {
      setSection("catalogue");
    } else {
      setSection("base");
    }
    console.log("router query is", router);
  }, [router.route]);

  return (
    <>
      {/* <Dialog open={show} onClose={toggle}>
        {activeModal == "Status" && <PopupStatus action={toggle} title={statusTitle} link={`/dashboard`} linkText={linkText} text={text} status={"success"}></PopupStatus>}
        <CardAddress></CardAddress>
        <ActivateCard></ActivateCard>
        <ClaimReward></ClaimReward>

        {activeModal == "PaymentOptions" && <PaymentOptions onCancel={toggle} onSelectPayOption={onSelectPayOption}></PaymentOptions>}
        {activeModal == "AmountOfTickets" && <BuyRaffleTicket onCancel={toggle} onSelected={onSelected}></BuyRaffleTicket>}
        {activeModal == "VerifyPayment" && <VerifyPayment onCancel={toggle} onVerify={onVerify}></VerifyPayment>}
        {activeModal == "SelfCheckOut" && <SelfCheckOut onCancel={toggle} onCheckOut={onCheckOut}></SelfCheckOut>}
        {activeModal == "ReviewCheckOut" && <ReviewCheckOut onCancel={toggle} onReview={onReview}></ReviewCheckOut>}
        {activeModal == "VerifyPayment" && <VerifyPayment onVerify={onVerify}></VerifyPayment>}
      </Dialog> */}
      <div className="flex items-center mb-[2.4rem] sidebar:mb-[4.5rem] hdr:mb-[8.4rem] w-full">
        <h1 className="h1 transition-all">{title}</h1>
        <div className="flex flex-wrap ml-auto">
          {/* Buttons */}
          {section == "base" && (
            <div className="flex-none hidden items-center ml-auto hdr:flex ">
              <button
                onClick={() => {
                  popUpFunctions.initSelfCheckOut();
                }}
                className="btn ml-auto !bg-[#F0F0F0]"
              >
                Self Checkout
              </button>
              <button
                onClick={() => {
                  popUpFunctions.initBuyRaffleTicket();
                }}
                className="btn ml-[1.6rem]"
              >
                Buy Raffle Ticket
              </button>
            </div>
          )}

          {/* Catalogue Header Buttons */}
          {section == "catalogue" && (
            <div className="flex-none hidden items-center ml-auto hdr:flex ">
              <button onClick={() => {}} className="btn ml-[1.6rem] ml-auto">
                Create Cataglogue
              </button>
            </div>
          )}
          {/* User Profile */}
          <div className="flex items-center ml-auto relative">
            <div className=" w-[42px] h-[42px] rounded-full grid place-items-center bg-[#FFF7E7] ml-auto mobile:ml-[59px] mr-[16px]">
              <i className="icon icon-notification text-[1.7rem]"></i>
            </div>
            <div className="peer  py-4">
              <div className="b border-l ">
                {/* <Tooltip title="Profile" leaveDelay={200}> */}
                {/* <img
                  onClick={() => {
                    // setShowMore((val) => !val);
                  }}
                  className="h-[4.2rem] cursor-pointer w-[4.2rem] object-cover rounded-full ml-[16px] yellow-shadow"
                  src="/user-img.jpg"
                /> */}
                <Avatar sx={{ width: 42, height: 42, marginLeft: "16px", bgcolor: "orange" }} alt={user?.name} src={`${baseURL}${user?.avatar}`}>
                  <span className=" font-semibold"> {user?.firstName[0]}</span>
                </Avatar>
                {/* </Tooltip> */}
              </div>
            </div>
            {/* Logout/Profile */}
            <ul className="p-[2.2rem] hidden hover:block peer-hover:block absolute top-[5.5rem] z-50 right-0 bg-white yellow-shadow rounded-[2rem] rounded-tr-none">
              <li
                onClick={() => {
                  setActivePage("Profile");
                }}
                className="flex items-center mb-[1.9rem] cursor-pointer"
              >
                <img src="/profile-box.svg"></img> <span className=" font-medium text-[1.4rem] ml-3">Profile</span>
              </li>
              <li
                onClick={() => {
                  onLogOut();
                }}
                className="flex items-center text-red-700 cursor-pointer"
              >
                <img src="/logout.svg"></img> <span className=" font-medium text-[1.4rem] ml-3">Log out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Base Break point */}
      {section == "base" && (
        <div className="flex items-center ml-auto hdr:hidden mb-[2.9rem] sidebar:mb-[4.5rem] overflow-scroll scroll_hide">
          <button
            onClick={() => {
              popUpFunctions.initSelfCheckOut();
            }}
            className="btn flex-1 sm:flex-grow-0 ml-auto !bg-[#F0F0F0]"
          >
            Self Checkout
          </button>
          <button
            onClick={() => {
              popUpFunctions.initBuyRaffleTicket();
            }}
            className="btn ml-[1.6rem] flex-1 sm:flex-grow-0"
          >
            Buy Raffle Ticket...
          </button>
        </div>
      )}

      {/* Catalogue Section Header buttons::: Break point */}
      {section == "catalogue" && (
        <div className="flex items-center ml-auto hdr:hidden mb-[2.9rem] sidebar:mb-[4.5rem] overflow-scroll scroll_hide">
          <button onClick={() => {}} className="btn ml-[auto] flex-1 sm:flex-grow-0">
            Create Cataglogue
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
