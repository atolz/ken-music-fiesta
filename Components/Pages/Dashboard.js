import React, { useContext, useEffect } from "react";
import Progress from "../Cards/Progress";
import Activate from "../Cards/Activate";
import Stats from "../Cards/Stats";
import PoweredBy from "../Cards/PoweredBy";
import LatestWinnerCard from "../Cards/LatestWinnerCard";
import TableV1 from "../Tables/TableV1";
import Container from "../Layout/Container";
import { useSelector } from "react-redux";
import { getDashHistory, getUser } from "../../store/user";
import useLocalStorage from "../../hooks/useLocalStorage";
import { DataContext } from "../../Context/fetchData";

const Dashboard = (props) => {
  // const user = useSelector(getUser);
  // const dashboardHistory = useSelector(getDashHistory);
  const AppData = useContext(DataContext);
  const user = AppData.user.data;
  const dashboardHistory = AppData.user.dashboardHistory;
  const { getLocalStorage, isLoggedIn } = useLocalStorage();
  useEffect(() => {
    console.log("user is ...", user);
    console.log("token is ", getLocalStorage("token"));
    isLoggedIn();
  }, []);
  return (
    <div {...props}>
      {/* First Section */}
      <div className="flex flex-wrap mobile:gap-5">
        {" "}
        <Progress user={user}></Progress>
        <Activate></Activate>
      </div>

      {/* Second Section */}

      <div className="flex flex-wrap gap-10  mb-[3.2rem]">
        {/* <Stats title={"15 Raffle Tickets"} text={"Total Number of Raffle Tickets"} color="#F0F0F0" img={"/3d-ticket.png"} /> */}
        <div className={`px-[2.8rem] py-[3.6rem] rounded-[2rem] bg-[#F0F0F0] relative overflow-hidden  min-w-[30rem] flex-1`}>
          <h3 className="h3 !sm:text-[2rem] mb-[.4rem] mr-[11.0rem]">{dashboardHistory.raffleTickets} Raffle Tickets</h3>
          <p className="text-[1.2rem] text-[#717171] leading-[1.46rem] font-semibold">Total Number of Raffle Tickets</p>
          <img className="absolute right-[2.6rem] bottom-0 w-[7.3rem] mobile:w-[9.3rem] translate-x-6 mr-5 raffle-ticket" src={"/3d-ticket.svg"}></img>
        </div>
        <div className={`px-[2.8rem] py-[3.6rem] rounded-[2rem] bg-[#FFF7E7] relative  min-w-[30rem] overflow-hidden flex-1`}>
          <h3 className="h3 mb-[.4rem] mr-[11.0rem] text-[#FCAC0D]">{dashboardHistory.rewardWon} Rewards</h3>
          <p className="text-[1.2rem] text-[#717171] leading-[1.46rem] font-semibold">Total Number of Rewards</p>
          {/* <img className="absolute right-[2.6rem] bottom-0 w-[12rem] mobile:w-[15.2rem]  hand-card" src={"/3d-trophy.svg"}></img> */}
          <img className="absolute right-[2.6rem] bottom-0 w-[12rem] mobile:w-[15.2rem] translate-x-6 reward" src={"/3d-trophy.svg"}></img>
        </div>
        <div className={`px-[2.8rem] py-[3.6rem] rounded-[2rem] bg-[#F0F0F0] relative  min-w-[30rem] overflow-hidden flex-1`}>
          <h3 className="h3 mb-[.4rem] mr-[11.0rem]">{dashboardHistory.eventTickets} Event Tickets</h3>
          <p className="text-[1.2rem] text-[#717171] leading-[1.46rem] font-semibold">Total Number of Event Tickets</p>
          {/* <img className="absolute right-[2.6rem] bottom-0 w-[12rem] mobile:w-[15.2rem] hand-card block" src={"/3d-ticket-1.png"}></img> */}
          <img className="absolute right-[2.6rem] bottom-0 w-[12rem] mobile:w-[15.2rem] translate-x-6 event-ticket block" src={"/3d-ticket-1.png"}></img>
        </div>
        {/* <Stats title={"2 Rewards"} text={"Total Number of Rewards"} color="#FFF7E7" img={"/3d-ticket.svg"} /> */}
        {/* <Stats title={"15 Raffle Tickets"} text={"Total Number of Raffle Tickets"} color="#F0F0F0" img={"/3d-ticket.png"} /> */}
      </div>

      {/* Third Section: Latest Winner Section */}
      <section className="flex flex-wrap gap-10">
        {/* div-1 */}
        <div className=" flex-1">
          {/* <div className="relative">
            <LatestWinnerCard />
          </div> */}
          {/* <div className="py-[2.7rem] px-[4.2rem] flex items-center justify-between default-shadow bg-white rounded-[2rem] mb-[1.3rem]">
            <h3 className="text-[2.1rem] font-bold">Transaction History</h3>
            <a href="#" className="text-[#FCAC0D] text-[1.4rem] font-bold underline">
              View all
            </a>
          </div> */}

          {/* <div className=" px-[4.2rem] bg-white rounded-[2rem] mb-[1.3rem] default-shadow">
            <div className="row flex items-center justify-between text-[#CF0C0F] text-[1.6rem] font-semibold py-[2.4rem] leading-[1.9rem] cursor-pointer border-b">
              <p>Purchase Raffle Ticket</p>
              <p>#5,000</p>
              <p>22 Oct, 2022</p>
            </div>
            <div className="row flex items-center justify-between text-[#CF0C0F] text-[1.6rem] font-semibold py-[2.4rem] leading-[1.9rem] cursor-pointer border-b">
              <p>Purchase Raffle Ticket</p>
              <p>#5,000</p>
              <p>22 Oct, 2022</p>
            </div>
          </div> */}
          <TableV1></TableV1>
        </div>

        {/* div-2 */}
        <div className=" flex-1">
          <PoweredBy></PoweredBy>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
