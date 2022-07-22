import React from "react";
import formatNumberWithCommas from "../../Utils/addCommas";

import PopupLayout from "../Layout/Popup";

const ReviewCheckOut = ({ onReview, onCancel, vendor, amount }) => {
  return (
    <PopupLayout cancelAction={onCancel} actionText={"Continue"} action={onReview}>
      <div className="popup-box ">
        <h3>Review Checkout</h3>
        <p className="!mb-[4rem]">Provide your purchase details and purchase location and confirm your payment</p>
        <div className="bg-[#F8F9FD] rounded-[2rem] p-[2.3rem] px-[4.1rem] py-[5.2rem] ">
          {/* <div className=" text-center mb-[2.4rem] mobile:flex">
            <span className="f font-semibold text-[1.4rem] text-[#CECECE] leading-[1.7rem] mb-[.4rem] mr-[2.4rem] min-w-[13.8rem] text-left">Reference Number</span>
            <h2 className="text-[2.2rem] font-semibold leading-[2.6rem] whitespace-nowrap overflow-hidden text-ellipsis">1234567890</h2>
          </div> */}
          <div className=" text-center mb-[2.4rem] mobile:flex">
            <span className="f font-semibold text-[1.4rem] text-[#CECECE] leading-[1.7rem] mb-[.4rem] mr-[2.4rem] min-w-[13.8rem] text-left">Vendor Details</span>
            <h2 className="text-[2.2rem] font-semibold leading-[2.6rem] whitespace-nowrap overflow-hidden text-ellipsis capitalize">{vendor}</h2>
            {/* <h2 className="text-[2.2rem] font-semibold leading-[2.6rem]">The Place, Lekki</h2> */}
          </div>
          <div className=" text-center flex-wrap mobile:flex">
            <span className="f font-semibold text-[1.4rem] text-[#CECECE] leading-[1.7rem] mb-[.4rem] mr-[2.4rem] min-w-[13.8rem] text-left">Amount</span>
            <h2 className="text-[2.2rem] font-semibold leading-[2.6rem] whitespace-nowrap overflow-hidden text-ellipsis">
              <span className=" font-sans">&#8358;</span>
              {formatNumberWithCommas(amount) || "5,000"}
            </h2>
          </div>
        </div>
      </div>
    </PopupLayout>
  );
};

export default ReviewCheckOut;
