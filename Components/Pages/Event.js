import React, { useContext, useState } from "react";
import { popUpContext } from "../../Context/PopUps";
import EventCard from "../Cards/EventCard";
import SvgIconWrapper from "../SvgIconWrapper";
import ProgressiveToken from "./ProgressiveToken";

const Event = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [joinLive, setJoinLive] = useState(false);
  const popUpFunctions = useContext(popUpContext);
  return (
    <div>
      {!showDetails && !joinLive && (
        <div className="flex flex-wrap sidebar:flex-nowrap">
          <section className=" flex-shrink flex-1 inline-block mr-10 mb-10">
            <EventCard
              action={() => {
                setShowDetails(true);
              }}
            />
          </section>
          <section className="flex-shrink flex-1 inline-block mr-10 mb-10">
            <EventCard
              action={() => {
                setShowDetails(true);
              }}
            />
          </section>
        </div>
      )}

      {showDetails && (
        <section>
          {/* Header */}
          <div className="flex items-center mb-12">
            <SvgIconWrapper
              action={() => {
                setShowDetails(false);
              }}
              className={"text-black mr-[2.8rem] h-[1.9rem] w-[1.9rem] cursor-pointer"}
              iconName={"arr-left"}
            ></SvgIconWrapper>{" "}
            <h2 className=" font-semibold text-[2.8rem]">Kennis Easter Fiesta</h2>
          </div>

          {/* Details */}
          <div className="flex gap-[6rem] flex-wrap sidebar:flex-nowrap items-center ">
            {/* <img src="/event-img.jpg"></img> */}
            <img className="h-[501px] w-[384px] object-cover rounded-[2rem]" src="/bg-party.jpg"></img>

            <div className="-translate-y-6">
              <h4 className=" font-bold text-[2rem] leading-[2.4rem]">Description</h4>
              <p className="max-w-[49.2rem] font-normal text-[1.4rem] text-[#717171] mb-[4rem] mt-[.8rem] leading-[2rem]">
                Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly
                go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human
                species.<br></br> If one examines precultural libertarianism, one is faced with a choice: either accept rationalism or conclude that context is a product of the masses, given that
                Marx’s essay on precultural libertarianism is invalid.
              </p>
              <div className="flex gap-[3.2rem] mb-[5rem]">
                <div>
                  <h3 className=" text-[1.4rem] font-bold mb-3">Event Date</h3>
                  <p className=" font-semibold text-[1.6rem] text-[#717171]">20 August, 2022</p>
                </div>
                <div>
                  <h3 className=" text-[1.4rem] font-bold mb-3">Venue</h3>
                  <p className=" font-semibold text-[1.6rem] text-[#717171]">Eko Hotel & Suites, VI</p>
                </div>
              </div>
              <div className="grid gap-[1.6rem] grid-cols-2">
                <button
                  onClick={() => {
                    setJoinLive(true);
                    setShowDetails(false);
                  }}
                  className="btn"
                >
                  Join Livestream Event
                </button>
                <button
                  onClick={() => {
                    popUpFunctions.initBuyTicket();
                  }}
                  className="btn btn--outlined !text-black"
                >
                  Buy Event Ticket
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {joinLive && <ProgressiveToken></ProgressiveToken>}
    </div>
  );
};

export default Event;
