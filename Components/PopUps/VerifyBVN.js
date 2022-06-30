import React, { useRef, useState } from "react";
import PopupLayout from "../Layout/Popup";
import CircularProgress from "@mui/material/CircularProgress";
import { baseInstanceAPI } from "../../axios";
import useLocalStorage from "../../hooks/useLocalStorage";

const VerifyBVN = ({ onInputBVN, onCancel }) => {
  const bvnRef = useRef(null);
  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const [verifying, setVerifying] = useState();
  const [bvnValid, setBvnValid] = useState(true);
  const onVerifyBvn = async () => {
    console.log("in verify bvn");
    setVerifying(true);
    try {
      const response = await baseInstanceAPI.post("/card/activation", JSON.stringify({ bvn: bvnRef.current.value }), {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log(response);
      onInputBVN(true);
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
        <p className=" max-w-[45.2rem]">Provide your Bank Verification Number to help us create your card</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="popup-form grid grid-cols-2 gap-x-[2.6rem] "
      >
        <div className="form-group col-span-2">
          <label>BVN</label>
          <input
            onChange={() => {
              setBvnValid(true);
            }}
            ref={bvnRef}
            placeholder="Ex. 1234567890"
            className={` ${!bvnValid ? " !border-red-500 !border-[1px]" : ""}`}
          ></input>
          {!bvnValid && <p className=" !text-[1.2rem] !font-normal !text-red-500">*Bvn is invalid</p>}
          {verifying && (
            <span className="mt-3 flex items-center">
              <CircularProgress color="warning" size={20} /> verifying...
            </span>
          )}
        </div>
      </form>
    </PopupLayout>
  );
};

export default VerifyBVN;
