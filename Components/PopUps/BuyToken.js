import React, { useState } from "react";
import useIsNigerian from "../../hooks/useIsNigerian";
import formatNumberWithCommas from "../../Utils/addCommas";
import IncDec from "../IncDec";
import PopupLayout from "../Layout/Popup";
import NairaSymbol from "../NairaSymbol";

const BuyToken = ({ onBuyToken, onCancel }) => {
  const { isNigerian } = useIsNigerian();
  const [total, setTotal] = useState(isNigerian() ? 500 : 1);
  const [quantity, setQuantity] = useState(1);
  const multiplier = isNigerian() ? 500 : 1;
  const onChange = (type, value) => {
    console.log("Change event occured: type: value", type, value);
    setTotal(multiplier * value);
    setQuantity(value);
  };
  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onBuyToken(quantity);
        }}
        actionText={"Buy Ticket"}
      >
        <div className="popup-box">
          <h3>Buy Progressive Ticket</h3>
          <p className="!mb-[3.7rem]">
            Progressive ticket are sold at{" "}
            <span className=" font-bold !text-[#827F7F]">
              {isNigerian() ? (
                <>
                  <NairaSymbol></NairaSymbol>500&nbsp;
                </>
              ) : (
                <span>$1&nbsp;</span>
              )}
            </span>
            per ticket. There is no discount for multiple ticket purchases.
          </p>

          {/* Increament Decrement */}
          <IncDec onCange={onChange}></IncDec>
        </div>
        {/* Total */}
        <div className=" py-[2rem] mobile:py-[3rem] px-[2.2rem] rounded-[2rem] bg-[#F8F9FD] grid place-items-center">
          <p className="font-semibold text-[2rem] mobile:text-[3rem] text-[#CECECE] leading-[3.6rem] whitespace-nowrap">
            Total -
            {isNigerian() ? (
              <span className=" font-sans">
                <NairaSymbol></NairaSymbol>
              </span>
            ) : (
              "$"
            )}
            {formatNumberWithCommas(total)}
          </p>
        </div>
      </PopupLayout>
    </div>
  );
};

export default BuyToken;
