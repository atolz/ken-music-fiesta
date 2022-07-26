import React from "react";
import LandPageLayout from "../../Components/Layout/LandPageLayout";
import Image from "next/image";
import PartnersCard from "../../Components/Cards/Partners";

const Brands = () => {
  return (
    <div className="grow-0 shrink overflow-y-scroll scroll_hide">
      <div className="  max-w-[182rem]  mx-auto mb-48 px-[2rem] sidebar:px-[10rem]">
        {/* <h3 className=" font-bold text-[3.5rem] leading-[4.2rem] text-[#FA6BFF] mb-[6.8rem] mr-auto ">Partners</h3> */}
        {/* <div className="grid sidebar:grid-cols-4 grid-cols-3 gap-[8rem] sidebar:gap-[10rem]"> */}
        <div className=" mt-[6rem]">
          {/* Affiliate Partners Section */}
          <section className="mb-[8.7rem]">
            <span className="text-grad font-bold text-[2.6rem] mb-[4.6rem] inline-block">Affiliate Partners</span>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,32rem))] gap-[4.8rem] justify-center sidebar:justify-start">
              <PartnersCard title="The Place"></PartnersCard>
              <PartnersCard title="Parallex Bank" img={"https://www.nigeriacommunicationsweek.com.ng/wp-content/uploads/2022/01/parallex.jpg"}></PartnersCard>
              {/* <PartnersCard img={"https://upload.wikimedia.org/wikipedia/commons/f/ff/Kentucky_Fried_Chicken_201x_logo.svg"}></PartnersCard> */}
            </div>
          </section>
          {/* Media Partners Section */}
          <section className="mb-[8.7rem]">
            <span className="text-grad font-bold text-[2.6rem] mb-[5.6rem] inline-block">Media Partners</span>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,32rem))] gap-[4.8rem] justify-center sidebar:justify-start">
              <PartnersCard title="Cool FM" img={"cool-fm.png"}></PartnersCard>
              <PartnersCard title="Sound City" img={"sound-city.png"}></PartnersCard>
              <PartnersCard title="AIT" img={"ait.png"}></PartnersCard>
            </div>
          </section>
          {/* Music Partners Section */}
          <section className="mb-[8.7rem]">
            <span className="text-grad font-bold text-[2.6rem] mb-[5.6rem] inline-block">Music Partners</span>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,32rem))] gap-[4.8rem] justify-center sidebar:justify-start">
              <PartnersCard type="artiste" title="Artiste 2" img={"performing.jpg"}></PartnersCard>
              <PartnersCard type="artiste" title="Artiste 2" img={"/user-img.jpg"}></PartnersCard>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

Brands.Layout = LandPageLayout;
export default Brands;
