import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import MusicPlayer from "../MusicPlayer";
import MusicPlayer2 from "../MusicPlayer2";
import MusicPlayerV2 from "../MusicPlayer-v2";
import { popUpContext } from "../../../Context/PopUps";
import { DataContext } from "../../../Context/fetchData";

const Container = ({ children, twStyles }) => {
  return <div className={`max-w-[182rem] mx-auto w-full px-[2.2rem] table:px-[10rem] ${twStyles}`}>{children}</div>;
};

const Catalogue = () => {
  const data = [
    { name: "Concert Mix", year: "2022", image: "/acoustic-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/feelings-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/acoustic-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/concert-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/feelings-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/feelings-mix.jpg" },
  ];
  const AppData = useContext(DataContext);
  const artisteCatalogues = AppData.artistesUser.catalogues;
  const [showDetails, setShowDetails] = useState(false);
  const popUpFunctions = useContext(popUpContext);
  const [activeCatalogue, setActiveCatalogue] = useState({});

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    showDetails ? setShowDetails(false) : setShowDetails(true);
  };

  useEffect(() => {
    console.log("artiste catalogue is...,,,,,>>>", artisteCatalogues);
  }, [artisteCatalogues]);

  return (
    <div>
      <div className="flex gap-[3.2rem] mb-[4rem]">
        <button onClick={() => {}} className="btn !py-[2.2rem] !px-[6rem]">
          Albums
        </button>
        <button onClick={() => {}} className="btn !py-[2.2rem] !px-[6rem] !bg-[#F0F0F0]">
          Tracks
        </button>
      </div>

      {/* Cards */}
      {/* <section className="grid !grid-cols-[repeat(auto-fit,_minmax(20rem,_25rem))] gap-[1rem]"> */}
      {/* <section className="grid !grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-[2.2rem]"> */}
      {artisteCatalogues.length >= 4 && (
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] table:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-[2.2rem]">
          {/* <section className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] table:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(20rem,_25rem))] gap-[2.2rem]"> */}
          {artisteCatalogues.map((el, i) => {
            return (
              <div
                onClick={() => {
                  setShowDetails(true);
                  setActiveCatalogue(artisteCatalogues[i]);
                }}
                key={i}
              >
                {/* <Image width={194} height={185} src={el.image}></Image> */}
                <img className="w-full" src={el.coverImage}></img>
                <p className="mt-[2.4rem] font-bold text-[2rem] mb-[5px]">{el.albumTitle}</p>
                <p className=" font-semibold text-[1.6rem] text-[#BDBCBC]">{el.yearOfRelease}</p>
              </div>
            );
          })}
        </section>
      )}

      {/* Just style differencee based on the lenght of the data to prevent weird UI look */}
      {artisteCatalogues.length < 4 && (
        // <section className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] table:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-[2.2rem]">
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] table:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(20rem,_25rem))] gap-[2.2rem]">
          {artisteCatalogues.map((el, i) => {
            return (
              <div
                onClick={() => {
                  setShowDetails(true);
                  setActiveCatalogue(artisteCatalogues[i]);
                }}
                key={i}
              >
                {/* <Image width={194} height={185} src={el.image}></Image> */}
                <img className="w-full" src={el.coverImage}></img>
                <p className="mt-[2.4rem] font-bold text-[2rem] mb-[5px]">{el.albumTitle}</p>
                <p className=" font-semibold text-[1.6rem] text-[#BDBCBC]">{el.yearOfRelease}</p>
              </div>
            );
          })}
        </section>
      )}

      <Drawer sx={{ maxWidth: "600px", marginLeft: "auto", "& .MuiDrawer-paper": { borderRadius: "3rem 3rem 0 0", minHeight: "642px" } }} anchor={"bottom"} open={showDetails} onClose={toggleDrawer()}>
        <div className="w-ful  max-h-[70vh]  rounded-tl-[3rem] rounded-tr-[3rem] pt-[5.2rem] ">
          <Container twStyles={"flex gap-[9.4rem] flex-wrap"}>
            {/* <div className=" sidebar:-translate-y-[15.4rem] -skew-y-12 rounded-2xl h-[34.7rem] w-[23.4rem] hover:scale-105 transition-all yellow-shadow-hover overflow-hidden cursor-pointer flex"> */}
            <div className=" relative  rounded-2xl h-[26.7rem] w-[25.4rem] hover:scale-105 transition-all yellow-shadow-hover overflow-hidden cursor-pointer flex yellow-shadow">
              <Image className="object-cover overflow-hidden  scale-[1.18]" layout="fill" src={"/user-grad (1).jpg"} alt={"artist-name"}></Image>
            </div>
            <section className="flex-1 max-w-[80rem]">
              <div className="flex flex-wrap mb-[4.9rem] items-center justify-between border-b pb-[2.7rem]">
                <div>
                  <h2 className="text-[#252626] font-bold text-[5rem] mb-[1.3rem] leading-[4.8rem] whitespace-nowrap mr-8">{activeCatalogue.albumTitle}</h2>
                  <div className="flex flex-wrap gap-[1.6rem] max-w-[50rem]">
                    <p className=" font-normal text-[1.3rem] text-[#bdbcbc9c]">
                      Album - <span className=" font-bold text-[1.3rem] text-[#BDBCBC]">{activeCatalogue.albumTitle}</span>
                    </p>
                    <p className=" font-normal text-[1.3rem] text-[#bdbcbc9c]">
                      Year of release - <span className=" font-bold text-[1.3rem] text-[#BDBCBC]">{activeCatalogue.yearOfRelease}</span>
                    </p>
                  </div>
                  <p className=" font-normal text-[1.3rem] text-[#bdbcbc9c] mt-[1.6rem]">
                    Record Label - <span className=" font-bold text-[1.3rem] text-[#BDBCBC]">Gang Bangers</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    popUpFunctions.initEditCatalogue();
                  }}
                  className="btn btn--outlined text-[#252626]  !inline-flex"
                >
                  Edit Catalogue
                </button>
              </div>

              {/* Stream Artist Music */}
              <div className=" hidden sidebar:block">
                {/* <MusicPlayer></MusicPlayer> */}
                <MusicPlayerV2></MusicPlayerV2>
              </div>
              <div className=" block sidebar:hidden">
                <MusicPlayer2></MusicPlayer2>
              </div>
            </section>
          </Container>
        </div>
      </Drawer>
    </div>
  );
};

export default Catalogue;
