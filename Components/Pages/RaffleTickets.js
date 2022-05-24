import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { getDashHistory } from "../../store/user";
import PoweredBy from "../Cards/PoweredBy";
import Container from "../Layout/Container";

const RaffleTickets = (props) => {
  const dashboardHistory = useSelector(getDashHistory);
  return (
    <div {...props}>
      {" "}
      <div className="flex flex-wrap gap-10 mb-[3.2rem]">
        {/* Section 1 */}
        <section className="min-w-[30.4rem] flex-grow">
          <div className="flex gap-10 flex-wrap mb-[3.2rem]">
            {/* Raffle Tickets */}
            <div className="flex-1 py-[3.1rem] px-[3.6rem] bg-[#F0F0F0] rounded-[20px] min-w-[20.5rem] relative max-h-[29.2rem]">
              <p className="mb-[.8rem] font-semibold text-[1.2rem] leading-[1.43rem] text-[#717171] ">Total Number of Raffle Tickets</p>
              <h2 className="f font-bold text-[2.8rem] leading-[3.4rem]  flex flex-wrap max-w-[25rem] min-w-min">{dashboardHistory.raffleTickets} Raffle Tickets</h2>
              {/* <button className="btn btn--outlined !border-[black] mt-[5.6rem] mr-[17.5rem]">View Tickets</button> */}
              <img style={{ animationDelay: "1s" }} className="absolute bottom-0 right-[1.7rem] w-[10.7rem] xl:w-[40%] mobile:w-[14.7rem] object-cover slide-up-now-opacity" src="/3d-ticket.svg"></img>
            </div>

            {/* Merchannt Ticket Purchase */}
            <div className=" flex-1 flex-wrap justify-center py-[2.7rem] px-[3.6rem] bg-[#FFF6E4] rounded-[2rem]  min-h-[29.2rem]  text-[#3C3E42] leading-[2.9rem]">
              <h2 className="text-[2.4rem] leading-[2.9rem] font-bold w-[22rem] mb-[1.2rem]">Merchant Ticket Purchase</h2>
              <p className="text-[#717171] font-normal leading-[1.6rem] text-[1rem] w-[23.2rem] mb-[2.4rem]">Check your progress points based on your purchase from merchants</p>
              <div className="flex flex-wrap justify-center mobile:flex-nowrap mobile:justify-start  items-center">
                <div className="w-[95px] h-[95px]  mr-[2.4rem]">
                  <CircularProgressbar
                    value={77}
                    text={"N3,000"}
                    styles={buildStyles({
                      pathColor: "#FCAC0D",
                      strokeLinecap: "butt",
                      trailColor: "black",
                      textColor: "Black",
                      pathTransitionDuration: 0.5,
                      textSize: "18px",
                      trailColor: "#d6d6d6",
                    })}
                  />
                </div>
                <div className="text-center mobile:text-left">
                  <span className="text-[#BFBDBD] font-medium text-[1rem] mb-[1rem] leading-[1.2rem]">Your Progress</span>
                  <p className="font font-bold text-[1.8rem] leading-[2.1rem] w-[18.5rem]">
                    <span className="!text-[#FCAC0D]">N1,000</span> more to get a raffle ticket
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 flex-wrap">
            <div className={`flex-1 px-[2.8rem] py-[3.6rem] rounded-[2rem] bg-white relative min-w-[30.5rem] border-[#CECCCC] border`}>
              <img style={{ animationDelay: ".8s" }} className="absolute right-[2.6rem] bottom-0 w-[93px] slide-up-now-opacity" src="/3d-tickets-used.svg"></img>
              <h3 className="h3 mb-[.4rem] mr-[11.0rem]">5 Used</h3>
              <p className="text-[1.2rem] text-[#717171] leading-[1.46rem] font-semibold relative">Total Number of Tickets Used</p>
            </div>
            <div className={`flex-1 px-[2.8rem] py-[3.6rem] rounded-[2rem] bg-white relative min-w-[30.5rem] border-[#CECCCC] border`}>
              <img className="absolute right-[.8rem] bottom-0 w-[93px] w-[12.9rem] slide-up-now-opacity" src="/3d-trophy.svg"></img>
              <h3 className="h3 mb-[.4rem] mr-[11.0rem] !text-[#FCAC0D] whitespace-nowrap">2 Tickets Won</h3>
              <p className="text-[1.2rem] text-[#717171] leading-[1.46rem] font-semibold relative">Total Number of Tickets Used</p>
            </div>
          </div>
        </section>

        {/* Next Raffle Draw */}
        <section className="flex-1">
          <div className="px-[3.9rem] py-[3.56rem] bg-[#F0F0F0] rounded-[2rem] relative overflow-hidden">
            <h3 className="h3 !text-[3.4rem] !leading-[4.1rem] w-[20.7rem] mb-[1.9rem]">Next Raffle Draw</h3>
            <p className="font font-normal text-[1.4rem] leading-[2rem] max-w-[23.1rem] mb-[17rem]">
              The next raffle draw will happen on <span className="text-[#717171] font-bold">20 April, 2022.</span> Do well to buy your raffle tickets or purchase from our merchants to stand a chance
              to win amazing rewards
            </p>
            <img src="/3d-hand-point.svg" className="absolute bottom-0 right-0 slide-up-now-opacity"></img>
          </div>
        </section>
        {/* Section 2 */}
      </div>
      <div className="flex flex-wrap gap-10">
        {/* div-1 */}
        <div className="min-w-[33rem] flex-grow">
          {/*  Table*/}
          <div className="rounded-[2rem] bg-white whitespace-nowrap">
            {/* Table Head */}
            <div className="px-[2.2rem] sidebar:px-[4.2rem] py-[3rem] border-b">
              <h3 className="font-bold text-black text-[2.1rem] leading-[2.1rem]">Raffle Category</h3>
            </div>
            {/* Table Body */}
            <div className="body px-[2.2rem] sidebar:px-[4.2rem] py-[3rem]">
              <div className="row flex justify-between py-[2.2rem] px-[2.5rem] text-[#706C6C] bg-[rgba(255,246,228,0.31)] rounded-[2rem] leading-[2.1rem] text-[1.4rem] mobile:text-[1.8rem] mb-[.8rem]">
                <span className="font-normal">Category 1</span>
                <span className="font-semibold">#500 - #10,000</span>
              </div>
              <div className="row flex justify-between py-[2.2rem] px-[2.5rem] text-[#706C6C] bg-[rgba(240,240,240,0.31)] rounded-[2rem] leading-[2.1rem] text-[1.4rem] mobile:text-[1.8rem]">
                <span className="font-normal">Category 1</span>
                <span className="font-semibold">#500 - #10,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* div-2 */}
        <div className="min-w-[33rem] flex-grow">
          {/*  Table*/}
          <div className="rounded-[2rem] bg-white">
            {/* Table Head */}
            <div className=" px-[2.2rem] sidebar:px-[4.2rem] py-[3rem] border-b">
              <h3 className="font-bold text-black text-[2.1rem] leading-[2.1rem]">Ticket Numbers</h3>
            </div>
            {/* Table Body */}
            <div className="body px-[2.2rem] sidebar:px-[4.2rem] py-[3rem]">
              <div className="row flex justify-between py-[2.2rem] px-[2.5rem] text-[#706C6C] bg-[rgba(255,246,228,0.31)] rounded-[2rem] leading-[2.1rem] text-[1.4rem] mobile:text-[1.8rem] mb-[.8rem]">
                <span className="font-normal">Ticket 1</span>
                <span className="font-semibold">#1223345ABG</span>
              </div>
              <div className="row flex justify-between py-[2.2rem] px-[2.5rem] text-[#706C6C] bg-[rgba(240,240,240,0.31)] rounded-[2rem] leading-[2.1rem] text-[1.4rem] mobile:text-[1.8rem]">
                <span className="font-normal">Ticket 2</span>
                <span className="font-semibold">#1223345ABG</span>
              </div>
            </div>
          </div>
        </div>

        {/* <PoweredBy></PoweredBy> */}
      </div>
    </div>
  );
};

export default RaffleTickets;
