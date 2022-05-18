import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import IncDec from "../IncDec";
import PopupLayout from "../Layout/Popup";

const BuyEventTicket = ({ onBuyTicket, onCancel }) => {
  const [total, setTotal] = useState(500);
  const [quantity, setQuantity] = useState(1);
  const [selectedValue, setSelectedValue] = useState("REGULAR");
  const onChange = (type, value) => {
    console.log("Change event occured: type: value", type, value);
    setTotal(500 * value);
    setQuantity(value);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    console.log("selected value is", event.target.value);
  };
  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onBuyTicket(quantity, selectedValue);
        }}
        actionText={"Buy Ticket"}
      >
        <div className="popup-box">
          <h3>Buy Event Ticket</h3>
          <p className="!mb-[3.7rem]">
            Event tickets are sold at <span className=" font-bold !text-[#827F7F]">#500</span> per ticket. There is no discount for multiple ticket purchases.
          </p>

          <form className="popup-form">
            <div className="flex flex-col">
              {/* <label className=" !mb-0">Ticket Type</label> */}
              <div className=" mb-4">
                <FormControl>
                  <RadioGroup row aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={selectedValue} onChange={handleChange}>
                    <FormControlLabel
                      value="REGULAR"
                      control={<Radio sx={{ "& span .MuiSvgIcon-root": { fontSize: "25px !important" } }} className=" ml-[.2rem] !text-white" />}
                      label={<p className="ml-[0rem] !mb-0">Regular Tickets</p>}
                    />
                    <FormControlLabel
                      value="VIP"
                      control={<Radio sx={{ "& span .MuiSvgIcon-root": { fontSize: "25px !important" } }} className="ml-[.2rem] !text-white" />}
                      label={<p className="ml-[0rem] !mb-0">VIP Tickets</p>}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </form>

          {/* Increament Decrement */}
          <IncDec onCange={onChange}></IncDec>
        </div>
        {/* Total */}
        <div className=" py-[2rem] mobile:py-[3rem] px-[2.2rem] rounded-[2rem] bg-[#F8F9FD] grid place-items-center mt-[2rem]">
          <p className="font-semibold text-[2rem] mobile:text-[3rem] text-[#CECECE] leading-[3.6rem] whitespace-nowrap">Total - N{total}</p>
        </div>
        <div className="flex items-center mt-[2.3rem] justify-center">
          <span className="font-normal text-[1.2rem] text-[#C4C4C4] mr-12">Powered by</span>
          <img src="/kudibar-logo-dark.png"></img>
        </div>
      </PopupLayout>
    </div>
  );
};

export default BuyEventTicket;
