import React from "react";
import Image from "next/image";

const Catalogue = () => {
  const data = [
    { name: "Concert Mix", year: "2022", image: "/acoustic-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/feelings-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/acoustic-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/concert-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/feelings-mix.jpg" },
    { name: "Concert Mix", year: "2022", image: "/feelings-mix.jpg" },
  ];
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
      {data.length >= 4 && (
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] table:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-[2.2rem]">
          {/* <section className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] table:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(20rem,_25rem))] gap-[2.2rem]"> */}
          {data.map((el, i) => {
            return (
              <div key={i}>
                {/* <Image width={194} height={185} src={el.image}></Image> */}
                <img className="w-full" src={el.image}></img>
                <p className="mt-[2.4rem] font-bold text-[2rem] mb-[5px]">Concert Mix</p>
                <p className=" font-semibold text-[1.6rem] text-[#BDBCBC]">2022</p>
              </div>
            );
          })}
        </section>
      )}

      {/* Just style differencee based on the lenght of the data to prevent weird UI look */}
      {data.length < 4 && (
        // <section className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] table:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-[2.2rem]">
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] table:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] xl:!grid-cols-[repeat(auto-fit,_minmax(20rem,_25rem))] gap-[2.2rem]">
          {data.map((el, i) => {
            return (
              <div key={i}>
                {/* <Image width={194} height={185} src={el.image}></Image> */}
                <img className="w-full" src={el.image}></img>
                <p className="mt-[2.4rem] font-bold text-[2rem] mb-[5px]">Concert Mix</p>
                <p className=" font-semibold text-[1.6rem] text-[#BDBCBC]">2022</p>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Catalogue;
