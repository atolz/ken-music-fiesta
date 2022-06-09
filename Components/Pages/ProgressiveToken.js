import React, { useContext } from "react";
import { popUpContext } from "../../Context/PopUps";

const ProgressiveToken = () => {
  const popUpFunctions = useContext(popUpContext);
  return (
    <section
      //   style={{ backgroundSize: "100%" }}
      className="px-[2rem] bg-[#FFF6E4] p-[4.6rem] bg-cover bg-center bg-[url(/performing.jpg)] bg-no-repeat w-full h-[70vh] mobile:h-[70vh] md:!h-[79vh] rounded-[2rem] grid place-items-end "
    >
      <div className=" py-[3.5rem] px-[5.8rem] rounded-[2rem] bg-white flex flex-wrap gap-[4rem] justify-between mx-auto">
        <p className=" font-bold text-[1.8rem] leading-[3.5rem] max-w-[34.9rem]">
          Participate in our quick raffle draw and win <span className="text-[#FCAC0D]">amazing prices!</span>
        </p>
        <button
          onClick={() => {
            popUpFunctions.initBuyToken();
          }}
          className="btn btn--outlined !px-[3.2rem]"
        >
          Buy Token
        </button>
      </div>
    </section>
  );
};

export default ProgressiveToken;
