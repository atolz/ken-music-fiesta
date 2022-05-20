import React, { useState } from "react";

const IncDec = ({ min = 1, max = 500000, defaultValue = 1, onCange = (type, value) => {} }) => {
  const [value, setValue] = useState(defaultValue);

  const onDec = () => {
    console.log("decresing min is", min);
    if (value > min) {
      setValue((value) => --value);
      //   console.log("value is ", value);
      onCange("dec", --value);
    }
  };

  const onInc = () => {
    if (value < max) {
      console.log("increasing max is", max);
      setValue((value) => ++value);
      onCange("inc", ++value);
    }
  };
  return (
    <div className="flex gap-x-[2.2rem] mb-[1.7rem]">
      <span onClick={onDec} className="h-[6.8rem] mobile:h-[8.7rem] w-[7rem] mobile:w-[8.8rem] grid place-items-center bg-[#FFF7E7] rounded-[2rem] border-2 border-[#FCAC0D] cursor-pointer">
        <span className="font font-medium text-[3.6rem] mobile:text-[5.6rem]">-</span>
      </span>
      <span className="h-[6.8rem] mobile:h-[8.7rem] flex-1 max-w-[23.7rem] border-2 border-[#000000] bg-[#F8F9FD] rounded-[2rem] grid place-items-center text-[3.6rem] font-bold leading-[4.3rem]">
        {value}
      </span>
      <span onClick={onInc} className=" h-[6.8rem] mobile:h-[8.7rem] w-[7rem] mobile:w-[8.8rem] grid place-items-center bg-[#FFF7E7] rounded-[2rem] border-2 border-[#FCAC0D] cursor-pointer">
        <span className="font font-medium text-[3.6rem] mobile:text-[5.6rem]">+</span>
      </span>
    </div>
  );
};

export default IncDec;
