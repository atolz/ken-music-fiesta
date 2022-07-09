import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import LandPageLayout from "../../Components/Layout/LandPageLayout";
import { DataContext } from "../../Context/fetchData";

const Container = ({ children }) => {
  return <div className="max-w-[170rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
};

const Index = () => {
  const AppData = useContext(DataContext);
  let allCatalogues = AppData.allArtisteCatalogues.data;
  const artists = [
    {
      name: "Artist",
      img: "/user-artist.jpg",
      id: "1",
    },
    {
      name: "Adele",
      img: "/user-artist.jpg",
      // img: "/adele.jpg",
      id: "2",
    },
    {
      name: "Adele",
      img: "/user-grad (1).jpg",
      id: "4",
    },
    {
      name: "Artist",
      img: "/user-artist.jpg",
      id: "3",
    },
  ];
  return (
    <div className="grow-0 shrink overflow-y-scroll scroll_hide -translate-y-14">
      <Container>
        <div className="text-center">
          <div className="flex items-center justify-between mb-[9rem] mt-[6rem]">
            <h3 className=" font-bold text-[3.5rem] leading-[4.2rem] text-[#FA6BFF] ">Catalogue</h3>
            <div>
              <Link href={"/catalogues/create"}>
                <button className="btn ">Create Catalogue</button>
              </Link>
            </div>
          </div>

          <main className={`flex flex-wrap  items-center ${allCatalogues.length > 3 ? " justify-between gap-[16rem]" : " justify-center gap-96"}   mb-40`}>
            {allCatalogues.map((el, i) => {
              return (
                <Link href={`/catalogues/${el.uuid}`} key={i}>
                  <a className=" last:mr-auto">
                    <div className="flex flex-col">
                      <div className=" -skew-y-12 rounded-2xl h-[32.7rem] w-[23.4rem] hover:scale-105 transition-all yellow-shadow-hover overflow-hidden cursor-pointer flex">
                        {/* <Image className="object-cover overflow-hidden !skew-y-12 scale-[1.18]" layout="fixed" width={234} height={347} src={el.coverImage} alt={el.albumTitle}></Image> */}
                        <img className="object-cover bg-slate-800 overflow-hidden !skew-y-12 scale-[1.18]" layout="fixed" width={234} height={347} src={el.coverImage} alt={el.albumTitle}></img>
                        {/* </div> */}
                      </div>
                      <span className=" font-bold text-[2.5rem] leading-[3rem] mt-[4.6rem] text-white max-w-[20rem] text-ellipsis overflow-hidden">
                        0{++i}. {el.albumTitle}
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
