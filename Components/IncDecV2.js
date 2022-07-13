import React, { useState } from "react";

const IncDecV2 = ({ min = 0, max = 500000, defaultValue = 0, onCange = (type, value) => {} }) => {
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
    <div className="flex gap-x-[1.2rem] ">
      <span onClick={onDec} className="h-[5.1rem] mobile:h-[5.1rem] w-[4.6rem] mobile:w-[4.6rem] grid place-items-center bg-[#F6EBF5] rounded-[1rem] border-2 border-primary cursor-pointer">
        <span className="font font-medium text-[2.6rem] mobile:text-[2.6rem]">-</span>
      </span>
      <span className="h-[5.1rem] text-[#464646] mobile:h-[5.1rem] flex-1 w-[6.4rem] border-2 border-[#000000] bg-[#F8F9FD] rounded-[1rem] grid place-items-center text-[2.5rem] font-bold leading-[4.3rem]">
        {value}
      </span>
      <span onClick={onInc} className=" h-[5.1rem] mobile:h-[5.1rem] w-[7rem] mobile:w-[4.6rem] grid place-items-center bg-[#F6EBF5] rounded-[1rem] border-2 border-primary cursor-pointer">
        <span className="font font-medium text-[2.6rem] mobile:text-[2.6rem]">+</span>
      </span>
    </div>
  );
};

export default IncDecV2;
