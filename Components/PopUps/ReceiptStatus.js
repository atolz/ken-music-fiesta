import React from "react";
import PaymentDetailsBox from "../PaymentDetailsBox";
import StatusCircle from "../StatusCircle";
import SvgIconWrapper from "../SvgIconWrapper";

const ReceiptStatus = ({
  items = [
    { name: "Vendor Details", value: "The Place, Lekki" },
    { name: "Amount", value: 5000 },
    { name: "Transaction ID", value: "34538590584736s" },
  ],
  caption = "Payment Initiated",
}) => {
  return (
    <div className=" grid place-items-center p-[2.5rem] mobile:p-[5.5rem]">
      <StatusCircle width="124px" color={"#348B52"}>
        <SvgIconWrapper className={" text-white w-[3.8rem] h-[3.8rem]"} iconName={"receipt"}></SvgIconWrapper>
      </StatusCircle>
      <h1 className={"mt-[4.8rem] mb-[2.6rem] text-[2.4rem] font-bold text-black"}>{caption}</h1>

      <div className=" place-self-stretch sidebar:!w-[43.6rem] w-auto">
        <PaymentDetailsBox theme={"light"} items={items}></PaymentDetailsBox>
      </div>
      {/* <span
        onClick={() => {
          router.push("/dashboard");
          dispatch(setActivePage("Payment"));
        }}
        className="kef-link mt-[5rem]"
      >
        Go to Initiate payment
      </span> */}
    </div>
  );
};

export default ReceiptStatus;
