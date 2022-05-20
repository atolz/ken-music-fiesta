import React, { useRef, useState } from "react";
import Link from "next/link";
import GotMail from "../../Components/Auth/GotMail";
import { baseInstanceAPI } from "../../axios";
import useLoading from "../../hooks/useLoading";
import AuthLayout from "../../Components/Layout/AuthLayout";

const ForgotPassword = () => {
  const [gotMail, setGotMail] = useState(false);
  const emailRef = useRef(null);
  const [emailError, setEmailError] = useState("");
  const { toggleLoad } = useLoading();

  const onRequestResetPassword = async () => {
    toggleLoad();
    try {
      const response = await baseInstanceAPI.post("/account/request-password-reset", {
        email: emailRef.current.value,
      });
      console.log("response is", response);
      setGotMail(true);
    } catch (error) {
      setEmailError("Pls enter a valid email");
    }
    toggleLoad();
  };
  return (
    <main>
      {!gotMail && (
        <div className="auth-container !mb-[10rem]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onRequestResetPassword();
            }}
            className="auth-form"
          >
            <h3>Forgot Password</h3>
            <p className="mb-[3.4rem]">Hey there! Having issues with your account? Don’t worry we have the spare key for you.</p>

            {emailError && <p className=" !text-[1.4rem] !text-red-500">*{emailError}</p>}
            <div className="grid grid-cols-2 gap-5 gap-y-[2.4rem]">
              <div className="form-group col-span-2">
                <label>Email</label>
                <input
                  onChange={() => {
                    setEmailError("");
                  }}
                  ref={emailRef}
                  required
                  type="email"
                  placeholder="Ex. Jonathan@gmail.com"
                />
              </div>
              <button className="btn col-span-2 mt-[3.4rem]">Continue</button>
            </div>
          </form>
        </div>
      )}
      {gotMail && <GotMail></GotMail>}
    </main>
  );
};

ForgotPassword.Layout = AuthLayout;
export default ForgotPassword;
