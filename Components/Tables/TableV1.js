import React from "react";

const TableV1 = ({ data = true }) => {
  return (
    // <div className="rounded-[2rem] bg-white min-w-[52rem] min-h-[48.3rem] h-max default-shadow flex flex-col overflow-hidden">
    <div className="rounded-[2rem] bg-white  min-h-[48.3rem] h-min default-shadow flex flex-col overflow-hidden">
      {/* Table Head */}
      <div className="px-[2rem] mobile:px-[4.2rem] py-[3rem] flex items-center">
        <h3 className="font-bold text-black text-[2.1rem] leading-[2.1rem]">Top Winners</h3>
        <button className="h-[3.7rem] rounded-[1rem] py-[1rem] px-[1.4rem] font-bold border border-black leading-[1.7rem] ml-auto text-[1.4rem] bg-[#F0F0F0]">Prev</button>
        <button className="h-[3.7rem] rounded-[1rem] py-[1rem] px-[1.4rem] font-bold border border-black leading-[1.7rem] ml-auto text-[1.4rem] bg-[#F0F0F0] ml-[.89rem]">Next</button>
      </div>
      {/* Table Body */}

      {data && (
        <div className="body px-[2rem] mobile:px-[4.2rem] pb-[3rem]">
          {/* row */}
          <div className="row flex justify-between items-center pb-[1.6rem] text-[#706C6C] rounded-[2rem] leading-[2.1rem] text-[1.8rem]">
            <img className="h-[4.2rem] w-[4.2rem] object-cover rounded-full" src="/user-img.jpg" />
            <span className="ml-[1.8rem] font-normal text-[1.3rem] ">#12345678BG</span>
            <span className="text-[1.3rem] font-semibold ml-auto mr-auto">Category 1</span>
            <span className="text-[#717171] font-bold text-[1.7rem] ">N100,000</span>
          </div>
          {/* end row */}
          {/* row */}
          <div className="row flex justify-between items-center pb-[1.6rem] text-[#706C6C] rounded-[2rem] leading-[2.1rem] text-[1.8rem]">
            <img className="h-[4.2rem] w-[4.2rem] object-cover rounded-full" src="/user-img.jpg" />
            <span className="ml-[1.8rem] font-normal text-[1.3rem] ">#12345678BG</span>
            <span className="text-[1.3rem] font-semibold ml-auto mr-auto">Category 1</span>
            <span className="text-[#717171] font-bold text-[1.7rem] ">N100,000</span>
          </div>
          {/* end row */}
        </div>
      )}

      {/* No winners yet */}
      {!data && (
        <div className="grid flex-1 place-content-center place-items-center my-auto">
          <span className="f font-medium text-[2.5rem] text-[#F0F0F0]">No winners yet</span>
        </div>
      )}
    </div>
  );
};

export default TableV1;
