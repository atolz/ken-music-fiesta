import { useState } from "react";
import GotMail from "../../Components/Auth/GotMail";
import OTP from "../../Components/Auth/OTP";

const resetPassword = () => {
  const [active, setActive] = useState("form");

  return (
    <div className=" w-full h-screen bg-flare bg-no-repeat bg-cover overflow-y-auto">
      <header className="flex items-center px-[12.5rem] py-[5.6rem]">
        <img className="w-[8.9rem]" src="/kef-logo.svg"></img>
        <button className="btn ml-auto">Buy Event Ticket</button>
        <button className="btn btn--outlined text-white ml-[2.4rem]">Verify Ticket</button>
      </header>
      <main>
        {active == "form" && (
          <div className="auth-container !mb-[10rem]">
            <form className="auth-form">
              <h3>Reset Password</h3>
              <p className="mb-[7.4rem]">You are almost there, just a few little details and we are good. Already a member? Sign In</p>

              <div className="grid grid-cols-2 gap-5 gap-y-[2.4rem]">
                <div className="form-group col-span-2">
                  <label>Password</label>
                  <div className="relative">
                    <input className="w-full" placeholder="Ex. Jonathan" />
                    <svg className="a absolute right-8 cursor-pointer top-8" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.00002 0.643555C11.5947 0.643555 14.5854 3.23022 15.2127 6.64355C14.586 10.0569 11.5947 12.6436 8.00002 12.6436C4.40535 12.6436 1.41469 10.0569 0.787354 6.64355C1.41402 3.23022 4.40535 0.643555 8.00002 0.643555ZM8.00002 11.3102C9.35967 11.3099 10.6789 10.8481 11.7419 10.0003C12.8049 9.15257 13.5486 7.96907 13.8514 6.64355C13.5475 5.31909 12.8033 4.13689 11.7404 3.29024C10.6776 2.44359 9.35889 1.98257 8.00002 1.98257C6.64115 1.98257 5.32248 2.44359 4.2596 3.29024C3.19673 4.13689 2.45253 5.31909 2.14869 6.64355C2.45142 7.96907 3.19514 9.15257 4.25812 10.0003C5.3211 10.8481 6.64037 11.3099 8.00002 11.3102ZM8.00002 9.64355C7.20437 9.64355 6.44131 9.32748 5.8787 8.76488C5.31609 8.20227 5.00002 7.4392 5.00002 6.64355C5.00002 5.84791 5.31609 5.08484 5.8787 4.52223C6.44131 3.95963 7.20437 3.64355 8.00002 3.64355C8.79567 3.64355 9.55873 3.95963 10.1213 4.52223C10.6839 5.08484 11 5.84791 11 6.64355C11 7.4392 10.6839 8.20227 10.1213 8.76488C9.55873 9.32748 8.79567 9.64355 8.00002 9.64355ZM8.00002 8.31022C8.44205 8.31022 8.86597 8.13463 9.17853 7.82207C9.49109 7.50951 9.66669 7.08558 9.66669 6.64355C9.66669 6.20153 9.49109 5.7776 9.17853 5.46504C8.86597 5.15248 8.44205 4.97689 8.00002 4.97689C7.55799 4.97689 7.13407 5.15248 6.82151 5.46504C6.50895 5.7776 6.33335 6.20153 6.33335 6.64355C6.33335 7.08558 6.50895 7.50951 6.82151 7.82207C7.13407 8.13463 7.55799 8.31022 8.00002 8.31022Z"
                        fill="#FCAC0D"
                      />
                    </svg>
                  </div>
                </div>
                <div className="form-group col-span-2">
                  <label>Confirm Password</label>
                  <div className="relative">
                    <input className="w-full" placeholder="Ex. Jonathan" />
                    <svg className="a absolute right-8 cursor-pointer top-8" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.00002 0.643555C11.5947 0.643555 14.5854 3.23022 15.2127 6.64355C14.586 10.0569 11.5947 12.6436 8.00002 12.6436C4.40535 12.6436 1.41469 10.0569 0.787354 6.64355C1.41402 3.23022 4.40535 0.643555 8.00002 0.643555ZM8.00002 11.3102C9.35967 11.3099 10.6789 10.8481 11.7419 10.0003C12.8049 9.15257 13.5486 7.96907 13.8514 6.64355C13.5475 5.31909 12.8033 4.13689 11.7404 3.29024C10.6776 2.44359 9.35889 1.98257 8.00002 1.98257C6.64115 1.98257 5.32248 2.44359 4.2596 3.29024C3.19673 4.13689 2.45253 5.31909 2.14869 6.64355C2.45142 7.96907 3.19514 9.15257 4.25812 10.0003C5.3211 10.8481 6.64037 11.3099 8.00002 11.3102ZM8.00002 9.64355C7.20437 9.64355 6.44131 9.32748 5.8787 8.76488C5.31609 8.20227 5.00002 7.4392 5.00002 6.64355C5.00002 5.84791 5.31609 5.08484 5.8787 4.52223C6.44131 3.95963 7.20437 3.64355 8.00002 3.64355C8.79567 3.64355 9.55873 3.95963 10.1213 4.52223C10.6839 5.08484 11 5.84791 11 6.64355C11 7.4392 10.6839 8.20227 10.1213 8.76488C9.55873 9.32748 8.79567 9.64355 8.00002 9.64355ZM8.00002 8.31022C8.44205 8.31022 8.86597 8.13463 9.17853 7.82207C9.49109 7.50951 9.66669 7.08558 9.66669 6.64355C9.66669 6.20153 9.49109 5.7776 9.17853 5.46504C8.86597 5.15248 8.44205 4.97689 8.00002 4.97689C7.55799 4.97689 7.13407 5.15248 6.82151 5.46504C6.50895 5.7776 6.33335 6.20153 6.33335 6.64355C6.33335 7.08558 6.50895 7.50951 6.82151 7.82207C7.13407 8.13463 7.55799 8.31022 8.00002 8.31022Z"
                        fill="#FCAC0D"
                      />
                    </svg>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActive("gotmail");
                  }}
                  className="btn col-span-2 mt-[6.8rem]"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}
        {active == "gotmail" && (
          <GotMail
            action={() => {
              setActive("otp");
            }}
          />
        )}
        {active == "otp" && (
          <OTP
            action={() => {
              setActive("otp");
            }}
          />
        )}
      </main>
    </div>
  );
};

export default resetPassword;
