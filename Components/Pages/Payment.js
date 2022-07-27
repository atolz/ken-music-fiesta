import { Dialog } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/fetchData";
import { popUpContext } from "../../Context/PopUps";
import formatNumberWithCommas from "../../Utils/addCommas";
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
  const [vendor, setVendor] = useState();
  const [transactionId, setTransactionId] = useState();
  const [amount, setAmount] = useState();
  const [show, setShow] = useState(false);
  const AppData = useContext(DataContext);

  useEffect(() => {
    AppData.getComletedPayments();
    AppData.getUserPendingPayment();
  }, []);
  return (
    <div>
      <Dialog
        open={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <ReceiptStatus
          items={[
            { name: "Vendor Details", value: vendor },
            {
              name: "Amount",
              value: (
                <span>
                  <span className=" font-sans">&#8358;</span>
                  {formatNumberWithCommas(amount)}
                </span>
              ),
            },
            { name: "Transaction ID", value: transactionId },
          ]}
          caption="Transaction Receipt"
          onClose={() => {
            setShow(false);
          }}
        ></ReceiptStatus>
      </Dialog>
      {/* <header className="flex items-center gap-[3.2rem] mb-[6rem]">
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
      </header> */}
      <main className="flex flex-wrap">
        {activeTab == "Pending" && (
          <>
            {AppData.user?.pendingPayments?.map((el, i) => {
              return (
                <PaymentCard
                  vendor={el?.vendor}
                  amount={el?.amount}
                  date={el?.created_at}
                  key={i}
                  action={() => {
                    popUpFunctions.initReviewVendorPayment(el.amount, el.vendor, el.id);
                  }}
                  color={"#FCAC0D"}
                  className={"mr-5 mb-8 cursor-pointer hover:scale-[1.01] z-50"}
                ></PaymentCard>
              );
            })}
            {AppData.user?.completedPayments?.map((el, i) => {
              return (
                <PaymentCard
                  vendor={el?.vendor}
                  amount={el?.amount}
                  date={el?.created_at}
                  key={i}
                  action={() => {
                    setAmount(el?.amount);
                    setVendor(el?.vendor);
                    setTransactionId(el?.id);
                    setShow(true);
                  }}
                  color={"#348B52"}
                  className={"mr-5 mb-8 cursor-pointer hover:scale-[1.01] will-change-transform z-50"}
                ></PaymentCard>
              );
            })}

            {AppData.user?.pendingPayments?.length < 1 && AppData.user?.completedPayments?.length < 1 && (
              <div className="grid flex-1 place-content-center place-items-center my-auto min-h-[50vh]">
                <span className="f font-medium text-[2.5rem] text-[#E0E0E0]">No Payment From Vendors</span>
              </div>
            )}
          </>
        )}
        {/* {activeTab == "Completed" && (
          <>
            {AppData.user?.completedPayments?.map((el, i) => {
              return (
                <PaymentCard
                  vendor={el?.vendor}
                  amount={el?.amount}
                  date={el?.created_at}
                  key={i}
                  action={() => {
                    setAmount(el?.amount);
                    setVendor(el?.vendor);
                    setTransactionId(el?.id);
                    setShow(true);
                  }}
                  color={"#348B52"}
                  className={"mr-5 mb-8 cursor-pointer hover:scale-[1.01] z-50"}
                ></PaymentCard>
              );
            })}
          </>
        )} */}
      </main>
    </div>
  );
};

export default Payment;
