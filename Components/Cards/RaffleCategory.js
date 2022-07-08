import React from "react";

const RaffleCategory = () => {
  return (
    <div className="w-full rounded-[2rem] border-[#CECCCC] border">
      <section className="px-[3.2rem] py-[4rem] border-b">
        <h2 className=" font-bold text-[2.8rem] mb-[1.2rem] sidebar:whitespace-nowrap">Raffle Categories</h2>
        <p className=" font-normal text-[#717171] text-[1.2rem]">This shows the different categories of ticket and their price range</p>
      </section>
      <section className="px-[3.2rem] py-[4rem]">
        {new Array(6).fill(6).map((el, i) => {
          return (
            <div key={i} className="flex justify-between mb-[2.4rem] last:mb-0">
              <span className="mr-2 font-medium text-[1.4rem] text-[#706C6C] sidebar:mr-[4rem]">Category 1</span>
              <span className=" font-bold text-[1.4rem] text-[#706C6C]  text-left mr-auto">#500 - #10,000</span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default RaffleCategory;
