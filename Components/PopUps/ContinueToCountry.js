import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { baseInstanceAPI } from "../../axios";
import { DataContext } from "../../Context/fetchData";
import useLoading from "../../hooks/useLoading";
import useLocalStorage from "../../hooks/useLocalStorage";
import useShowAlert from "../../hooks/useShowAlert";
import PopupLayout from "../Layout/Popup";

const ContinueToCountry = ({ onAction = () => {} }) => {
  const { getLocalStorage, isLoggedIn } = useLocalStorage();
  const AppData = useContext(DataContext);
  const toggleAlertBar = useShowAlert();
  const { toggleLoad } = useLoading();
  const [selectedValue, setSelectedValue] = useState("Current");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const updateHasConfirmedNigerian = async (status) => {
    toggleLoad();
    try {
      const resp = await baseInstanceAPI.post(
        "/profile/update-is-nigerian",
        { isNigerian: status, hasConfirmedNigerian: status },
        {
          headers: {
            Authorization: `Bearer ${getLocalStorage("token")}`,
          },
        }
      );
      // At this point the back end should've updated the user hasConfirmedNigerian
      // So making a call to Update user profile 1.e fetch and update user profile
      AppData.fetchUserDetails();
      onAction(status);
      toggleAlertBar("User profile successfully updated", "success", true, 7000);

      toggleLoad();
    } catch (error) {
      console.log("error in continue", error.message);
      if (error?.response) {
        toggleAlertBar("Couldn't handle your request. Pls try again.", "fail", true, 7000);
      } else {
        toggleAlertBar("A client error occured. Pls try again later", "fail", true, 7000);
      }
      toggleLoad();
    }
  };

  return (
    <PopupLayout footer={false}>
      <div className="grid place-items-center text-center px-[.8rem]  pb-[1.2rem] pt-[.8rem]">
        <img className=" h-[66.5px] cursor-pointer mb-[3rem] mt-5" src="/new_logo.png"></img>
        <h3 className="text-[2.8rem] text-black leading-[3.9rem] font-bold mb-[.8rem]">
          Welcome to kennis Music <br></br>Bites
        </h3>

        <p className="mb-[2.4rem] !text-[#827F7F] !text-center font-medium text-[1.6rem] leading-[2.6rem] max-w-[43.7rem]">
          Are you visiting us from Nigeria or from outside? This is to better serve you with necessary things you need.
        </p>
        <p className=" text-[#767272] text-[1.4rem] mb-[2.3rem] font-bold">Continue With?</p>

        <FormControl>
          <RadioGroup row aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={selectedValue} onChange={handleChange}>
            <FormControlLabel
              value="Current"
              control={
                <Radio
                  sx={{
                    padding: 0,
                    "& span .MuiSvgIcon-root": {
                      fontSize: "27px !important",
                    },
                  }}
                  className="ml-[1rem] !text-white"
                />
              }
              label={<p className="ml-[.6rem] !mb-0 text-[1.7rem] font-bold font-Mont">Current Location ({AppData.user?.data?.country})</p>}
            />
            <FormControlLabel
              value="Nigerian"
              control={
                <Radio
                  sx={{
                    padding: 0,
                    "& span .MuiSvgIcon-root": {
                      fontSize: "27px !important",
                    },
                  }}
                  className="ml-[1rem] !text-white"
                />
              }
              label={<p className="ml-[.6rem] !mb-0 text-[1.7rem] font-bold font-Mont">Nigeria</p>}
            />
          </RadioGroup>
        </FormControl>

        {selectedValue != "Current" && (
          <div
            className={` ${
              selectedValue == "Current" ? " invisible" : " visible"
            } rounded-[1rem] bg-[#F6EBF5] grid place-items-center mt-[3.2rem] h-[6.2rem] px-[2rem] text-[1.4rem] text-primary font-medium `}
          >
            Your BVN will be required to mint your first ticket
          </div>
        )}

        <button
          onClick={() => {
            if (selectedValue !== "Nigerian") {
              updateHasConfirmedNigerian(false);
            } else {
              updateHasConfirmedNigerian(true);
            }
          }}
          className="btn max-w-[47rem] w-full mt-[4.8rem]"
        >
          Continue
        </button>
      </div>
    </PopupLayout>
  );
};

export default ContinueToCountry;
