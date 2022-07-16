import React, { useContext, useState } from "react";
import Link from "next/link";
import LandPageLayout from "../Layout/LandPageLayout";
import { popUpContext } from "../../Context/PopUps";
import TextAnimation from "../TextAnimation";
import styles from "./LandingPageAnimation.module.css";

const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
};

const LandingPage = () => {
  const popUpFunctions = useContext(popUpContext);

  return (
    <Container>
      <div>
        <span className={` font-bold text-[1.6rem] mobile:text-[2.5rem] leading-[3rem]  text-grad mb-[1.6rem] mobile:mb-[.8rem] ${styles.slide_up_now} inline-block `}>22nd Edition</span>
        <h1 className={` text-animation font-bold text-[4rem] mobile:text-[9.4rem] leading-[4rem] mobile:leading-[9.1rem] text-white uppercase block ${styles.slide_up_now_3}`}>
          Kennis<br></br> Music Festival
        </h1>
        {/* <h1 className={` text-animation font-bold text-[4rem] mobile:text-[9.4rem] leading-[4rem] mobile:leading-[9.1rem] text-white uppercase block landing_1068:hidden ${styles.slide_up_now_3}`}>
          Kennis<br></br> Music Festival
        </h1>
        <h1 className={`mr-auto mt-6 hidden landing_1068:block ${styles.slide_up_now_3}`}>
          <TextAnimation></TextAnimation>
        </h1> */}
        <p
          className={` font-normal text-[1.4rem] mobile:text-[1.6rem] leading-[2rem] mobile:leading-[2.6rem] text-white mt-[2.4rem] mobile:mt-[2.1rem] mb-[5.5rem] max-w-[58.7rem]  ${styles.slide_up_now_2}`}
        >
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sodales vestibulum nullam amet, tempus iaculis. Eget sagittis cursus amet. */}A curated celebration of Nigerian Music and
          Nigerians in Music with a salacious tint of Comedy, Art, Movies, and all Creative Exercises
        </p>
      </div>

      {/* CTA */}
      <section className={`flex items-center flex-wrap ${styles.slide_up_now_2}`}>
        <Link href={"/auth/sign-in"}>
          <div className=" rounded-sm overflow-hidden">
            <button className="btn btn--outlined-grad text-white !px-[6rem] mr-[3.2rem]  mb-[3.7rem] mobile:mb-0">Sign In</button>
          </div>
        </Link>
        <button
          // style={{ boxShadow: "0px 10px 34px rgba(255, 255, 255, 0.23)" }}
          onClick={() => {
            popUpFunctions.initBuyTicket();
          }}
          className="btn mr-[4.5rem] !px-[7.2rem] mb-[3.7rem] mobile:mb-0 shiny_slide"
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
