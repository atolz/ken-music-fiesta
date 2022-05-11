import React from "react";
import Image from "next/image";
import Link from "next/link";
import LandPageLayout from "../../Components/Layout/LandPageLayout";
import MusicPlayer from "../../Components/Pages/MusicPlayer";
import MusicPlayer2 from "../../Components/Pages/MusicPlayer2";

const Container = ({ children, twStyles }) => {
  return <div className={`max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem] ${twStyles}`}>{children}</div>;
};

const Details = () => {
  return (
    <div className="grow-0 shrink  scroll_hide mt-auto">
      <div className="bg-black w-full overflow-scroll sidebar:overflow-visible max-h-[70vh]  rounded-tl-[3rem] rounded-tr-[3rem] pt-[7.2rem] slide-up-now-opacity scroll_hide">
        <Container twStyles={"flex gap-[9.4rem] flex-wrap"}>
          <div className=" sidebar:-translate-y-[15.4rem] -skew-y-12 rounded-2xl h-[34.7rem] w-[23.4rem] hover:scale-105 transition-all yellow-shadow-hover overflow-hidden cursor-pointer flex">
            <Image className="object-cover overflow-hidden !skew-y-12 scale-[1.18]" layout="fixed" width={234} height={347} src={"/user-grad (1).jpg"} alt={"artist-name"}></Image>
          </div>
          <section className="flex-1">
            <div className="flex flex-wrap mb-[4.9rem] items-center justify-between">
              <h2 className="text-white font-bold text-[5rem] whitespace-nowrap mr-8">01. Artist</h2>
              <Link href={"/auth/sign-up"}>
                <button className="btn btn--outlined text-white  !inline-flex">View Catalogue</button>
              </Link>
            </div>
            {/* About */}
            <div className="mb-[4.8rem]">
              <h1 className="mb-[1.6rem] text-[#FCAC0D] font-bold text-[2.5rem]">About Artist</h1>
              <p className="text-[#C4C4C4] leading-[1.8rem] text-[1.2rem] font-normal pb-[4.8rem] border-b-[.3px] border-[#FCAC0D] max-w-[79.3rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel et sagittis, cursus pretium aliquam pharetra amet at. Sit at integer ut ante cursus justo, volutpat imperdiet. Ut rhoncus,
                orci nulla adipiscing pellentesque quam. Semper nec etiam viverra aliquam, purus turpis eu. Turpis lectus sit viverra feugiat. Morbi viverra senectus dictum mauris, id in velit fames
                morbi. Adipiscing orci quam ornare augue velit. Cras erat odio non sit. Massa quisque elementum, eget nisi, ut et non. Faucibus ut amet massa praesent suspendisse donec velit sit
                placerat. In praesent laoreet molestie id dui pretium. Adipiscing enim, in aliquet feugiat. Dictum diam urna dignissim auctor non in. In amet id adipiscing eget et ornare gravida quis.
                Dui nibh porta vitae gravida at quam elementum est sollicitudin maecenas sed.
              </p>
            </div>

            {/* Stream Artist Music */}
            <div className=" hidden sidebar:block">
              <MusicPlayer></MusicPlayer>
            </div>
            <div className=" block sidebar:hidden">
              <MusicPlayer2></MusicPlayer2>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

Details.Layout = LandPageLayout;
export default Details;
