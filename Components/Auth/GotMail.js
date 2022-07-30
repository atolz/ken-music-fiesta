import React from "react";
import Link from "next/link";

const GotMail = ({ link, text = "We sent you a mail to verify your account and continue your registration.", action = () => {}, children }) => {
  return (
    <div className="auth-container !mb-[10rem] !px-0 !py-0">
      <div className="auth-form grid place-items-center justify-center">
        <img className="mb-[5.8rem] mt-[8rem] w-full h-auto" width={221} height={164} src="/3d-mail.svg" />
        <h3 className="!mb-[1.4rem]">You’ve Got Mail</h3>
        <p onClick={() => action()} className="!text-center flex !mb-[5.8rem] w-[37.1rem]">
          {children ? children : text}
        </p>
        {/* <Link href={`${link}`}> */}
        {/* <a className="text-[1.7rem] font-bold text-[#FCAC0D] underline mb-[6rem]">Continue to verification</a> */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default GotMail;
