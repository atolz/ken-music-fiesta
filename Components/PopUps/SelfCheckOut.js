import React, { useState } from "react";
import PopupLayout from "../Layout/Popup";

const SelfCheckOut = ({ onCheckOut, onCancel }) => {
  const [checkAmount, setCheckAmount] = useState();
  const [vendor, setVendor] = useState();
  const [amtError, setAmtError] = useState(false);
  const [vendorError, setVendorError] = useState(false);
  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          if (!vendor || vendor == "") {
            return setVendorError(true);
          }
          if (!checkAmount) {
            return setAmtError(true);
          }
          onCheckOut(checkAmount, vendor);
        }}
        actionText={"Continue"}
      >
        <div className="popup-box">
          <h3>Self Checkout</h3>
          <p className=" !mb-[2.3rem]">Provide your purchase details and purchase location and confirm your payment</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="popup-form "
          >
            <div className="form-group !mb-[1.2rem]">
              <label>Vendor</label>
              <select
                onChange={(e) => {
                  setVendor(e.target.value);
                  setVendorError(false);
                }}
                placeholder="Ex. 1234567890"
                className={` ${vendorError ? " !border-red-500 !border-[1px]" : ""}`}
              >
                <option value="" style={{ color: "#999" }} selected disabled>
                  Vendor Name
                </option>
                <option>The Place, Lekki</option>
                <option>Royal Majesty, Lekki</option>
              </select>
              <span className={`${vendorError ? "opacity-100 " : " opacity-0 "} !text-[1.2rem] !font-normal !text-red-500`}>*Pls select vendor</span>
            </div>
            <div className="form-group !mb-[1.2rem]">
              <label>Amount</label>
              <input
                onChange={(e) => {
                  setCheckAmount(e.target.value.replace(/\D/g, ""));
                }}
                placeholder="2500"
                required
                type="number"
                className={` ${amtError ? " !border-red-500 !border-[1px]" : ""}`}
              ></input>
              <span className={` ${amtError ? "opacity-100 " : " opacity-0 "}!text-[1.2rem] !font-normal !text-red-500`}>*Amount is invalid</span>
            </div>
          </form>
        </div>
      </PopupLayout>
    </div>
  );
};

export default SelfCheckOut;
