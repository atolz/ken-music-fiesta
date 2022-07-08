import React, { useState } from "react";
import PaymentCard from "../Cards/PaymentCard";

const Button = ({ text, active, action = () => {} }) => {
  return (
    <button
      onClick={() => action()}
      className={`h-[6rem] px-[4.7rem] box-border rounded-[10px] font-bold text-[1.4rem] grid place-content-center transition-all duration-100 ${
        active ? " border-primary text-primary !bg-[linear-gradient(255.14deg,_#a608a3_34.14%,_#c6155f_76.78%,_#d82023_122.17%)] !text-white" : "  !bg-[linear-gradient(#EAEAEA,_#EAEAEA)] !text-black"
      }`}
    >
      {text}
    </button>
  );
};

const Payment = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  return (
    <div>
      <header className="flex items-center gap-[3.2rem] mb-[6rem]">
        {["Pending", "Completed"].map((el, i) => {
          return (
            <Button
              action={() => {
                setActiveTab(el);
              }}
              active={activeTab == el}
              key={i}
              text={el}
            ></Button>
          );
        })}
      </header>
      <main className="flex flex-wrap">
        {activeTab == "Pending" && (
          <>
            <PaymentCard color={"#FCAC0D"} className={"mr-5 mb-5"}></PaymentCard>
            <PaymentCard color={"#FCAC0D"} className={"mr-5 mb-5"}></PaymentCard>
          </>
        )}
        {activeTab == "Completed" && (
          <>
            <PaymentCard color={"#348B52"} className={"mr-5 mb-5"}></PaymentCard>
            <PaymentCard color={"#348B52"} className={"mr-5 mb-5"}></PaymentCard>
          </>
        )}
      </main>
    </div>
  );
};

export default Payment;
