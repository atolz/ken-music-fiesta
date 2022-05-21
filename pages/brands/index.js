import React from "react";
import LandPageLayout from "../../Components/Layout/LandPageLayout";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="grow-0 shrink overflow-y-scroll scroll_hide">
      <div className=" max-w-[111.5rem] mx-auto mb-48 px-5">
        <h3 className=" font-bold text-[3.5rem] leading-[4.2rem] text-[#FCAC0D] text-center mb-[6.8rem]">Brands</h3>
        {/* <div className="grid sidebar:grid-cols-4 grid-cols-3 gap-[8rem] sidebar:gap-[10rem]"> */}
        <div className="flex flex-wrap gap-[10rem] justify-center">
          <Image src="/the-place.png" height={86} width={183} alt="parallex"></Image>
          <Image src="/parallex.jpg" height={86} width={183} alt="parallex"></Image>
          <Image src="/the-place.png" height={86} width={183} alt="parallex"></Image>
          <Image src="/parallex.jpg" height={86} width={183} alt="parallex"></Image>
          <Image src="/the-place.png" height={86} width={183} alt="parallex"></Image>
          <Image src="/parallex.jpg" height={86} width={183} alt="parallex"></Image>
          <Image src="/the-place.png" height={86} width={183} alt="parallex"></Image>
          <Image src="/parallex.jpg" height={86} width={183} alt="parallex"></Image>
        </div>
      </div>
    </div>
  );
};

Brands.Layout = LandPageLayout;
export default Brands;
