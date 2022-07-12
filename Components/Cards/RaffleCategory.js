import React from "react";

const RaffleCategory = ({ data }) => {
  return (
    <div className="w-full rounded-[2rem] border-[#CECCCC] border">
      <section className="px-[3.2rem] py-[4rem] border-b">
        <h2 className=" font-bold text-[2.8rem] mb-[1.2rem] sidebar:whitespace-nowrap">Raffle Categories</h2>
        <p className=" font-normal text-[#717171] text-[1.2rem]">This shows the different categories of ticket and their price range</p>
      </section>
      <section className="px-[3.2rem] py-[4rem]">
        {data?.map((el, i) => {
          return (
            <div key={i} className="grid grid-cols-[fit-content(200px)_fit-content(200px)] place-items-start mb-[2.4rem] last:mb-0">
              <span className="mr-[2.5rem] font-medium text-[1.4rem] text-[#706C6C] sidebar:mr-[4rem] capitalize overflow-hidden">{el?.title?.replace("_", " ")}</span>
              <span className=" font-bold text-[1.4rem] text-[#706C6C]  text-left mr-auto overflow-hidden">{el?.range?.replaceAll("N", "#")}</span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default RaffleCategory;
