import React, { useContext, useState } from "react";
import Link from "next/link";
import LandPageLayout from "../Layout/LandPageLayout";
import { popUpContext } from "../../Context/PopUps";

const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
};

const LandingPage = () => {
  const popUpFunctions = useContext(popUpContext);

  return (
    <Container>
      <div>
        <span className=" font-bold text-[1.6rem] mobile:text-[2.5rem] leading-[3rem] text-[#FCAC0D] mb-[1.6rem] mobile:mb-[.8rem]">22nd Edition</span>
        <h1 className=" font-bold text-[4rem] mobile:text-[9.4rem] leading-[4rem] mobile:leading-[9.1rem] text-white uppercase ">
          Kennis<br></br> Music Festival
        </h1>
        <p className=" font-normal text-[1.4rem] mobile:text-[1.6rem] leading-[2rem] mobile:leading-[2.6rem] text-white mt-[2.4rem] mobile:mt-[3.1rem] mb-[6.5rem] max-w-[58.7rem]">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sodales vestibulum nullam amet, tempus iaculis. Eget sagittis cursus amet. */}A curated celebration of Nigerian Music and
          Nigerians in Music with a salacious tint of Comedy, Art, Movies, and all Creative Exercises
        </p>
      </div>

      {/* CTA */}
      <section className="flex items-center flex-wrap">
        <Link href={"/auth/sign-in"}>
          <button className="btn btn--outlined text-white !px-[6rem] mr-[3.2rem]  mb-[3.7rem] mobile:mb-0">Sign In</button>
        </Link>
        <button
          onClick={() => {
            popUpFunctions.initBuyTicket();
          }}
          className="btn mr-[4.5rem] !px-[7.2rem] mb-[3.7rem] mobile:mb-0"
        >
          Mint Event Ticket
        </button>
        <span className="flex items-center text-[1.4rem] font-semibold text-white">
          <img className="mr-[1.1rem]" src="/play-promo.svg"></img>Play Promotional Video
        </span>
      </section>
    </Container>
  );
};

export default LandingPage;
