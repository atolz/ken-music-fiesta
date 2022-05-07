import React, { useState } from "react";
import Link from "next/link";
import useLoading from "../../hooks/useLoading";

const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
};

const LandPageLayout = ({ children }) => {
  const [show, setShow] = useState(false);
  const { toggleLoad } = useLoading();

  const onSignUp = () => {
    toggleLoad();
    setTimeout(() => {
      toggleLoad();
    }, 1000);
  };

  return (
    <div className=" bg-homepage bg-slate-900 flex flex-col h-screen justify-between">
      <div className=" grow-0 shrink-0 ">
        <Container>
          {" "}
          <header className="flex items-center pt-[3rem] pb-[1.6rem]">
            <img src="/kef-logo.svg" className="mr-auto w-[6.4rem]"></img>
            {/* Desktop Nav */}
            <div className="items-center hidden sidebar:flex ">
              <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mr-[6.4rem]">
                BRANDS
              </a>
              <Link href={"/artists"}>
                <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mr-[6.4rem]">
                  ARTISTS
                </a>
              </Link>

              <button
                onClick={() => {
                  onSignUp();
                }}
                className="btn btn--outlined text-white "
              >
                Self Checkout
              </button>
              <Link href={"/auth/sign-up"}>
                <button className="btn btn--outlined text-white !px-[6rem] ml-[2.4rem]">Sign Up</button>
              </Link>
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
              <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mb-[6.4rem]">
                BRANDS
              </a>
              <Link href={"/artists"}>
                <a style={{ letterSpacing: "0.4rem" }} className=" font-medium text-[1.4rem] text-white leading-[1.7rem] mb-[6.4rem]">
                  ARTISTS
                </a>
              </Link>
              <Link href={"/auth/sign-up"}>
                <button className="btn btn--outlined text-white !px-[6rem] mb-[2.4rem]">Sign Up</button>
              </Link>
              <button className="btn btn--outlined text-white">Self Checkout</button>
            </div>
          </header>
        </Container>
      </div>
      <div className="grow-0 shrink overflow-y-scroll scroll_hide">
        <Container>{children}</Container>
      </div>

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
  );
};

export default LandPageLayout;
