import React from "react";
import PopupLayout from "../Layout/Popup";
import Radio from "@mui/material/Radio";

const PaymentOptions = ({ onSelectPayOption, onCancel }) => {
  const [selectedValue, setSelectedValue] = React.useState("PAYSTACK");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("pay method", event.target.value);
  };

  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onSelectPayOption("PAYSTACK");
        }}
        actionText={"Continue"}
      >
        <div className="popup-box">
          <h3>Payment Option</h3>
          <p className="">Choose a payment option to complete purchase of raffle tickets</p>

          {/* Payment options */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="rounded-[2rem] flex-grow bg-white px-[4.1rem] py-[4.7rem] flex justify-between items-center default-shadow">
              <img className="mr-[1rem] w-[19.2rem]" src="/paystack.svg" />
              <Radio checked={selectedValue === "paystack"} onChange={handleChange} value="paystack" name="radio-buttons" inputProps={{ "aria-label": "paystack" }} />
            </div>
            <div className="rounded-[2rem] flex-grow bg-white px-[4.1rem] py-[4.7rem] flex items-center justify-between default-shadow">
              <img className="mr-[1rem] w-[19.2rem]" src="/flutterwave.svg" />
              <Radio
                // sx={{
                //   "& .MuiSvgIcon-root": {
                //     fontSize: 20,
                //   },
                // }}
                checked={selectedValue === "flutterwave"}
                onChange={handleChange}
                value="flutterwave"
                name="radio-buttons"
                inputProps={{ "aria-label": "flutterwave" }}
              />
            </div>
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default PaymentOptions;
