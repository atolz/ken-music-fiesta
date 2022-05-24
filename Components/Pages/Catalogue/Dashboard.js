import React from "react";
import TableV1 from "../../Tables/TableV1";
import PoweredBy from "../../Cards/PoweredBy";

const CatalogueDashboard = () => {
  return (
    <div>
      <div className="flex flex-wrap mobile:gap-5 mb-[3.2rem]">
        <div onClick={() => {}} className="relative bg-[#F0F0F0] rounded-[2rem] py-[3.9rem] px-[3.5rem] text-[1rem] min-w-[27rem] flex-1 hover:scale-[1.01] hover:shadow-sm cursor-pointer">
          <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[21.4rem]">30 Tracks</h3>
          <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">Total Number of Tracks </p>
          <img src="/3d-live.svg" className="absolute bottom-[3.3rem] right-[4rem] w-[45%]"></img>
        </div>
        <div onClick={() => {}} className="relative bg-[#FFF6E4] min-w-[27rem] rounded-[2rem] py-[3.9rem] px-[3.5rem] flex-1 hover:scale-[1.01] hover:shadow-sm cursor-pointer">
          <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]">20 Catalogues</h3>
          <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">Total Number of Catalogues</p>
          <img src="/3d-hand-phone.svg" className="absolute bottom-0 right-[4rem] w-[45%]"></img>
        </div>
      </div>

      {/* Third Section: Latest Winner Section */}
      <section className="flex flex-wrap gap-10">
        {/* div-1 */}
        <div className=" flex-1">
          <TableV1></TableV1>
        </div>

        {/* div-2 */}
        <div className=" flex-1">
          <PoweredBy></PoweredBy>
        </div>
      </section>
    </div>
  );
};

export default CatalogueDashboard;
