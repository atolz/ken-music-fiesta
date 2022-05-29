import React from "react";
import Link from "next/link";

const AuthStatus = ({
  status,
  title = "Ticket Verified",
  caption = "Your ticket numbers has been successfully verified and you will receive an sms shortly.",
  action = () => {},
  actionText,
  link,
  linkText = "linkText",
}) => {
  return (
    <div className="auth-container !mb-[10rem]">
      <div className="grid place-items-center text-center">
        {status == "success" && <img src="/success.svg" className="mb-[7rem]"></img>}
        {status == "failed" && <img src="/failed.svg" className="mb-[7rem]"></img>}
        <h3 className="text-[3.2rem] text-white leading-[3.9rem] font-bold mb-[1.4rem]">{title}</h3>
        {status == "success" && <p className="mb-[5.8rem] !text-center font-medium text-[1.6rem] leading-[2.6rem] max-w-[42.7rem]">{caption}</p>}
        {status == "failed" && (
          <p className="mb-[5.8rem] !text-center font-medium text-[1.6rem] leading-[2.6rem] max-w-[42.7rem]">
            {" "}
            Your ticket numbers has been used. Please check the number and try again or contact merchant.
          </p>
        )}

        {actionText && (
          <button
            onClick={() => {
              action();
            }}
            className="btn text-black mb-[3rem] !w-full"
          >
            {actionText}
          </button>
        )}

        {link && (
          <Link href={link}>
            <a className="text-[1.7rem] font-bold text-[#FCAC0D] underline">{linkText}</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthStatus;
