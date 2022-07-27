import React from "react";

const PrivacyContentDetails = ({ active, nav = [] }) => {
  return (
    <div className="max-w-[70rem] mt-10 ">
      {nav.map((el, i) => {
        return (
          <div key={i}>
            <h2 id={el.titleAlias} className={` font-bold text-[3.6rem] leading-[44px] text-white ${active == el.title}`}>
              {el.title}
            </h2>
            <p className=" font-normal text-[1.6rem] leading-[24px] mt-[2.4rem] text-[#8C8C8C] mb-[2.6rem]">{el.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PrivacyContentDetails;
