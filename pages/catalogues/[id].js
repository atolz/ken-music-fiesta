import React from "react";
import Image from "next/image";
import Link from "next/link";
import LandPageLayout from "../../Components/Layout/LandPageLayout";

const Container = ({ children, twStyles }) => {
  return <div className={`max-w-[182rem] mx-auto w-full px-[2.2rem] table:px-[10rem] ${twStyles}`}>{children}</div>;
};

const Details = () => {
  return (
    <div className="grow-0 shrink  scroll_hide mt-auto">
      <div className="bg-black w-full overflow-scroll  max-h-[70vh]  rounded-tl-[3rem] rounded-tr-[3rem] pt-[7.2rem] slide-up-now-opacity scroll_hide">
        <Container twStyles={"flex gap-[9.4rem] flex-wrap"}>
          {/* <div className=" sidebar:-translate-y-[15.4rem] -skew-y-12 rounded-2xl h-[34.7rem] w-[23.4rem] hover:scale-105 transition-all yellow-shadow-hover overflow-hidden cursor-pointer flex"> */}
          <div className="  -skew-y-12 rounded-2xl h-[34.7rem] w-[23.4rem] hover:scale-105 transition-all yellow-shadow-hover overflow-hidden cursor-pointer flex">
            <Image className="object-cover overflow-hidden !skew-y-12 scale-[1.18]" layout="fixed" width={234} height={347} src={"/user-grad (1).jpg"} alt={"artist-name"}></Image>
          </div>
          <section className="flex-1">
            <div className="flex flex-wrap mb-[4.9rem] items-center justify-between">
              <h2 className="text-white font-bold text-[5rem] whitespace-nowrap mr-8">01. Artist</h2>
            </div>
            {/* About */}
            <div className="mb-[4.8rem]  max-w-[79.3rem]">
              <h1 className="mb-[1.6rem] text-[#FCAC0D] font-bold text-[2.5rem]">About Artist</h1>
              <p className="text-[#C4C4C4] leading-[1.8rem] text-[1.2rem] font-normal pb-[4.8rem] border-b-[.3px] border-[#FCAC0D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel et sagittis, cursus pretium aliquam pharetra amet at. Sit at integer ut ante cursus justo, volutpat imperdiet. Ut rhoncus,
                orci nulla adipiscing pellentesque quam. Semper nec etiam viverra aliquam, purus turpis eu. Turpis lectus sit viverra feugiat. Morbi viverra senectus dictum mauris, id in velit fames
                morbi. Adipiscing orci quam ornare augue velit. Cras erat odio non sit. Massa quisque elementum, eget nisi, ut et non. Faucibus ut amet massa praesent suspendisse donec velit sit
                placerat. In praesent laoreet molestie id dui pretium. Adipiscing enim, in aliquet feugiat. Dictum diam urna dignissim auctor non in. In amet id adipiscing eget et ornare gravida quis.
                Dui nibh porta vitae gravida at quam elementum est sollicitudin maecenas sed.
              </p>
            </div>

            {/* Scan code / Copy */}
            <div className="flex items-center gap-[2.5rem] text-white flex-wrap   max-w-[79.3rem] mb-[2rem]">
              <div className="btn btn--outlined p-[2.5rem] !flex items-center justify-around gap-[1.5rem] !h-auto flex-1">
                <p className=" font-extrabold text-[2.2rem] max-w-[13rem] leading-[2.6rem] !whitespace-normal ">Scan Code To Access Catalogue</p>
                <div
                  className=" grid place-items-center min-w-[10rem] max-w-[20.6rem] rounded-[.8rem] p-[.3rem] overflow-hidden"
                  style={{ backgroundImage: "url(/bar-code-box.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                >
                  <img className="h-full w-full" src="/bar-code.jpg"></img>
                </div>
              </div>
              <div className="flex-1 sidebar:flex-grow-0">
                <p className=" font-bold text-[1.4rem] mb-[2.5rem] text-center hdr:text-left">Or copy URL Code</p>
                <button className="btn btn--outlined !flex !items-center !justify-between !py-[1.5rem] px-[2rem] gap-[2rem] !h-auto !w-full">
                  <span className=" font-bold text-[1.7rem] overflow-hidden text-ellipsis !whitespace-normal">XW25Y5XQKBL2FUUVUEMQ</span>
                  <div className="bg-[#FCAC0D] grid place-items-center rounded-[4px] ">
                    <img className="m-[1rem] flex" src="/copy-2.svg"></img>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

Details.Layout = LandPageLayout;
export default Details;
