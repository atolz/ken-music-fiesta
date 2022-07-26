import React, { useState } from "react";
import useIsNigerian from "../../hooks/useIsNigerian";
import formatNumberWithCommas from "../../Utils/addCommas";
import IncDec from "../IncDec";
import PopupLayout from "../Layout/Popup";
import NairaSymbol from "../NairaSymbol";

const BuyRaffleTicket = ({ onBuyRaffleTicket, onCancel }) => {
  const { isNigerian } = useIsNigerian();
  const [total, setTotal] = useState(isNigerian() ? 500 : 1);
  const multiplier = isNigerian() ? 500 : 1;
  const [quantity, setQuantity] = useState(1);
  const onChange = (type, value) => {
    console.log("Change event occured: type: value", type, value, total);
    setTotal(multiplier * value);
    setQuantity(value);
  };
  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onBuyRaffleTicket(quantity);
        }}
        actionText={"Buy Ticket"}
      >
        <div className="popup-box">
          <h3>Buy Raffle Ticket</h3>
          <p className="!mb-[3.7rem]">
            Raffle tickets are sold at{" "}
            <span className=" font-bold !text-[#827F7F]">
              {isNigerian() ? (
                <>
                  <span className=" font-sans">&#8358;</span>500
                </>
              ) : (
                "1$"
              )}
            </span>
            &nbsp;per ticket. There is no discount for multiple ticket purchases.
          </p>

          {/* Increament Decrement */}
          <IncDec onCange={onChange}></IncDec>
        </div>
        {/* Total */}
        <div className=" py-[2rem] mobile:py-[2.5rem] px-[2.2rem] rounded-[2rem] bg-[#F8F9FD] grid place-items-center">
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

export default BuyRaffleTicket;
