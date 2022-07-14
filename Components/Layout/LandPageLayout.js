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
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
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
      <div className=" bg-homepage bg-black flex flex-col h-screen justify-between scroll_hide">
        <div className=" grow-0 shrink-0 ">
          <Container>
            {" "}
            <header className="flex items-center pt-[3rem] pb-[1.6rem]">
              <Link href={"/"}>
                <img className="mr-auto h-[66.5px] cursor-pointer" src="/new_logo.png"></img>
              </Link>
              {/* Desktop Nav */}
              <div className="items-center hidden sidebar:flex ">
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
                className="block sidebar:hidden"
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
                className={`grid z-50 grid-flow-row place-items-center sidebar:hidden bg-black justify-center fixed left-0 transition-all ease-out duration-200 -top-full ${
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
                <button
                  onClick={() => {
                    console.log("clicking btn", popUpFunctions.initSelfCheckOut());
                    popUpFunctions.initSelfCheckOut();
                  }}
                  className="btn btn--outlined-grad text-white"
                >
                  Self Checkout
                </button>
              </div>
            </header>
          </Container>
        </div>
        {/* <div className="grow-0 shrink overflow-y-scroll scroll_hide">{children}</div> */}
        <>{children}</>

        <footer className=" bg-black py-[3.5rem]   w-full grow-0 shrink-0 max-h-min">
          <Container>
            <div className="flex items-center flex-wrap">
              <span className=" mr-auto font-normal text-white text-[1.4rem] mb-[2.9rem] mobile:mb-0">All rights reserved. Copyright 2022</span>
              <div className="flex items-center">
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
