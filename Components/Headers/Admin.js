import React, { useState, useEffect, useContext } from "react";

import { Avatar, Tooltip } from "@mui/material";

import { useRouter } from "next/router";
import useLocalStorage from "../../hooks/useLocalStorage";
import { toggleAlert } from "../../store/alert";
import { useDispatch } from "react-redux";
import useLoading from "../../hooks/useLoading";
import { popUpContext } from "../../Context/PopUps";
import { DataContext } from "../../Context/fetchData";

const AdminHeader = ({ title, setActivePage }) => {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  const { logOut } = useLocalStorage();
  const dispatch = useDispatch();
  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const { toggleLoad } = useLoading();
  const baseURL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;
  const popUpFunctions = useContext(popUpContext);
  const AppData = useContext(DataContext);
  const user = AppData.user.data;

  function onLogOut() {
    logOut();
    dispatch(toggleAlert("success", "Logged Out successfully!", true));
    router.replace("/auth/sign-in");
  }

  return (
    <>
      <div className="flex items-center mb-[2.4rem] sidebar:mb-[4.5rem] hdr:mb-[8.4rem] w-full">
        <h1 className="h1 transition-all">{title}</h1>
        <div className="flex flex-wrap ml-auto">
          {/* Catalogue Artiste Buttons */}

          <div className="flex-none hidden items-center ml-auto hdr:flex ">
            <button
              onClick={() => {
                popUpFunctions.initCreateCatalogue();
              }}
              className="btn ml-[1.6rem] ml-auto"
            >
              Admin Cataglogue
            </button>
          </div>

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
                  <span className=" font-semibold"> {user?.username ? user?.username[0] : "Name"}</span>
                </Avatar>
                {/* </Tooltip> */}
              </div>
            </div>
            {/* Logout/Profile */}
            <ul className="p-[2.2rem] hidden hover:block peer-hover:block absolute top-[5.5rem] z-50 right-0 bg-white yellow-shadow rounded-[2rem] rounded-tr-none">
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

      {/* Catalogue Section Header buttons::: Break point */}

      <div className="flex items-center ml-auto hdr:hidden mb-[2.9rem] sidebar:mb-[4.5rem] overflow-scroll scroll_hide">
        <button
          onClick={() => {
            popUpFunctions.initCreateCatalogue();
          }}
          className="btn ml-[auto] flex-1 sm:flex-grow-0"
        >
          Create Cataglogue
        </button>
      </div>
    </>
  );
};

export default AdminHeader;
