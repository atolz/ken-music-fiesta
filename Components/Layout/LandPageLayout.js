import React, { useState, createContext, useContext } from "react";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import useLoading from "../../hooks/useLoading";
import PopupStatus from "../PopUps/PopUpStatus";
import BuyEventTicket from "../PopUps/BuyEventTicket";
import PaymentOptions from "../PopUps/PaymentOptions";
import SelfCheckOut from "../PopUps/SelfCheckOut";
import ReviewCheckOut from "../PopUps/ReviewCheckOut";
import { popUpContext, PopUpContextProvider } from "../../Context/PopUps";
import { useRouter } from "next/router";

const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] landing_868:px-[10rem]">{children}</div>;
};

// const PopUpContainerWrapper = ({ children }) => {
//   return <PopUpContextProvider>{children}</PopUpContextProvider>;
// };

const LandPageLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const popUpFunctions = useContext(popUpContext);
  const router = useRouter();

  return (
    // <PopUpContainerWrapper>
    <>
      <div className=" bg-black flex flex-col h-screen justify-between scroll_hide">
        <div className={`fixed top-0 left-0 w-screen h-screen z-[1]  bg-homepage ${router.pathname == "/" ? " fadeIn-animation opacity-100" : " opacity-50"}`}>
          {/* <img className=" object-cover h-full w-full" src="/bg-home-min.png"></img> */}
        </div>
        <div className=" grow-0 shrink-0 relative z-[100000000]">
          <Container>
            {" "}
            <header className="flex items-center pt-[3rem] pb-[1.6rem]">
              <Link href={"/"}>
                <img className="mr-auto h-[66.5px] cursor-pointer" src="/new_logo.png"></img>
              </Link>
              {/* Desktop Nav */}
              <div className="items-center hidden landing_868:flex ">
                <Link href={"/artistes"}>
                  <a style={{ letterSpacing: "0.4rem" }} className={`" font-medium !text-[1.4rem] text-white leading-[1.7rem] mr-[6.4rem] ${router.pathname.includes("/artistes") ? " kef-link" : ""}`}>
                    ARTISTES
                  </a>
                </Link>
                <Link href={"/brands"}>
                  <a style={{ letterSpacing: "0.4rem" }} className={`" font-medium !text-[1.4rem] text-white leading-[1.7rem] mr-[6.4rem] ${router.pathname.includes("/brands") ? " kef-link" : ""}`}>
                    BRANDS
                  </a>
                </Link>

                <Link href={"/catalogues"}>
                  <a
                    style={{ letterSpacing: "0.4rem" }}
                    className={`" font-medium !text-[1.4rem] text-white leading-[1.7rem] mr-[6.4rem] ${router.pathname.includes("/catalogues") ? " kef-link" : ""}`}
                  >
                    CATALOGUES
                  </a>
                </Link>

                {/* <button
                  onClick={() => {
                    console.log("clicking btn", popUpFunctions.initSelfCheckOut());
                    popUpFunctions.initSelfCheckOut();
                  }}
                  className="btn btn--outlined-grad text-white "
                >
                  Self Checkout
                </button> */}
                <Link href={"/auth/sign-up"}>
                  <button className="btn btn--outlined-grad text-white !px-[6rem] ml-[2.4rem]">Sign Up</button>
                </Link>
              </div>
              {/* Burger Menu */}
              <button
                className="block landing_868:hidden"
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <span className="h-[.5rem] w-[3rem] bg-white flex mb-3"></span>
                <span className="h-[.5rem] w-[3rem] bg-white flex mb-3"></span>
                <span className="h-[.5rem] w-[3rem] bg-white flex"></span>
              </button>
              {/* Mobile Nav... */}
              <div
                className={`grid z-50 grid-flow-row place-items-center landing_868:hidden bg-black justify-center fixed left-0 transition-all ease-out duration-200 -top-full ${
                  showMenu ? " !top-0" : ""
                } w-screen px-[3.8rem] py-[7.4rem]`}
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  className="w-[4rem] h-[4rem] rounded-full absolute right-[4rem] top-[4rem] bg-white grid place-items-center"
                >
                  <span className="w-[2.5rem] bg-black h-[.5rem] flex rotate-45 relative top-1/2"></span>
                  <span className="w-[2.5rem] bg-black h-[.5rem] flex -rotate-45 relative bottom-1/2"></span>
                </button>
                <Link href={"/brands"}>
                  <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mb-[6.4rem]">
                    BRANDS
                  </a>
                </Link>
                <Link href={"/artistes"}>
                  <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mb-[6.4rem]">
                    ARTISTES
                  </a>
                </Link>
                <Link href={"/catalogues"}>
                  <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mb-[6.4rem]">
                    CATALOGUES
                  </a>
                </Link>
                <Link href={"/auth/sign-up"}>
                  <button className="btn btn--outlined-grad text-white !px-[6rem] mb-[2.4rem]">Sign Up</button>
                </Link>
                {/* <button
                  onClick={() => {
                    console.log("clicking btn", popUpFunctions.initSelfCheckOut());
                    popUpFunctions.initSelfCheckOut();
                  }}
                  className="btn btn--outlined-grad text-white"
                >
                  Self Checkout
                </button> */}
              </div>
            </header>
          </Container>
        </div>
        {/* <div className="grow-0 shrink overflow-y-scroll scroll_hide">{children}</div> */}
        <div className=" z-10 overflow-scroll scroll_hide">{children}</div>

        <footer className=" bg-black py-[3.5rem]   w-full grow-0 shrink-0 max-h-min relative z-10">
          <Container>
            <div className="grid landing_868:grid-cols-[2fr,1fr,1fr] gap-[2rem] items-center">
              <ul className="mr-auto grid grid-cols-3 gap-[4rem]">
                <Link href={"/faq"}>
                  <div className="group w-max">
                    <a className="flex items-center text-white  group-hover:text-primary">
                      <span className=" block translate-x-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">#</span>
                      <span className=" text-[1.2rem] font-medium  underline transition-all group-hover:translate-x-3">FAQ</span>
                    </a>
                  </div>
                </Link>
                <Link href={"/contact"}>
                  <div className="group w-max">
                    <a className="flex items-center text-white  group-hover:text-primary">
                      <span className=" block translate-x-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">#</span>
                      <span className=" text-[1.2rem] font-medium  underline transition-all group-hover:translate-x-3">Contact</span>
                    </a>
                  </div>
                </Link>
                <Link href={"/privacy-policy"}>
                  <div className="group w-max">
                    <a className="flex items-center text-white  group-hover:text-primary">
                      <span className=" block translate-x-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all">#</span>
                      <span className=" text-[1.2rem] font-medium  underline transition-all group-hover:translate-x-3">Privacy Policy</span>
                    </a>
                  </div>
                </Link>
              </ul>
              <span className=" mr-auto font-normal text-white text-[1.4rem]">All rights reserved. Copyright 2022</span>
              <div className="flex items-center landing_868:justify-end ">
                <img src="/twitter.svg"></img>
                <img className="ml-[2.9rem]" src="/insta.svg"></img>
                <img className="ml-[2.9rem]" src="/yt.svg"></img>
                <img className="ml-[2.9rem]" src="/fb.svg"></img>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
    // </PopUpContainerWrapper>
  );
};

export default LandPageLayout;
