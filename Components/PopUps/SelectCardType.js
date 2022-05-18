import React from "react";
import PopupLayout from "../Layout/Popup";
import Radio from "@mui/material/Radio";

const SelectCardType = ({ onSelectCardType, onCancel }) => {
  const [selectedValue, setSelectedValue] = React.useState("Kennis Card");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      {" "}
      <PopupLayout
        cancelAction={onCancel}
        action={() => {
          onSelectCardType(selectedValue);
        }}
        actionText={"Continue"}
      >
        <div className="popup-box">
          <h3>Choose Payment Method</h3>
          <p className="max-w-[45rem]">Select the option that is suitable for you to complete your transaction.</p>

          {/* Payment options */}
          <div className="grid sidebar:grid-flow-col gap-[1.6rem] mb-[5rem]">
            <div className="rounded-[2rem] bg-white min-h-[12.1rem] px-[2rem] mobile:px-[4.1rem] py-[2rem] relative flex items-center justify-between default-shadow">
              <img className="mr-[.9rem] absolute bottom-0 left-8" src="/3d-hand-card-2.svg" />
              <p className="flex flex-col items-center justify-center !mb-0 mr-[3rem] ml-[9rem] mobile:ml-[9rem]">
                <span className="f font-medium text-[1.8rem] text-[#747474] leading-[2.2rem]  max-w-[7.1rem] mobile:max-w-[15rem] whitespace-nowrap overflow-hidden text-ellipsis mobile:whitespace-normal">
                  Kennis Card
                </span>
                <span className="px-[1.2rem] py-[.5rem] bg-[#E2F6E9] mt-[.7rem] text-[#338D4F] whitespace-nowrap text-ellipsis text-[.8rem] font-[600] rounded-full">**** **** **** 6789</span>
              </p>
              <Radio checked={selectedValue === "Kennis Card"} value="Kennis Card" name="radio-buttons" inputProps={{ "aria-label": "Kennis Card" }} />
            </div>
            <div className="rounded-[2rem] bg-white min-h-[12.1rem] px-[2rem] mobile:px-[4.1rem] py-[2rem] relative flex items-center justify-between  default-shadow overflow-hidden grayscale">
              <img className="mr-[.9rem] absolute bottom-0 left-8 translate-y-4" src="/3d-hand-card-2.svg" />
              {/* <span className="f font-medium text-[2.4rem] text-[#747474] leading-[2.9rem] mr-[3rem] ml-[10rem] mobile:ml-[9rem]"> */}
              <span className="f font-medium text-[2.4rem] text-[#747474] leading-[2.2rem] mr-[3rem] ml-[10rem] mobile:ml-[9rem]  max-w-[7.1rem] mobile:max-w-[15rem] whitespace-nowrap overflow-hidden text-ellipsis mobile:whitespace-normal">
                Online payment platform
              </span>
              <Radio
                checked={selectedValue === "Online payment platform"}
                onChange={handleChange}
                value="Online payment platform"
                name="radio-buttons"
                inputProps={{ "aria-label": "Online payment platform" }}
              />
            </div>
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default SelectCardType;
