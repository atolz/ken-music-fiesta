import React, { useContext, useRef, useState } from "react";
import PopupLayout from "../Layout/Popup";
import CircularProgress from "@mui/material/CircularProgress";
import { baseInstanceAPI } from "../../axios";
import useLocalStorage from "../../hooks/useLocalStorage";
import useShowAlert from "../../hooks/useShowAlert";
import { DataContext } from "../../Context/fetchData";

const VerifyBVN = ({ onInputBVN, onCancel }) => {
  const bvnRef = useRef(null);
  const dobRef = useRef(null);
  const AppData = useContext(DataContext);
  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const [verifying, setVerifying] = useState();
  const [bvnValid, setBvnValid] = useState(true);
  const [dobError, setDobError] = useState(false);
  const toggleAlertBar = useShowAlert();
  const onVerifyBvn = async () => {
    console.log("in verify bvn");
    if (!dobRef.current.value) {
      setDobError(true);
      return;
    }
    setDobError(false);
    setVerifying(true);
    try {
      const response = await baseInstanceAPI.post("/account/add-bvn", JSON.stringify({ bvn: bvnRef.current.value, dob: dobRef.current.value }), {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log(response);
      onInputBVN(true);
      toggleAlertBar("BVN Verified Successfully!", "success", true, 5000);
      setVerifying(false);
      AppData.fetchUserDetails();
    } catch (error) {
      if (!error.response) {
        console.log("no response from the server");
      }
      if (error.response) {
        console.log(error.response);
        setBvnValid(false);
      }
      setVerifying(false);
      onInputBVN(false);
      console.log("there was an error", error);
      toggleAlertBar("Something went wrong. Pls try again later!", "fail", true, 8000);
    }
  };
  return (
    <PopupLayout
      cancelAction={onCancel}
      action={() => {
        onVerifyBvn();
      }}
      actionText={"Continue"}
    >
      <div className="popup-box">
        <h3>Verify BVN</h3>
        <p className=" max-w-[45.2rem] !mb-[3.5rem]">Provide your Bank Verification Number to help us protect you from fraudulent transactions</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="popup-form grid grid-cols-2 gap-x-[1.6rem] "
      >
        <div className="form-group col-span-2 !mb-[0rem]">
          <label>BVN</label>
          <input
            onChange={() => {
              setBvnValid(true);
            }}
            ref={bvnRef}
            placeholder="Ex. 1234567890"
            className={` ${!bvnValid ? " !border-red-500 !border-[1.4px]" : ""}`}
          ></input>
          <div className="h-[3rem] flex items-center">
            {verifying && (
              <span className={` !text-[1.2rem] !font-normal !text-red-500`}>
                <span className=" flex items-center mt-1 font-semibold">
                  <CircularProgress color="warning" size={20} /> verifying...
                </span>
              </span>
            )}
            {!bvnValid && !verifying && <span className={` !text-[1.2rem] !font-normal !text-red-500`}>*invalid BVN</span>}
          </div>
        </div>

        <div className="form-group col-span-2">
          <label>Date of Birth</label>
          <input
            max="2022-12-31"
            onChange={(e) => {
              console.log("date is ", e.target.value);
            }}
            ref={dobRef}
            className={`w-full !pr-[2rem] date ${dobError ? " !border-red-500 !border-[1.4px]" : ""}`}
            type="date"
            required
          />
          <span className={`${dobError ? "opacity-100 " : " opacity-0 "} !text-[1.2rem] !font-normal !text-red-500`}>*This field is required</span>
        </div>
      </form>
    </PopupLayout>
  );
};

export default VerifyBVN;
