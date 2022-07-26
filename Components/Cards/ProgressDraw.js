import { Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { popUpContext } from "../../Context/PopUps";
import MyCountDown from "../Dashboard/CountDown";
import ProgressiveTicketsTable from "../Tables/ProgressiveTicketsTable";
import Dialog from "@mui/material/Dialog";
import { DataContext } from "../../Context/fetchData";

const ProgressDrawCard = () => {
  const popUpFunctions = useContext(popUpContext);
  const AppData = useContext(DataContext);
  const [started, setStarted] = useState(AppData.user?.progressiveDraw?.length > 0);
  const [show, setShow] = useState(false);
  return (
    <>
      <Dialog
        sx={{ display: "grid", placeItems: "center" }}
        open={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <div className={"w-full max-w-[50rem] overflow-scroll scroll_hide"}>
          <ProgressiveTicketsTable></ProgressiveTicketsTable>
        </div>
      </Dialog>
      <div className="gradient-border-bg !rounded-primary w-full h-full !border p-[3.2rem] !px-[4.9rem] pb-[4.3rem] relative">
        <h3 className=" font-bold text-[3.4rem] text-[#252626]">Progressive Draw</h3>
        <p className="text-[1.4rem] font-normal mb-[5.5rem] text-[#717171] ">
          Participate in our progressive draw and stand <br></br> a chance of winning amazing prizes
        </p>
        {!started && (
          <div className="p-[3.2rem] py-[4.3rem] rounded-primary text-[#717171] bg-[#F8F9FD] font-normal text-[18px] max-w-[283px] z-30 relative leading-[26px]">
            Watch this space for progressive draws and win instant prizes
          </div>
        )}
        <img width={210} className="h-auto absolute right-0 top-[22%] z-20" src="3d-progressive-draw.png"></img>
        {started && (
          <>
            <div className="relative z-50">
              <button
                onClick={() => {
                  popUpFunctions.initBuyToken(AppData.user?.progressiveDraw[0]?.id);
                }}
                className=" btn btn--outlined-grad !text-black !px-[4.9rem] mb-[2.4rem] "
              >
                Buy Ticket
              </button>
              <div className="border-t pt-[2.4rem] w-[26.8rem]">
                <p
                  onClick={() => {
                    setShow(true);
                  }}
                  className=" mb-[8px] font-bold text-[2.2rem] text-primary cursor-pointer"
                >
                  {AppData.user?.progressiveDraw[0]?.progressiveTokensBought ?? 0} Tickets Purchased
                </p>
                <p className=" mb-[8px] font-bold text-[2.2rem] text-primary">{AppData.user?.progressiveDraw[0]?.rewardWon ?? 0} Rewards</p>

                <MyCountDown time={1000000}></MyCountDown>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProgressDrawCard;
