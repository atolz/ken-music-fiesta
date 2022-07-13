import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import IncDec from "../IncDec";
import IncDecV2 from "../IncDecV2";
import PopupLayout from "../Layout/Popup";

const BuyEventTicket = ({ onBuyTicket, onCancel }) => {
  const [total, setTotal] = useState(500);
  const [regularQuantity, setRegularQuantity] = useState(1);
  const [vipQunatity, setVipQuantity] = useState(0);
  const [selectedValue, setSelectedValue] = useState("REGULAR");
  const onRegularChange = (type, value) => {
    console.log("Change event occured: type: value", type, value);

    if (type == "inc") {
      setTotal((val) => val + 500);
    } else {
      setTotal((val) => val - 500);
    }
    setRegularQuantity(value);
  };
  const onVipChange = (type, value) => {
    console.log("Change event occured: type: value", type, value);
    if (type == "inc") {
      setTotal((val) => val + 500);
    } else {
      setTotal((val) => val - 500);
    }
    setRegularQuantity(value);
  };

  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onBuyTicket(regularQuantity, selectedValue);
        }}
        actionText={"Buy Ticket"}
      >
        <div className="popup-box">
          <h3>Buy Event Ticket</h3>
          <p className="!mb-[4.3rem]">
            Event tickets are sold at <span className=" font-bold !text-[#827F7F]">#500</span> per ticket. There is no discount for multiple ticket purchases.
          </p>

          <div className="flex items-center justify-between mb-[3.7rem]">
            <p className=" !font-medium !text-[2.5rem] !mb-0">Regular Tickets</p>
            <IncDecV2 onCange={onRegularChange} min={1} defaultValue={1}></IncDecV2>
          </div>

          <div className="flex items-center justify-between">
            <p className=" !font-medium !text-[2.5rem] !mb-0">VIP Tickets</p>
            <IncDecV2 onCange={onVipChange}></IncDecV2>
          </div>
        </div>
        {/* Total */}
        <div className=" py-[2rem] mobile:py-[2.5rem] px-[2.2rem] rounded-[2rem] bg-[#F8F9FD] grid place-items-center mt-[3.8rem]">
          <p className="font-semibold text-[2rem] mobile:text-[3rem] text-[#CECECE] leading-[3.6rem] whitespace-nowrap">Total - N{total}</p>
        </div>
        <div className="flex items-center mt-[3.3rem] justify-center">
          <span className="font-normal text-[1.2rem] text-[#C4C4C4] mr-12">Powered by</span>
          <Link href={"https://staging.kudibar.com/"}>
            <img className=" cursor-pointer" src="/kudibar-logo-dark.png"></img>
          </Link>
        </div>
      </PopupLayout>
    </div>
  );
};

export default BuyEventTicket;

{
  /* <form className="popup-form">
            <div className="flex flex-col">
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
          </form> */
}
