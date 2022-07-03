import React from "react";
import PopupLayout from "../Layout/Popup";
import Link from "next/link";

const PopupStatus = ({ status, title, text, link = "/dashboard", linkText = "Link text", action = () => {} }) => {
  return (
    <PopupLayout footer={false}>
      <div className="grid place-items-center text-center px-[1.2rem] sidebar:px-[10.2rem] pb-[3.2rem] pt-[2.8rem]">
        {status == "success" && <img src="/success.svg" className="mb-[7rem] h-[15rem]"></img>}
        {status == "failed" && <img src="/failed.svg" className="mb-[7rem] h-[15rem]"></img>}
        <h3 className="text-[3.2rem] text-black leading-[3.9rem] font-bold mb-[1.4rem]">{title}</h3>
        {status == "success" && <p className="mb-[5.8rem] !text-[#827F7F] !text-center font-medium text-[1.6rem] leading-[2.6rem] max-w-[39rem]">{text}</p>}
        {status == "failed" && (
          <p className="mb-[5.8rem] !text-center font-medium text-[1.6rem] leading-[2.6rem] max-w-[39rem]">
            {" "}
            Your ticket numbers has been used. Please check the number and try again or contact merchant.
          </p>
        )}
        <Link href={link}>
          <a onClick={action} className="text-[1.7rem] font-bold text-[#FCAC0D] underline cursor-pointer ">
            {linkText}
          </a>
        </Link>
      </div>
    </PopupLayout>
  );
};

export default PopupStatus;
