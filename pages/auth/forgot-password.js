import React, { useRef, useState } from "react";
import Link from "next/link";
import GotMail from "../../Components/Auth/GotMail";
import { baseInstanceAPI } from "../../axios";
import useLoading from "../../hooks/useLoading";

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
    <div className=" w-full h-screen bg-flare bg-no-repeat bg-cover overflow-y-auto">
      <header className="flex items-center px-[12.5rem] py-[5.6rem]">
        <img className="w-[8.9rem]" src="/kef-logo.svg"></img>
        <button className="btn ml-auto">Buy Event Ticket</button>
        <button className="btn btn--outlined text-white ml-[2.4rem]">Verify Ticket</button>
      </header>
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
    </div>
  );
};

export default ForgotPassword;
