import React, { useState } from "react";
import Image from "next/image";
import { Drawer } from "@mui/material";
import Link from "next/link";


const Container = ({ children, twStyles }) => {
  return <div className={`max-w-[182rem] mx-auto w-full px-[2.2rem] table:px-[10rem] ${twStyles}`}>{children}</div>;
};

const PartnersCard = ({ title = "Food Partners", img = "/the-place.png", className, type = "brand", about }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    showDetails ? setShowDetails(false) : setShowDetails(true);
  };
  return (
    <>
      <Drawer
        // hideBackdrop={true}
        classes="!bg-black"
        sx={{
          marginLeft: "auto",
          "& .MuiBackdrop-root": {
            opacity: ".2 !important",
            // backgroundImage: "url(bg-home-min.png)",
          },
          "& .MuiDrawer-paper": { borderRadius: "8rem 8rem 0 0", minHeight: "65vh", maxWidth: "100% !important", marginLeft: "auto", background: "black" },
        }}
        anchor={"bottom"}
        open={showDetails}
        onClose={toggleDrawer()}
      >
        <div className="w-ful  max-h-[70vh]  rounded-tl-[3rem] rounded-tr-[3rem] pt-[5.2rem] ">
          <Container twStyles={"flex gap-[9.4rem] flex-wrap"}>
            <div className=" relative   rounded-2xl  w-[31rem] transition-all  overflow-hidden cursor-pointer flex ">
              <div
                style={{ background: "linear-gradient(#151515,#151515) padding-box, var(--color-primary-grad) border-box" }}
                className={` gradient-border-bg min-h-[24.9rem] rounded-primary !border-solid !border-transparent !border-0 !border-b-[8px] p-[4rem] py-[5.5rem] grid place-items-center max-h-[24.6rem] w-full min-w-[20rem] hover:scale-[1.01] cursor-pointer ${className}`}
              >
                {/* <Image src={img} height={110} width={186} alt="parallex"></Image> */}
                <img className=" w-full h-auto max-h-[110px] object-contain" src={img} height={110} width={197} alt="parallex"></img>
              </div>
            </div>

            <section className="flex-1 max-w-[645px]">
              <div className="flex flex-wrap mb-[4.9rem] items-center justify-between">
                <h2 className="text-white font-bold text-[5rem] whitespace-nowrap mr-8">{title}</h2>
                <p className=" text-[14px] font-normal text-white">
                  For more information, visit{" "}
                  <a target="_blank" href="https://theplace.com.ng/" rel="noopener noreferrer">
                    <span className=" font-bold text-primary cursor-pointer">www.theplace.com.ng</span>
                  </a>

                </p>
              </div>
              <p className=" text-[14px] font-light text-white leading-[22px] max-w-[645px]">
                {about ||
                  "The Place is a proudly Nigerian company, operating in the hospitality sectors of the Nigerian economy. The brand is one of the business units operated by Smackers Ltd and has operational presence via multiple outlets, across different states in Nigeria."}
              </p>
              <p className=" text-[14px] font-normal text-white mt-[1.5rem] leading-[22px] max-w-[645px]">
                {title + " is our official food partner. "}
                <span className=" font-bold  cursor-pointer">Purchase any item worth N4,000 and get a free raffle ticket to stand a chance of winning in our weekly raffle draw.</span>
              </p>
            </section>
          </Container>
        </div>
      </Drawer>
      {type != "artiste" && (
        <div
          onClick={() => {

            if (title == "The Place") {
              setShowDetails(true);
            }

          }}
        >
          <div
            style={{ background: "linear-gradient(#151515,#151515) padding-box, var(--color-primary-grad) border-box" }}
            className={` gradient-border-bg min-h-[24.9rem] rounded-primary !border-solid !border-transparent !border-0 !border-b-[8px] p-[4rem] py-[5.5rem] grid place-items-center max-h-[32.6rem] max-w-[36.3rem] min-w-[20rem] hover:scale-[1.01] cursor-pointer ${className}`}
          >
            {/* <Image src={img} height={110} width={186} alt="parallex"></Image> */}
            <img className="max-w-[19.7rem] object-contain w-full h-auto max-h-[110px]" src={img} height={110} width={197} alt="parallex"></img>
          </div>
          <p className=" text-[3rem] font-bold mt-[3.2rem] text-white text-center">{title}</p>
        </div>
      )}
      {type == "artiste" && (
        <div>
          <div
            style={{ background: "linear-gradient(#151515,#151515) padding-box, var(--color-primary-grad) border-box", backgroundImage: `url(${img})` }}
            className={` gradient-border-bg min-h-[400px] rounded-primary !border-solid !border-transparent !bg-center !border-0 !border-b-[8px] p-[4rem] py-[5.5rem] grid place-items-center max-w-[36.3rem] !bg-no-repeat !bg-cover min-w-[20rem] hover:scale-[1.01] ${className}`}
          ></div>
          <p className=" text-[3rem] font-bold mt-[3.2rem] text-white text-center">{title}</p>
        </div>
      )}
    </>
  );
};

export default PartnersCard;
