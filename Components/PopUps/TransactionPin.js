import React, { useState } from "react";
import PopupLayout from "../Layout/Popup";
import OtpInput from "react-otp-input";

const TransactionPin = ({ onClose = () => {} }) => {
  const [pinVal, setPinVal] = useState("");
  const [error, setError] = useState("");
  const handlePinChange = (pin) => {
    setError("");
    setPinVal(pin);
  };

  const onChangePin = () => {};
  return (
    <PopupLayout cancelAction={onClose} footer={false}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on sublmit");
          onChangePin();
        }}
        className="popup-box "
      >
        <h3>Create Transaction Pin</h3>
        <p className="">Setup your transaction pin for easy verifications and faster transaction.</p>

        <div className="grid gap-1 gap-y-[1rem] popup-form">
          {error && <p className=" !text-[1.4rem] !text-red-500">*{error}</p>}

          <OtpInput
            isInputSecure
            isInputNum
            containerStyle={{ display: "flex", justifyContent: "space-between" }}
            inputStyle={{
              width: "67px",
              margin: "auto",
              height: "70px",
              fontFamily: "Montserrat",
              fontSize: "5.6rem",
              //   caretColor: "transparent",
              "border-radius": "1rem",
              "@media (max-width: 600px)": {
                height: "40px",
              },
            }}
            focusStyle={{
              outline: "2px solid #A307A8",
            }}
            hasErrored={!!error}
            errorStyle={{
              outline: "1px solid red",
            }}
            shouldAutoFocus={true}
            value={pinVal}
            onChange={handlePinChange}
            numInputs={4}
            separator={<span></span>}
          />
          <button
            onClick={() => {
              onClose();
            }}
            className="btn  mt-[5.8rem]"
          >
            Create Pin
          </button>
        </div>
      </form>
    </PopupLayout>
  );
};

export default TransactionPin;
