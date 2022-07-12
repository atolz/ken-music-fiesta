import React, { useState } from "react";
import formatDate from "../../Utils/formatDate";

const Button = ({ text, active, action = () => {} }) => {
  return (
    <button
      onClick={() => action()}
      className={`h-[3.7rem] box-border rounded-[10px]  bg-[#F0F0F0] font-bold text-[1.4rem] px-[1.4rem] grid place-content-center border transition-all ${
        active ? " border-primary text-primary !bg-white !border-1" : " border-black"
      }`}
    >
      {text}
    </button>
  );
};

const RaffleTicketsTable = ({ data = [] }) => {
  const [activeFilter, setActiveFilter] = useState("Purchased");
  return (
    <div className="rounded-[2rem] bg-white w-full min-w-[50rem]">
      {/* Table Info and swithcer */}
      <section className="flex items-center justify-between p-[2.4rem] border-b">
        <h2 className="mr-auto font-bold text-[2.1rem] ml-[2rem]">Tickets</h2>
        {/* Switcher */}
        <div className="flex items-center gap-[.8rem]">
          {["Purchased", "Won Tickets", "Used"].map((el, i) => {
            return (
              <Button
                active={activeFilter == el}
                action={() => {
                  setActiveFilter(el);
                }}
                key={i}
                text={el}
              ></Button>
            );
          })}
        </div>
      </section>

      {/* Table Cols Header */}
      <section className="grid gap-2 grid-cols-4 px-[2.4rem] py-[2.4rem] h-[6.3rem] place-items-center border-b">
        {["S/N", "Date Acquired", "Ticket Number", "Status"].map((el, i) => {
          return (
            <span key={i} className=" font-medium text-[1.4rem] text-[#706C6C] px-2 whitespace-nowrap">
              {el}
            </span>
          );
        })}
      </section>

      {/* Main Body */}
      {data.length > 0 && (
        <section className="py-[4rem] px-[2.4rem] max-h-[60rem] overflow-y-scroll scroll_hide">
          {data?.map((el, i) => {
            return (
              <div
                key={i}
                className="grid gap-2 grid-cols-4 bg-[rgba(246,235,245,0.38)] rounded-[2rem] place-items-center h-[65px] mb-[1.6rem] last:mb-0 hover:bg-[rgba(246,235,245,0.86)] hover:scale-[1.002]"
              >
                <span className=" font-normal text-[1.8rem] text-[#706C6C] px-2 whitespace-nowrap">Ticket {++i}</span>
                <span className=" font-normal text-[1.8rem] text-[#706C6C] px-2 whitespace-nowrap">{formatDate(el?.created_at)}</span>
                <span className=" font-semibold text-[1.8rem] text-[#706C6C] px-2 whitespace-nowrap max-w-[80px] sm:max-w-[100px] sidebar:max-w-full text-ellipsis overflow-hidden">#{el.ticket}</span>
                <span className=" font-semibold text-[1.8rem] text-[#706C6C] px-2 whitespace-nowrap">{el?.status}</span>
              </div>
            );
          })}
        </section>
      )}

      {data.length == 0 && (
        <div className="grid flex-1 place-content-center place-items-center my-auto min-h-[30rem]">
          <span className="f font-medium text-[2.5rem] text-[#F0F0F0]">No Tickets Purchased Yet</span>
        </div>
      )}
    </div>
  );
};

export default RaffleTicketsTable;
