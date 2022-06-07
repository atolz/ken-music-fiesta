import React, { useEffect, useState } from "react";

const TracksUploadedTable = ({ data }) => {
  const [songs, setSongs] = useState(data);

  useEffect(() => {
    console.log("All SOngtaracaks i n table is", data);
    setSongs(data);
  }, [data]);

  return (
    // <div className="rounded-[2rem] bg-white min-w-[52rem] min-h-[48.3rem] h-max default-shadow flex flex-col overflow-hidden">
    <div className="rounded-[2rem] bg-white flex-grow min-h-[48.3rem] h-max default-shadow flex flex-col overflow-hidden min-w-max">
      {/* Table Head */}
      <div className="px-[2rem] mobile:px-[4.2rem] py-[3rem] flex items-center">
        <h3 className="font-bold text-black text-[2.1rem] leading-[2.1rem]">Tracks Uploaded</h3>
        <button className="h-[3.7rem] rounded-[1rem] py-[1rem] px-[1.4rem] font-bold border border-black leading-[1.7rem] ml-auto text-[1.4rem] bg-[#F0F0F0]">Prev</button>
        <button className="h-[3.7rem] rounded-[1rem] py-[1rem] px-[1.4rem] font-bold border border-black leading-[1.7rem] ml-auto text-[1.4rem] bg-[#F0F0F0] ml-[.89rem]">Next</button>
      </div>
      {/* Table Body */}

      {songs && (
        <div className="body px-[2rem] mobile:px-[4.2rem] pb-[3rem]">
          {/* row */}
          {songs?.map((track, i) => {
            return (
              <div key={i} className="grid grid-cols-[.5fr_auto_1fr_1fr_2fr] pb-[1.6rem] text-[#706C6C] rounded-[2rem] leading-[2.1rem] text-[1.8rem]">
                <span className="font-medium text-[1.3rem] ">0{++i}</span>
                <span className="font-medium text-[1.3rem]  mx-auto mr-auto max-w-[20rem] overflow-hidden text-ellipsis whitespace-nowrap">{track.name}</span>
                <span className="font-medium text-[1.3rem] mx-auto px-2 overflow-hidden text-ellipsis whitespace-nowrap">Artist 1</span>
                <span className="font-medium text-[1.3rem] mx-auto  overflow-hidden text-ellipsis whitespace-nowrap px-3">1:30</span>
                <span className="font-medium text-[1.3rem] ml-auto overflow-hidden text-ellipsis whitespace-nowrap max-w-[20rem] ">{track.albumTitle}</span>
              </div>
            );
            {
              /* end row */
            }
          })}
        </div>
      )}

      {/* No winners yet */}
      {!songs && (
        <div className="grid flex-1 place-content-center place-items-center my-auto">
          <span className="f font-medium text-[2.5rem] text-[#F0F0F0]">No tracks yet</span>
        </div>
      )}
    </div>
  );
};

export default TracksUploadedTable;
