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
            <p className=" font-normal text-[1.6rem] leading-[24px] mt-[2.4rem] text-[#8C8C8C] mb-[2.6rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique ultrices turpis ac mattis sapien. Pharetra id lorem at ut vitae, lorem commodo. Fringilla justo, dui enim non nec
              convallis ac non. Viverra cum proin dictum egestas pharetra et ipsum condimentum. Ut in laoreet ultrices porta commodo enim. Tortor in erat nunc quam nullam. Eget elit magna neque, urna.
              Pretium duis id senectus ut varius. Id a porttitor lacus, mauris, commodo. Elit, arcu scelerisque mi, tellus. Ut consectetur eleifend sit in. Ipsum dictum at molestie ac odio. Pulvinar
              vel proin purus dui nunc neque enim magna enim. Leo gravida vehicula orci, felis quis elementum urna vitae pharetra. Risus neque id etiam ullamcorper adipiscing tellus. Blandit a dictum
              lorem facilisis. Nullam malesuada quisque nec eget tempus elementum nascetur aenean. Aliquet tempor amet pulvinar dictum. Est integer amet nascetur sem urna velit sed. Cursus blandit
              lorem lectus orci, lacus sit. Imperdiet scelerisque et quis dictumst sed quam. Accumsan quis nunc donec sagittis, dui, tincidunt enim. Purus praesent diam morbi mi. Sed dolor fringilla
              curabitur arcu. Tincidunt neque mattis fames sed massa. Vestibulum bibendum tellus pharetra justo morbi at ornare molestie. Sit volutpat amet gravida scelerisque etiam metus. Nibh felis
              velit, sodales sed tellus erat. Neque.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PrivacyContentDetails;
