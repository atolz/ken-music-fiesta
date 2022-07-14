import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/fetchData";
import { popUpContext } from "../../Context/PopUps";
import EventCard from "../Cards/EventCard";
import SvgIconWrapper from "../SvgIconWrapper";
import ProgressiveToken from "./ProgressiveToken";
import formatDate from "../../Utils/formatDate";

const Event = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [joinLive, setJoinLive] = useState(false);
  const popUpFunctions = useContext(popUpContext);
  const AppData = useContext(DataContext);
  const [activeEvent, setActiveEvent] = useState("");
  // useEffect(() => {
  //   AppData.fetchKudibarEvents();
  // }, []);
  useEffect(() => {
    console.log("Events in evenst is", AppData.kudibarEvents);
  }, [AppData.kudibarEvents]);

  const EventTicketCard = () => {
    return (
      <div className={`px-[2.8rem] py-[3.6rem] rounded-[2rem] bg-[#F0F0F0] bg-[#FCF9FC] border-2 border-[#FDE8FE]  relative  min-w-[30rem] overflow-hidden flex-1`}>
        <h3 className="h3 mb-[.4rem] mr-[11.0rem]">{0} Event Tickets</h3>
        <p className="text-[1.2rem] text-[#717171] leading-[1.46rem] font-semibold">Total Number of Event Tickets</p>
        {/* <img className="absolute right-[2.6rem] bottom-0 w-[12rem] mobile:w-[15.2rem] hand-card block" src={"/3d-ticket-1.png"}></img> */}
        <img className="absolute right-[2.6rem] bottom-0 w-[12rem] mobile:w-[15.2rem] translate-x-6 event-ticket block" src={"/3d-ticket-1.png"}></img>
      </div>
    );
  };
  return (
    <div>
      {!showDetails && !joinLive && (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(35rem,_1fr))] events_card:grid-cols-[repeat(auto-fit,_minmax(50rem,_1fr))] gap-5">
          {AppData.kudibarEvents?.data?.map((el, i) => {
            return (
              <EventCard
                name={el.name}
                desc={el.description}
                img={el.cover}
                key={i}
                action={() => {
                  setShowDetails(true);
                  setActiveEvent(el.name);
                }}
              />
            );
          })}

          {/* <section className=" flex-shrink flex-1 inline-block mr-10 mb-10">
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
          </section> */}
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
            <h2 className=" font-semibold text-[2.8rem]"> {AppData.kudibarEvents?.hash[activeEvent]?.name || "Kennis Easter Fiesta"}</h2>
          </div>

          {/* Details */}
          <div className="flex gap-[6rem] flex-wrap  ">
            {/* <img src="/event-img.jpg"></img> */}
            <div
              style={{ backgroundImage: `url(${AppData.kudibarEvents?.hash[activeEvent]?.cover})` }}
              className="h-[61vh] w-[384px] bg-cover bg-no-repeat rounded-[2rem] bg-slate-900"
              // src={AppData.kudibarEvents?.hash[activeEvent]?.cover}
            ></div>

            <div>
              <div className="px-[4rem] min-h-[61vh] py-[5rem] rounded-primary border border-[#FDE8FE] bg-[#FCF9FC] grid place-content-center mb-[3.1rem]">
                <h4 className=" font-bold text-[2rem] leading-[2.4rem]">Description</h4>
                <p className="max-w-[49.2rem] font-normal text-[1.4rem] text-[#717171] mb-[4rem] mt-[.8rem] leading-[2rem]">{AppData.kudibarEvents?.hash[activeEvent]?.description}</p>
                <div className="flex gap-[3.2rem] mb-[5rem]">
                  <div>
                    <h3 className=" text-[1.4rem] font-bold mb-3">Event Date</h3>
                    <p className=" font-semibold text-[1.6rem] text-[#717171]">{formatDate(AppData.kudibarEvents?.hash[activeEvent]?.eventDate) || "No Date yet"}</p>
                  </div>
                  <div>
                    <h3 className=" text-[1.4rem] font-bold mb-3">Venue</h3>
                    <p className=" font-semibold text-[1.6rem] text-[#717171]">
                      {AppData.kudibarEvents?.hash[activeEvent]?.venue || "Eko Hotel & Suites, VI"}, {AppData.kudibarEvents?.hash[activeEvent]?.location}
                    </p>
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
                  {!AppData.kudibarEvents?.hash[activeEvent]?.isSoldOut && (
                    <button
                      onClick={() => {
                        popUpFunctions.initBuyTicket(
                          AppData.kudibarEvents?.hash[activeEvent]?.name,
                          AppData.kudibarEvents?.hash[activeEvent]?.eventSlug,
                          AppData.kudibarEvents?.hash[activeEvent]?.tickets
                        );
                      }}
                      className="btn btn--outlined-grad !text-black"
                    >
                      Buy Event Ticket
                    </button>
                  )}
                  {AppData.kudibarEvents?.hash[activeEvent]?.isSoldOut && <button className="btn !border-2 !border-[#C4C4C4] !bg-none !text-[#C4C4C4]">Sold out</button>}
                </div>
              </div>
              {/* <EventTicketCard></EventTicketCard> */}
            </div>
          </div>
        </section>
      )}

      {joinLive && <ProgressiveToken setJoinLive={setJoinLive} setShowDetails={setShowDetails} date={AppData.kudibarEvents?.hash[activeEvent]?.eventDate}></ProgressiveToken>}
      {/* {AppData.kudibarEvents?.loading && <p>loading...</p>} */}
    </div>
  );
};

export default Event;

// "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly
//                 go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human
//                 species.<br></br> If one examines precultural libertarianism, one is faced with a choice: either accept rationalism or conclude that context is a product of the masses, given that
//                 Marx’s essay on precultural libertarianism is invalid."
