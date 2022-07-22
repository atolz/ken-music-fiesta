import React, { useContext, useEffect, useRef, useState } from "react";
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
    if (bvnRef.current.value.length < 11) {
      setBvnValid(false);
      return;
    }
    if (!dobRef.current.value) {
      setDobError(true);
      return;
    }
    // console.log("bvn lenght:", bvnRef.current.value.length);

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

  // useEffect(() => {
  //   bvnRef.current.focus();
  // }, []);
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
        {/* <p className=" max-w-[45.2rem] !mb-[3.5rem]">Provide your Bank Verification Number to help us protect you from fraudulent transactions</p> */}
        <p className=" max-w-[45.2rem] !mb-[2.5rem]">
          By continuing, you consent to and authorize Parallex Bank Limited to open an account with your details on the platform and issue a Kennis Music Bites debit card in your name.
        </p>
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
            autoFocus
            min={11}
            onChange={(e) => {
              console.log("Check validity", e.target.checkValidity());
              setBvnValid(true);
              // if (!e.target.value) {
              //   console.log("Bvn is invalide");
              //   setBvnValid(false);
              // } else {
              //   setBvnValid(true);
              // }
            }}
            type="number"
            required
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
              setDobError(false);
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
