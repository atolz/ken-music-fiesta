import { Dialog } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import PaymentCard from "../Components/Cards/PaymentCard";
import BaseLayout2 from "../Components/Layout/BaseLayout2";
import ReceiptStatus from "../Components/PopUps/ReceiptStatus";
import { DataContext } from "../Context/fetchData";
import { popUpContext } from "../Context/PopUps";
import formatNumberWithCommas from "../Utils/addCommas";

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
      </main>
    </div>
  );
};

Payment.Layout = BaseLayout2;
export default Payment;
