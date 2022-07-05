import React from "react";
import PopupLayout from "../Layout/Popup";
import Radio from "@mui/material/Radio";
import { FormControlLabel } from "@mui/material";

const ActivateCard = ({ onActivate, onCancel }) => {
  const [selectedValue, setSelectedValue] = React.useState("virtual");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      {" "}
      <PopupLayout cancelAction={onCancel} action={onActivate} actionText={"Continue"}>
        <div className="popup-box">
          <h3>Activate Card</h3>
          <p className="!max-w-[75rem]">
            NB - You will charged a fee of <span className="font-bold">#200</span> to activate your card. To pickup the physical copy will attract an extra charge of{" "}
            <span className="font-bold">#1,000</span>.
          </p>

          {/* Payment options */}
          <div className="grid sidebar:grid-flow-col gap-[1.6rem] mb-[5rem]">
            <div className="rounded-[2rem] bg-white min-h-[12.1rem] px-[2rem] mobile:px-[4.1rem] py-[2rem] relative flex items-center justify-between  default-shadow overflow-hidden grayscale">
              {/* <img className="mr-[.9rem] absolute bottom-0 left-8 translate-y-4" src="/3d-hand-card-2.svg" />
              <span className="f font-medium text-[2.4rem] text-[#747474] leading-[2.9rem] mr-[3rem] ml-[10rem] mobile:ml-[9rem]">Virtual card</span>
              <Radio checked={selectedValue === "virtual"} onChange={handleChange} value="virtual" name="radio-buttons" inputProps={{ "aria-label": "virtual" }} /> */}

              <FormControlLabel
                value="top"
                control={<Radio checked={selectedValue === "virtual"} onChange={handleChange} value="virtual" name="radio-buttons" inputProps={{ "aria-label": "virtual" }} />}
                label={
                  <>
                    <img className="mr-[.9rem] absolute bottom-0 left-8 translate-y-4" src="/3d-hand-card-2.svg" />
                    <span className="block font-medium text-[2.4rem] text-[#747474] leading-[2.9rem] mr-[3rem] ml-[10rem] mobile:ml-[9rem]">Virtual card</span>
                  </>
                }
                labelPlacement="start"
              />
            </div>
            <div className="rounded-[2rem] bg-white min-h-[12.1rem] px-[2rem] mobile:px-[4.1rem] py-[2rem] relative flex items-center justify-between default-shadow">
              <FormControlLabel
                value="top"
                control={<Radio checked={selectedValue === "both"} onChange={handleChange} value="both" name="radio-buttons" inputProps={{ "aria-label": "both" }} />}
                label={
                  <>
                    {" "}
                    <img className="mr-[.9rem] absolute bottom-0 left-8" src="/3d-hand-card-2.svg" />
                    <p className="flex flex-col items-center justify-center !mb-0 mr-[3rem] ml-[9rem] mobile:ml-[9rem]">
                      <span className="f font-medium text-[1.8rem] text-[#747474] leading-[2.2rem]  max-w-[7.1rem] mobile:max-w-[15rem] whitespace-nowrap overflow-hidden text-ellipsis mobile:whitespace-normal">
                        Both physical & Virtual card
                      </span>
                      <span className="px-[1.2rem] py-[.5rem] bg-[#E2F6E9] mt-[.7rem] text-[#338D4F] whitespace-nowrap text-ellipsis text-[.8rem] font-[600] rounded-full">
                        Activation fee - #1,200
                      </span>
                    </p>
                  </>
                }
                labelPlacement="start"
              />
            </div>
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default ActivateCard;
