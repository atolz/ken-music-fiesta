import { Dialog } from "@mui/material";
import React, { useContext, useState } from "react";
import { popUpContext } from "../../Context/PopUps";
import PaymentCard from "../Cards/PaymentCard";
import ReceiptStatus from "../PopUps/ReceiptStatus";

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
  const popUpFunctions = useContext(popUpContext);
  const [show, setShow] = useState(false);
  return (
    <div>
      <Dialog
        open={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <ReceiptStatus caption="Transaction Receipt"></ReceiptStatus>
      </Dialog>
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
            <PaymentCard
              action={() => {
                popUpFunctions.initReviewVendorPayment("4,000", "The Place, Lekki");
              }}
              color={"#FCAC0D"}
              className={"mr-5 mb-5 cursor-pointer hover:scale-[1.01] z-50"}
            ></PaymentCard>
            <PaymentCard a color={"#FCAC0D"} className={"mr-5 mb-5 cursor-pointer hover:scale-[1.01] z-50"}></PaymentCard>
          </>
        )}
        {activeTab == "Completed" && (
          <>
            <PaymentCard
              iconName="mark"
              iconClassName=" !text-white"
              action={() => {
                setShow(true);
              }}
              color={"#348B52"}
              className={"mr-5 mb-5 cursor-pointer hover:scale-[1.01] z-50"}
            ></PaymentCard>
            <PaymentCard
              action={() => {
                setShow(true);
              }}
              color={"#348B52"}
              iconName="mark"
              iconClassName=" !text-white"
              className={"mr-5 mb-5 cursor-pointer hover:scale-[1.01] z-50"}
            ></PaymentCard>
          </>
        )}
      </main>
    </div>
  );
};

export default Payment;
