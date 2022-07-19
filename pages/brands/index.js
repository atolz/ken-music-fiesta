import React from "react";
import LandPageLayout from "../../Components/Layout/LandPageLayout";
import Image from "next/image";
import PartnersCard from "../../Components/Cards/Partners";

const Brands = () => {
  return (
    <div className="grow-0 shrink overflow-y-scroll scroll_hide">
      <div className="  max-w-[182rem]  mx-auto mb-48 px-[2rem] sidebar:px-[10rem]">
        <h3 className=" font-bold text-[3.5rem] leading-[4.2rem] text-[#FA6BFF] mb-[6.8rem] mr-auto ">Partners</h3>
        {/* <div className="grid sidebar:grid-cols-4 grid-cols-3 gap-[8rem] sidebar:gap-[10rem]"> */}
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,32rem))] gap-[4.8rem]  max-h-[50vh] ">
          <PartnersCard></PartnersCard>
          <PartnersCard title="Financial Partner" img={"https://www.nigeriacommunicationsweek.com.ng/wp-content/uploads/2022/01/parallex.jpg"}></PartnersCard>
          <PartnersCard img={"https://upload.wikimedia.org/wikipedia/commons/f/ff/Kentucky_Fried_Chicken_201x_logo.svg"}></PartnersCard>
          {/* <PartnersCard></PartnersCard> */}
          {/* <PartnersCard></PartnersCard> */}
          {/* <Image src="/the-place.png" height={86} width={183} alt="parallex"></Image>
          <Image src="/parallex.jpg" height={86} width={183} alt="parallex"></Image>
          <Image src="/the-place.png" height={86} width={183} alt="parallex"></Image>
          <Image src="/parallex.jpg" height={86} width={183} alt="parallex"></Image>
          <Image src="/the-place.png" height={86} width={183} alt="parallex"></Image>
          <Image src="/parallex.jpg" height={86} width={183} alt="parallex"></Image>
          <Image src="/the-place.png" height={86} width={183} alt="parallex"></Image>
          <Image src="/parallex.jpg" height={86} width={183} alt="parallex"></Image> */}
        </div>
      </div>
    </div>
  );
};

Brands.Layout = LandPageLayout;
export default Brands;
