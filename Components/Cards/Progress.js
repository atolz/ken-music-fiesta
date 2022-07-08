import React, { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import { DataContext } from "../../Context/fetchData";
import { getUser } from "../../store/user";

const Progress = () => {
  const user = useContext(DataContext).user;
  return (
    <div
      style={{ background: "var(--color-primary-grad)" }}
      className="py-[2.9rem] mobile:py-[4rem] px-[3rem] mobile:px-[5rem]  rounded-[2rem] w-max min-w-[30rem] flex-1 min-h-[30rem]  mb-[3.2rem] text-white"
    >
      <h2 className="text-[2.8rem] sm:text-[3.6rem] font-bold leading-[4.3rem] mb-[1.2rem]">
        Hi, {user?.data?.firstName} {user?.data?.lastName}
      </h2>
      <p className=" font-medium leading-[2.6rem] text-[1.6rem] mb-[2.4rem] max-w-[39.5rem]">Hope your week is going well? take time out to check your progress</p>
      <div className="flex items-center">
        <div className="w-[87px] h-[87px]  mr-[2.4rem]">
          <CircularProgressbar
            value={45}
            text={"45%"}
            // value={parseInt(user?.dashboardHistory?.weekly_total_progress)}
            // text={`${parseInt(user?.raffleTickets?.weekly_total_purchase ?? 0)}`}
            styles={buildStyles({
              pathColor: "#FA6BFF",
              strokeLinecap: "butt",
              trailColor: "black",
              textColor: "white",
              pathTransitionDuration: 0.5,
              textSize: "26px",
              trailColor: "white",
              // trailColor: "black",
            })}
          />
        </div>
        <div>
          <span className="text-white font-medium text-[1rem] mb-[1rem] leading-[1.2rem]">Your Weekly Progress</span>
          <p className="font font-bold text-[1.8rem] leading-[2.1rem]">You are doing well! 😎</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
