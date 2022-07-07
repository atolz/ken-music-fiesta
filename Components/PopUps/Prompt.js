import React from "react";
import PopupLayout from "../Layout/Popup";
import Link from "next/link";

const Prompt = ({ title, desc, imgUrl, onAction = () => {} }) => {
  return (
    <PopupLayout footer={false}>
      <div className="grid place-items-center text-center px-[1.2rem] sidebar:px-[2.2rem] pb-[1.2rem] pt-[.8rem]">
        <img src={imgUrl} className="mb-[4rem] h-[15rem]" />

        <h3 className="text-[2.8rem] text-black leading-[3.9rem] font-bold mb-[.8rem]">{title}</h3>
        <p className="mb-[5rem] !text-[#827F7F] !text-center font-medium text-[1.6rem] leading-[2.6rem] max-w-[44.7rem]">{desc}</p>

        <button
          onClick={() => {
            onAction();
          }}
          className="btn w-full"
        >
          Continue
        </button>
      </div>
    </PopupLayout>
  );
};

export default Prompt;
