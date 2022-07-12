import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AuthStatus from "./Status";
import { useRouter } from "next/router";
import { setLoginStatus } from "../../store/user";
import { baseInstanceAPI } from "../../axios";
import useLoading from "../../hooks/useLoading";
import useShowAlert from "../../hooks/useShowAlert";
import OtpInput from "react-otp-input";

const OTP = ({ action }) => {
  const inputAmount = [1, 2, 3, 4, 5, 6];
  const { isLoading, toggleLoad } = useLoading();
  const [otpVal, setOtpVal] = useState("");
  const [otp, setOtp] = useState([]);
  const [uuid, setUuid] = useState("");
  const [verificationType, setVerificationType] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const toggleAlertBar = useShowAlert();
  const router = useRouter();
  const onSuccess = () => {
    dispatch(setLoginStatus(true));
    router.replace("/dashboard");
  };

  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query.uuid);
    console.log(router.query.type);
    setUuid(router.query.uuid);
    setVerificationType(router.query.type);
  }, [router.isReady]);

  const onVerify = async () => {
    const data = { uuid: uuid, otp: otpVal.toString().replace(/,/g, "") };
    console.log("data is ", JSON.stringify(data));
    toggleLoad();
    try {
      const response = await baseInstanceAPI.post("/account/verify-account", JSON.stringify(data));
      console.log(response);
      toggleAlertBar("OTP verified successfully!", "success", true);
      if (verificationType == "registration") {
        router.push(`/auth/sign-in`);
        // router.push(`/auth/sign-in/${response.data.verifiedToken}`);
      }
      if (verificationType == "reset-password") {
        router.push(`/auth/reset-password/${response.data.verifiedToken}`);
      }
    } catch (error) {
      if (!error.response) {
        console.log("No response from the servver");
        setError("Network Error");
      } else {
        setError("OTP verification failed");
      }
      console.log("An error has occured", error.response);
    }
    toggleLoad();
  };

  const handleOtpChange = (otp) => {
    setError("");
    setOtpVal(otp);
  };

  return (
    <>
      {!showStatus && (
        <div className="auth-container !mb-[10rem]">
          <form
            className="verify-input"
            onSubmit={(e) => {
              e.preventDefault();
              onVerify();
              // router.push("/auth/create-account");
              // console.log("otp is:", otp.toString().replace(/,/g, ""));
              // setShowStatus(true);
            }}
          >
            <h3>OTP Verification</h3>
            <p className="mb-[3.6rem]">Enter the code that was sent to your mail to continue registration.</p>
            {error && <p className=" !text-[1.4rem] !text-red-500">*{error}</p>}

            <OtpInput
              inputStyle={{
                background: "white",
                width: "100%",
                height: "70px",
                fontFamily: "Montserrat",
                fontSize: "16px",
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
              value={otpVal}
              onChange={handleOtpChange}
              numInputs={6}
              separator={<span>-</span>}
            />
            <button className="btn w-full mt-[6.8rem]">Verify OTP</button>
          </form>
        </div>
      )}
      {showStatus && <AuthStatus action={onSuccess} status={"success"}></AuthStatus>}
    </>
  );
};

export default OTP;
