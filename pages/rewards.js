import { Dialog } from "@mui/material";
import React, { useState } from "react";
import BaseLayout from "../Components/Layout";
import ClaimReward from "../Components/PopUps/ClaimReward";
import TableV1 from "../Components/Tables/TableV1";

const Rewards = (props) => {
  const [activeModal, setActiveModal] = useState("");
  const [show, setShow] = useState(false);
  function toggle() {
    console.log("toggleing...");
    open ? setShow(false) : setShow(true);
  }

  function onClaimReward() {
    toggle();
  }
  return (
    <>
      <Dialog open={show} onClose={toggle}>
        {activeModal == "ClaimReward" && <ClaimReward onCancel={toggle} onClaimReward={onClaimReward}></ClaimReward>}
      </Dialog>
      <div {...props}>
        <div className="flex flex-wrap gap-10">
          <section className="flex-1 flex flex-col gap-[3.2rem] basis-[10%]">
            <div className="max-w-[89vw] table:max-w-none flex overflow-auto scroll_hide default-shadow rounded-[2rem] ">
              <div className=" flex-grow w-max default-shadow">
                {/*  Table*/}
                <div className="rounded-[2rem] bg-white whitespace-nowrap min-h-[70rem]">
                  {/* Table Head */}
                  <div className="px-[2.2rem] sidebar:px-[4.2rem] py-[3rem] border-b">
                    <h3 className="font-bold text-black text-[2.1rem] leading-[2.1rem]">Rewards Won</h3>
                  </div>
                  {/* Table Body */}
                  {false && (
                    <div className="body px-[2.2rem] sidebar:px-[4.2rem] py-[3rem]">
                      <div className="flex justify-between mb-[1.6rem] px-10">
                        <span className=" font-normal text-[1.2rem] leading-[1.4rem]">Price</span>
                        <span className=" font-normal text-[1.2rem] leading-[1.4rem]">Category</span>
                        <span className=" font-normal text-[1.2rem] leading-[1.4rem]">Ticket Number</span>
                      </div>
                      <div className="row flex justify-between py-[2.2rem] px-[2.5rem] text-[#706C6C] bg-[rgba(255,246,228,0.31)] rounded-[2rem] leading-[2.1rem] text-[1.4rem] mobile:text-[1.8rem] mb-[.8rem]">
                        <span className="font-semibold mr-6">N100,000</span>
                        <span className="font-semibold mr-6">Category 1</span>
                        <span className="font-semibold">#123456789bg</span>
                      </div>
                      <div className="row flex justify-between py-[2.2rem] px-[2.5rem] text-[#706C6C] bg-[rgba(240,240,240,0.31)] rounded-[2rem] leading-[2.1rem] text-[1.4rem] mobile:text-[1.8rem] mb-[.8rem]">
                        <span className="font-semibold">N100,000</span>
                        <span className="font-semibold">Category 1</span>
                        <span className="font-semibold">#123456789bg</span>
                      </div>
                    </div>
                  )}
                  {/* No Rewards won yet */}
                  {true && (
                    <div className="grid flex-1 place-content-center place-items-center  min-h-[28.3rem]">
                      <span className="f font-medium text-[2.5rem] text-[#F0F0F0] block">No Reward won yet</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/*  */}
          <section className="flex-1 flex flex-col gap-[3.2rem] ">
            {/* Top Winners */}

            <TableV1></TableV1>
          </section>
        </div>
      </div>
    </>
  );
};

Rewards.Layout = BaseLayout;
export default Rewards;
