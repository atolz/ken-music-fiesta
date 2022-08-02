import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import LandPageLayout from "../../Components/Layout/LandPageLayout";
import { DataContext } from "../../Context/fetchData";
import animations from "./artistesAnim.module.css";

const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
};

const Index = () => {
  // const artists = [
  //   {
  //     name: "Artist",
  //     img: "/user-artist.jpg",
  //     id: "1",
  //   },
  //   {
  //     name: "Adele",
  //     img: "/user-artist.jpg",
  //     // img: "/adele.jpg",
  //     id: "2",
  //   },
  //   {
  //     name: "Adele",
  //     img: "/user-grad (1).jpg",
  //     id: "4",
  //   },
  //   {
  //     name: "Artist",
  //     img: "/user-artist.jpg",
  //     id: "3",
  //   },
  // ];
  const AppData = useContext(DataContext);
  const { artistes } = AppData;
  const data = [
    { name: "Korede Bello", img: "@KoredeBello.jpg" },
    { name: "Joeel Kennis", img: "@JoeelKennis.jpg" },
    { name: "Mr Macaroni", img: "@MrMacaroni1.jpg" },
    { name: "Emajor_Official", img: "@Emajor_Official.jpg" },
    { name: "DJ Ckillz", img: "@DJCkillz.jpg" },
    { name: "Efe Macroc", img: "@Efe_Macroc.jpg" },
    { name: "Nasty Blaq", img: "@NastyBlaq.jpg" },
  ];

  useEffect(() => {
    console.log("object hash is...", artistes.hash);
  }, [artistes]);
  return (
    <div className="grow-0 shrink overflow-y-scroll scroll_hide">
      <Container>
        <div className="text-center">
          <h3 className=" font-bold text-[3.5rem] leading-[4.2rem] text-[#FA6BFF] mb-[9rem] mt-[8rem]">Meet the Artistes</h3>
          {/* <main className={`flex flex-wrap  items-center ${data.length > 3 ? " justify-center sidebar:justify-between gap-[16rem]" : " justify-center gap-96"}   mb-40`}> */}
          <main className={`grid grid-cols-[repeat(auto-fit,minmax(20rem,_30rem))] justify-center sidebar:justify-between gap-[10rem]`}>
            {data.map((el, i) => {
              return (
                <Link href={`/artistes/`} key={++i}>
                  <a style={{ "--Id": i }} className={`  ${animations.slide_up}`}>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#1B1B1B] -skew-y-12 rounded-2xl h-[34.7rem] w-[23.4rem] hover:scale-105 transition-all yellow-shadow-hover overflow-hidden cursor-pointer grid place-items-center">
                        <div
                          style={{ backgroundImage: `url(partners/${el.img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "top" }}
                          className=" h-full w-full skew-y-12 scale-[1.18] "
                        >
                          {/* <Image className="object-contain !skew-y-12 scale-[1.18]" layout="fixed" width={53} height={110} src={`/partners/${el.img}`} alt={el.name}></Image> */}
                          {/* <img className="object-contain !skew-y-12 scale-[1.18]" layout="fixed" width={53} height={110} src={`partners/${el.img}`} alt={el.name}></img> */}
                        </div>
                      </div>
                      <span className=" font-bold text-[2.5rem] leading-[3rem] mt-[4.6rem] text-white">
                        0{++i}. {el.name}
                      </span>
                    </div>
                  </a>
                </Link>
              );
            })}
          </main>
        </div>
      </Container>
    </div>
  );
};

Index.Layout = LandPageLayout;
export default Index;
