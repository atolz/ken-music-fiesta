import React, { useState } from "react";
import EventCard from "../Cards/EventCard";
import SvgIconWrapper from "../SvgIconWrapper";

const Event = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      {!showDetails && (
        <div className="flex flex-wrap sidebar:flex-nowrap">
          <section className=" flex-shrink inline-block mr-10 mb-10">
            <EventCard
              action={() => {
                setShowDetails(true);
              }}
            />
          </section>
          <section className="flex-shrink inline-block mr-10 mb-10">
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
            <img src="/event-img.jpg"></img>
            <div className="-translate-y-6">
              <h4 className=" font-bold text-[2rem] leading-[2.4rem]">Description</h4>
              <p className="max-w-[49.2rem] font-normal text-[1.4rem] text-[#717171] mb-[4rem] mt-[.8rem] leading-[2rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ultrices sollicitudin eu laoreet pretium, eleifend porttitor. Volutpat sagittis amet, diam ut amet bibendum ut. Gravida
                vitae nunc tellus eu viverra senectus sagittis malesuada bibendum. Metus, rutrum vitae etiam enim eget viverra et nibh aliquet. Elementum egestas sed etiam scelerisque morbi id
                tristique tristique. Cursus ac fringilla convallis malesuada. Amet scelerisque euismod.
              </p>
              <div className="flex gap-[3.2rem] mb-[5rem]">
                <div>
                  <h3 className=" text-[1.4rem] font-bold mb-3">Event Date</h3>
                  <p className=" font-semibold text-[1.6rem] text-[#717171]">20 August, 2022</p>
                </div>
                <div>
                  <h3 className=" text-[1.4rem] font-bold mb-3">Venue</h3>
                  <p className=" font-semibold text-[1.6rem] text-[#717171]">Tafawa Balewa Square, Lagos State</p>
                </div>
              </div>
              <div className="grid gap-[1.6rem] grid-cols-2">
                <button className="btn">Join Livestream Event</button>
                <button className="btn btn--outlined">Buy Event Ticket</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Event;
