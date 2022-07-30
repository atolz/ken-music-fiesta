import React from "react";

const TextAnimationMobile = () => {
  return (
    <>
      <div className=" hidden landing_554:block">
        <svg clas height="61px" stroke="#fff" strokeWidth="2" className="text-line will-change-transform" width="100%">
          <text dominantBaseline="middle" textAnchor="start" y="50%" className="text-animation !font-semibold text-[6rem] leading-[4rem] mobile:leading-[9.1rem] text-white uppercase tracking-[1.5px]">
            Kennis
          </text>
        </svg>
        <svg height="61px" stroke="#fff" strokeWidth="2" className="text-line" width="100%">
          <text
            dominantBaseline="middle"
            textAnchor="start"
            y="50%"
            className=" text-animation  !font-semibold !text-[6rem] !leading-[4rem] mobile:!leading-[9.1rem] !text-white uppercase tracking-[1.5px]"
          >
            Music Festival
          </text>
        </svg>
      </div>
      {/* -----------media query------------------- */}
      <div className=" block landing_554:hidden">
        <svg clas height="45px" stroke="#fff" strokeWidth="1" className="text-line will-change-transform" width="100%">
          <text dominantBaseline="middle" textAnchor="start" y="50%" className="text-animation !font-semibold text-[5rem] leading-[4rem] mobile:leading-[9.1rem] text-white uppercase tracking-[1.5px]">
            Kennis
          </text>
        </svg>
        <svg height="45px" stroke="#fff" strokeWidth="1" className="text-line" width="100%">
          <text
            dominantBaseline="middle"
            textAnchor="start"
            y="50%"
            className=" text-animation  !font-semibold !text-[5rem] !leading-[4rem] mobile:!leading-[9.1rem] !text-white uppercase tracking-[1.5px]"
          >
            Music
          </text>
        </svg>
        <svg height="45px" stroke="#fff" strokeWidth="1" className="text-line" width="100%">
          <text
            dominantBaseline="middle"
            textAnchor="start"
            y="50%"
            className=" text-animation  !font-semibold !text-[5rem] !leading-[4rem] mobile:!leading-[9.1rem] !text-white uppercase tracking-[1.5px]"
          >
            Festival
          </text>
        </svg>
      </div>
    </>
  );
};

export default TextAnimationMobile;
