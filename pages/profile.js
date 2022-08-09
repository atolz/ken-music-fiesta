import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Assets from "../Components/Profile/Assets";
import Security from "../Components/Profile/Security";
import MyProfile from "../Components/Profile/Profile";
import BaseLayout2 from "../Components/Layout/BaseLayout2";

const Profile = (props) => {
  const [active, setActive] = useState("Profile");
  // const navs = ["Profile", "Security", "Bank Details"];
  const navs = ["Profile", "Security", "Assets"];
  const router = useRouter();

  useEffect(() => {
    if (router.query.mint) {
      setActive("Assets");
      router.push("/profile");
    }
  }, [router.query]);

  return (
    <div {...props} className="">
      <div className="">
        <nav className="mb-[3.2rem] max-w-[81.2rem] mx-auto ">
          <ul className="flex items-center overflow-auto scroll_hide">
            {navs.map((nav, i) => {
              return (
                <li
                  onClick={() => {
                    setActive(nav);
                  }}
                  className={` transition-all px-[3.2rem] py-[1.5rem] rounded-full cursor-pointer text-[#777E90] ${active == nav ? " bg-primary text-[white]" : ""}`}
                  key={i}
                >
                  <span className=" font-bold text-[1.4rem] leading-[1.6rem] whitespace-nowrap ">{nav}</span>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="profile-form mx-auto pt-[5.4rem] pb-[4.3rem] sidebar:pl-[5.1rem] sidebar:pr-[4.3rem] px-[2.5rem] rounded-[2rem] border border-[#D0CCCC] max-w-[81.2rem] min-h-[57.4rem] relative flex flex-col">
          {/* Profile */}
          {active == "Profile" && <MyProfile></MyProfile>}
          {active == "Security" && <Security></Security>}
          {active == "Assets" && <Assets></Assets>}
          {/* {active == "Bank Details" && <ActDetails></ActDetails>} */}
          {/* <button className="btn ml-auto !bg-[#F0F0F0] relative mt-auto">Save Changes</button> */}
        </div>
      </div>
    </div>
  );
};
Profile.Layout = BaseLayout2;
export default Profile;