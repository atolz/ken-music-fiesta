import React, { useState } from "react";
import PopupLayout from "../Layout/Popup";

const SelfCheckOut = ({ onCheckOut, onCancel }) => {
  const [checkAmount, setCheckAmount] = useState(500);
  const [vendor, setVendor] = useState("The Place, Lekki");
  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onCheckOut(checkAmount, vendor);
        }}
        actionText={"Continue"}
      >
        <div className="popup-box">
          <h3>Self Checkout</h3>
          <p className="">Provide your purchase details and purchase location and confirm your payment</p>
          <form className="popup-form">
            <div className="form-group">
              <label>Vendor</label>
              <select
                onChange={(e) => {
                  setVendor(e.target.value);
                }}
                placeholder="Ex. 1234567890"
              >
                <option value="" style={{ color: "#999" }} selected disabled>
                  Vendor Name
                </option>
                <option>The Place, Lekki</option>
                <option>Royal Majesty, Lekki</option>
              </select>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                onChange={(e) => {
                  setCheckAmount(e.target.value);
                }}
                placeholder="2500"
              ></input>
            </div>
          </form>
        </div>
      </PopupLayout>
    </div>
  );
};

export default SelfCheckOut;
