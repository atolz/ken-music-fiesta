import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../store/user";
import ActDetails from "../Profile/ActDetails";
import MyProfile from "../Profile/Profile";
import Security from "../Profile/Security";

const Profile = (props) => {
  const [active, setActive] = useState("Profile");
  const navs = ["Profile", "Security", "Bank Details"];
  const user = useSelector(getUser);

  return (
    <div {...props}>
      <nav className="mb-[3.2rem]">
        <ul className="flex items-center overflow-auto scroll_hide">
          {navs.map((nav, i) => {
            return (
              <li
                onClick={() => {
                  setActive(nav);
                }}
                className={` transition-all px-[3.2rem] py-[1.5rem] rounded-full cursor-pointer text-[#777E90] ${active == nav ? " bg-[#FCAC0D] text-[black]" : ""}`}
                key={i}
              >
                <span className=" font-bold text-[1.4rem] leading-[1.6rem] whitespace-nowrap ">{nav}</span>
              </li>
            );
          })}
        </ul>
      </nav>
      <form className="profile-form pt-[6.4rem] pb-[4.3rem] sidebar:pl-[8.1rem] sidebar:pr-[6.3rem] px-[2.5rem] rounded-[2rem] border border-[#D0CCCC] max-w-[81.2rem] min-h-[57.4rem] relative flex flex-col">
        {/* Profile */}
        {active == "Profile" && <MyProfile user={user}></MyProfile>}
        {active == "Security" && <Security></Security>}
        {active == "Bank Details" && <ActDetails></ActDetails>}
        {/* <button className="btn ml-auto !bg-[#F0F0F0] relative mt-auto">Save Changes</button> */}
      </form>
    </div>
  );
};

export default Profile;
