import React from "react";
import PopupLayout from "../Layout/Popup";
import Radio from "@mui/material/Radio";
import Image from "next/image";

const PaymentOptions = ({ onSelectPayOption, onCancel }) => {
  const [selectedValue, setSelectedValue] = React.useState("SEERBIT");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("pay method", event.target.value);
    // onSelectPayOption(event.target.value);
  };

  return (
    <div>
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onSelectPayOption(selectedValue);
        }}
        actionText={"Continue"}
      >
        <div className="popup-box">
          <h3>Payment Option</h3>
          <p className="">Choose a payment option to complete purchase of raffle tickets</p>

          {/* Payment options */}
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Seerbit */}
            <div className="rounded-[2rem] flex-grow bg-white px-[4.1rem] py-[4.7rem] flex items-center justify-between default-shadow">
              {/* <img className="mr-[1rem] w-[19.2rem]" src="/flutterwave.svg" /> */}
              {/* <Image className="mr-[1rem]" width={192} height={35} src="/seerbit-2.png" alt="SEERBIT"></Image> */}
              <img className="w-[19.2rem] h-[2.5rem] mr-[1rem]" src="/seerbit-2.png" alt="SEERBIT"></img>

              <Radio
                // sx={{
                //   "& .MuiSvgIcon-root": {
                //     fontSize: 20,
                //   },
                // }}
                checked={selectedValue === "SEERBIT"}
                onChange={handleChange}
                value="SEERBIT"
                name="radio-buttons"
                inputProps={{ "aria-label": "SEERBIT" }}
              />
            </div>
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default PaymentOptions;
