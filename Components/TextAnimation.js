import React from "react";

const TextAnimation = () => {
  return (
    <div>
      <svg height="84px" stroke="#fff" strokeWidth="2" className="text-line" width="100%">
        <text
          dominantBaseline="middle"
          textAnchor="start"
          y="50%"
          className="text-animation !font-semibold text-[4rem] mobile:text-[9.4rem] leading-[4rem] mobile:leading-[9.1rem] text-white uppercase"
        >
          Kennis
        </text>
      </svg>
      <svg height="84px" stroke="#fff" strokeWidth="2" className="text-line" width="100%">
        <text
          dominantBaseline="middle"
          textAnchor="start"
          y="50%"
          className=" text-animation  !font-semibold !text-[4rem] mobile:!text-[9.4rem] !leading-[4rem] mobile:!leading-[9.1rem] !text-white uppercase"
        >
          Music Festival
        </text>
      </svg>
    </div>
  );
};

export default TextAnimation;
