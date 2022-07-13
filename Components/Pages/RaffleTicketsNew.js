import React, { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { DataContext } from "../../Context/fetchData";
import { getDashHistory } from "../../store/user";
import PoweredBy from "../Cards/PoweredBy";
import RaffleCategory from "../Cards/RaffleCategory";
import Container from "../Layout/Container";
import RaffleTicketsTable from "../Tables/RaffleTickets";
import formatNumberWithCommas from "../../Utils/addCommas";

const RaffleTicketsNew = () => {
  const user = useContext(DataContext).user;
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const genDate = (time) => {
    if (!time) {
      return "No Date Yet";
    }
    console.log("date is", new Date(time));
    const formattedDate = `${new Date(time).getDate()} ${monthNames[new Date(time).getUTCMonth()]}, ${new Date(time).getFullYear()}`;
    console.log("formatted date is", formattedDate);
    return formattedDate;
  };
  return (
    <div>
      {" "}
      <div className="flex flex-wrap gap-10 mb-[3.2rem]">
        {/* Section 1 */}
        <section className="min-w-[30.4rem] flex-grow">
          <div className="flex gap-10 flex-wrap mb-[3.2rem]">
            {/* Raffle Tickets */}
            <div className="flex-1 py-[3.1rem] px-[3.6rem] bg-[#F0F0F0] rounded-[20px] min-w-[20.5rem] relative max-h-[29.2rem]">
              <p className="mb-[.8rem] font-semibold text-[1.2rem] leading-[1.43rem] text-[#717171] ">Total Number of Raffle Tickets</p>
              <h2 className="f font-bold text-[2.8rem] leading-[3.4rem]  flex flex-wrap max-w-[25rem] min-w-min">{user?.raffleTickets?.total_raffle} Raffle Tickets</h2>
              {/* <button className="btn btn--outlined !border-[black] mt-[5.6rem] mr-[17.5rem]">View Tickets</button> */}
              <img style={{ animationDelay: "1s" }} className="absolute bottom-0 right-[1.7rem] w-[10.7rem] xl:w-[40%] mobile:w-[14.7rem] object-cover slide-up-now-opacity" src="/3d-ticket.svg"></img>
            </div>

            {/* Merchannt Ticket Purchase */}
            <div className=" flex-1 flex-wrap justify-center py-[2.7rem] px-[3.6rem] bg-[#F6EBF5] rounded-[2rem]  min-h-[29.2rem]  text-[#3C3E42] leading-[2.9rem]">
              <h2 className="text-[2.4rem] leading-[2.9rem] font-bold w-[22rem] mb-[1.2rem]">Merchant Ticket Purchase</h2>
              <p className="text-[#717171] font-normal leading-[1.6rem] text-[1rem] w-[23.2rem] mb-[2.4rem]">Check your progress points based on your purchase from merchants</p>
              <div className="flex flex-wrap justify-center mobile:flex-nowrap mobile:justify-start  items-center">
                <div className="w-[95px] h-[95px]  mr-[2.4rem]">
                  <CircularProgressbar
                    // value={35}
                    // text={"35%"}
                    value={parseInt(user?.raffleTickets?.weekly_total_progress)}
                    text={`${parseInt(user?.raffleTickets?.weekly_total_progress)}%`}
                    styles={buildStyles({
                      pathColor: "#A307A8",
                      strokeLinecap: "butt",
                      trailColor: "black",
                      textColor: "Black",
                      pathTransitionDuration: 0.5,
                      textSize: "18px",
                      trailColor: "black",
                    })}
                  />
                </div>
                <div className="text-center mobile:text-left">
                  <span className="text-[#BFBDBD] font-medium text-[1rem] mb-[1rem] leading-[1.2rem]">Your Progress</span>
                  <p className="font font-bold text-[1.8rem] leading-[2.1rem] w-[18.5rem]">
                    <span className="!text-[#A307A8]">N{formatNumberWithCommas(user?.dashboardHistory?.amountLeftToNextTicket)}</span> more to get a raffle ticket
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 flex-wrap overflow-x-scroll scroll_hide">
            <RaffleTicketsTable data={user?.raffleTickets?.tickets}></RaffleTicketsTable>
          </div>
        </section>

        {/* Next Raffle Draw */}
        <section className="flex-1">
          <div className="px-[3.9rem] py-[3.56rem] bg-[#F0F0F0] rounded-[2rem] relative overflow-hidden mb-[3.2rem]">
            <h3 className="h3 !text-[3.4rem] !leading-[4.1rem] w-[20.7rem] mb-[1.9rem]">Next Raffle Draw</h3>
            <p className="font font-normal text-[1.4rem] leading-[2rem] max-w-[23.1rem] mb-[17rem]">
              The next raffle draw will happen on <span className="text-[#717171] font-bold"> {genDate(user?.raffleTickets?.next_draw_date)}.</span> Do well to buy your raffle tickets or purchase from
              our merchants to stand a chance to win amazing rewards
            </p>
            <img src="/3d-hand-point.svg" className="absolute bottom-0 right-0 slide-up-now-opacity"></img>
          </div>
          <RaffleCategory data={user?.raffleTickets?.ticket_category}></RaffleCategory>
        </section>
        {/* Section 2 */}
      </div>
    </div>
  );
};

export default RaffleTicketsNew;
