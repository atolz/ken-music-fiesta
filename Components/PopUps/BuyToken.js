import React, { useState } from "react";
import IncDec from "../IncDec";
import PopupLayout from "../Layout/Popup";

const BuyToken = ({ onBuyToken, onCancel }) => {
  const [total, setTotal] = useState(500);
  const [quantity, setQuantity] = useState(1);
  const onChange = (type, value) => {
    console.log("Change event occured: type: value", type, value);
    setTotal(500 * value);
    setQuantity(value);
  };
  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onBuyToken(quantity);
        }}
        actionText={"Buy Token"}
      >
        <div className="popup-box">
          <h3>Buy Token</h3>
          <p className="!mb-[3.7rem]">
            Tokens are sold at <span className=" font-bold !text-[#827F7F]">#500</span> per token. There is no discount for multiple tokken purchases.
          </p>

          {/* Increament Decrement */}
          <IncDec onCange={onChange}></IncDec>
        </div>
        {/* Total */}
        <div className=" py-[2rem] mobile:py-[3rem] px-[2.2rem] rounded-[2rem] bg-[#F8F9FD] grid place-items-center">
          <p className="font-semibold text-[2rem] mobile:text-[3rem] text-[#CECECE] leading-[3.6rem] whitespace-nowrap">Total - N{total}</p>
        </div>
      </PopupLayout>
    </div>
  );
};

export default BuyToken;
