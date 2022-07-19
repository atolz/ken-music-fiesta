import React from "react";
import Image from "next/image";

const PartnersCard = ({ title = "Food Partners", img = "/the-place.png" }) => {
  return (
    <div className="gradient-border-bg min-h-[15rem] rounded-primary !border-2 p-[4rem] py-[5.5rem] grid place-items-center max-h-[32.6rem] max-w-[36.3rem] min-w-[20rem] hover:scale-[1.01]">
      <p className=" text-[2.2rem] font-medium mb-[4.8rem]">{title}</p>
      {/* <Image src={img} height={110} width={186} alt="parallex"></Image> */}
      <img src={img} height={110} alt="parallex"></img>
    </div>
  );
};

export default PartnersCard;
