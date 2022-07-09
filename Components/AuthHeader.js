import React, { useContext, useState } from "react";
import Link from "next/link";
import { popUpContext } from "../Context/PopUps";
import { useRouter } from "next/router";

const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[2rem] sidebar:px-[10rem] flex items-center">{children}</div>;
};

const AuthHeader = () => {
  const [show, setShow] = useState(false);
  const popUpFunctions = useContext(popUpContext);
  const router = useRouter();
  return (
    // <header className="flex items-center px-[12.5rem] py-[2.6rem] fixed top-0 left-0 w-full z-10">
    //   <Link href={"/"}>
    //     <img className="w-[8.9rem] cursor-pointer " src="/kef-logo.svg"></img>
    //   </Link>
    //   <button className="btn ml-auto">Buy Event Ticket</button>
    //   <Link href={"/auth/sign-up"}>
    //     <button className="btn btn--outlined text-white ml-[2.4rem]">Sign Up</button>
    //   </Link>
    // </header>

    <header className="flex items-center pt-[3rem] pb-[1.6rem] fixed top-0 left-0 w-full">
      {/* <header className="flex items-center pt-[3rem] pb-[1.6rem] fixed top-0 left-0 w-full z-10"> */}
      <Container>
        {/* <img src="/kef-logo.svg" className="mr-auto w-[6.4rem]"></img> */}
        <Link href={"/"}>
          <img className="mr-auto h-[66.5px] cursor-pointer " src="/new_logo.png"></img>
        </Link>
        {/* Desktop Nav */}
        <div className="items-center hidden sidebar:flex ">
          {!router.pathname.includes("artiste") && (
            <button
              onClick={() => {
                popUpFunctions.initBuyTicket();
              }}
              className="btn ml-auto"
            >
              Buy Event Ticket
            </button>
          )}
          {}
          {(router.pathname.includes("sign-in") || router.pathname === "/") && !router.pathname.includes("artiste") && (
            <Link href={"/auth/sign-up"}>
              <button className="btn btn--outlined text-white !px-[6rem] ml-[2.4rem]">Sign Up</button>
            </Link>
          )}
          {router.pathname.includes("sign-up") && !router.pathname.includes("artiste") && (
            <Link href={"/auth/sign-in"}>
              <button className="btn btn--outlined text-white !px-[6rem] ml-[2.4rem]">Sign In</button>
            </Link>
          )}
        </div>
        {/* Burger Menu */}
        <button
          className="block sidebar:hidden"
          onClick={() => {
            setShow(true);
          }}
        >
          <span className="h-[.5rem] w-[3rem] bg-white flex mb-3"></span>
          <span className="h-[.5rem] w-[3rem] bg-white flex mb-3"></span>
          <span className="h-[.5rem] w-[3rem] bg-white flex"></span>
        </button>
        {/* Mobile Nav... */}
        <div
          className={`grid z-50 grid-flow-row place-items-center sidebar:hidden bg-black justify-center fixed left-0 transition-all ease-out duration-200 -top-full ${
            show ? " !top-0" : ""
          } w-screen px-[3.8rem] py-[7.4rem]`}
        >
          {/* Close Button */}
          <button
            onClick={() => {
              setShow(false);
            }}
            className="w-[4rem] h-[4rem] rounded-full absolute right-[4rem] top-[4rem] bg-white grid place-items-center"
          >
            <span className="w-[2.5rem] bg-black h-[.5rem] flex rotate-45 relative top-1/2"></span>
            <span className="w-[2.5rem] bg-black h-[.5rem] flex -rotate-45 relative bottom-1/2"></span>
          </button>

          <Link href={"/auth/sign-up"}>
            <button className="btn btn--outlined text-white !px-[6rem] mb-[2.4rem]">Sign Up</button>
          </Link>
          <button
            onClick={() => {
              popUpFunctions.initBuyTicket();
            }}
            className="btn "
          >
            Buy Event Ticket
          </button>
        </div>
      </Container>
    </header>
  );
};

export default AuthHeader;
