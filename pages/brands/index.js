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
            <span className="text-grad font-bold text-[2.6rem] mb-[4.6rem] inline-block">Brand Partners</span>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,32rem))] gap-[4.8rem] justify-center sidebar:justify-start">
              <PartnersCard title="The Place"></PartnersCard>
              <PartnersCard title="Goldmyne TV" img="/brand/@GoldmyneTV.jpg"></PartnersCard>
              <PartnersCard title="The Beat Fm" img="/brand/the beat 999 fm logo.jpg"></PartnersCard>
              <PartnersCard title="Yebox Technologies" img="https://www.knight.ventures/static/media/yebox.6dbf75a8175fce11ea09c941b77df661.svg"></PartnersCard>
              <PartnersCard title="Ray Power" img="/Media/raypower_logo_1.jpg"></PartnersCard>
              <PartnersCard title="Kraks TV" img="/brand/@KraksTV.png"></PartnersCard>
              <PartnersCard title="Kudibar" img="https://www.kudibar.com/_nuxt/img/logo.056a8d6.png"></PartnersCard>
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
              <PartnersCard title="Primetime Africa" img={"Media/Primetime Africa logo - ALPHA.png"}></PartnersCard>
              <PartnersCard title="AIT" img={"ait.png"}></PartnersCard>
              <PartnersCard title="Ontv" img={"Media/Ontv-logo.jpg"}></PartnersCard>
              <PartnersCard title="Wazobia Max" img={"Media/Wazobia Max.jpg"}></PartnersCard>
              <PartnersCard title="NLRC" img={"Media/National-Lottery-Regulatory-Commission-logo.png"}></PartnersCard>
            </div>
          </section>
          {/* Music Partners Section */}
          <section className="mb-[8.7rem]">
            <span className="text-grad font-bold text-[2.6rem] mb-[5.6rem] inline-block">Affiliate Partners</span>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,32rem))] gap-[4.8rem] justify-center sidebar:justify-start">
              <PartnersCard type="artiste" title="Kenny Ogungbe" img={"partners/@kennyogungbe.jpg"}></PartnersCard>
              <PartnersCard type="artiste" title="Dayo Adeneye" img={"partners/@Dayod1Adeneye.jpe"}></PartnersCard>
              <PartnersCard type="artiste" title="Korede Bello" img={"partners/@KoredeBello.jpg"}></PartnersCard>
              <PartnersCard type="artiste" title="Emajor_Official" img={"partners/@Emajor_Official.jpg"}></PartnersCard>
              <PartnersCard type="artiste" title="Mr Macaroni" img={"partners/@MrMacaroni1.jpg"}></PartnersCard>
              <PartnersCard type="artiste" title="Wizkiddayo" img={"partners/@wizkiddayo.png"}></PartnersCard>
              <PartnersCard type="artiste" title="Joeel Kennis" img={"partners/@JoeelKennis.jpg"}></PartnersCard>
              <PartnersCard type="artiste" title="Danielle Yul Edochie" img={"partners/@DanielleYulEdochie.jpg"}></PartnersCard>
              <PartnersCard type="artiste" title="@Efe_Macroc" img={"partners/@Efe_Macroc.jpg"}></PartnersCard>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

Brands.Layout = LandPageLayout;
export default Brands;
