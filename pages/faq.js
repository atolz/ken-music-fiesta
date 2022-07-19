import React, { useState } from "react";
import LandPageLayout from "../Components/Layout/LandPageLayout";
import Collapsible from "react-collapsible";
const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem]">{children}</div>;
};

const Faq = () => {
  const question = [
    {
      title: "How do i sign up on Kennis Music Festival?",
      //   desc: "",
    },
    {
      title: "Where can I get tickets?",
      //   desc: "",
    },
    {
      title: "How do i receive my card?",
      //   desc: "",
    },
    {
      title: "Is it at every draw that i get to win something?",
      //   desc: "",
    },
  ];
  const [active, setActive] = useState();
  return (
    <Container>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] items-center">
        <div>
          <h1 className=" text-primaryLighter font-bold text-[5.7rem] max-w-[511px] leading-[6rem]">Frequently Asked Questions</h1>
          <p className=" font-medium text-[1.6rem] mt-[1.6rem] text-white max-w-[462px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus orci laoreet lorem nibh fringilla fusce gravida. Elementum duis nulla a mauris at morbi.
          </p>
        </div>

        {/* Accordion */}
        <div>
          {question.map((el, i) => {
            return (
              <div key={i} className=" border-b-2 text-[1.6rem] font-normal leading-[24px] text-white py-[2.4rem]">
                <Collapsible
                  open={active == i}
                  handleTriggerClick={() => {
                    setActive(i);
                  }}
                  height={70}
                  trigger={
                    <div className="flex items-center">
                      <img src="/circle-question-mark.png"></img>
                      <p className=" font-bold text-[1.8rem] ml-[1rem] text-white">{el.title}</p>
                    </div>
                  }
                >
                  <p className=" border-t-2 pt-[2.4rem] mt-[2.4rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eget nunc metus tempus, pretium. Sed lectus lacus libero dolor quam in elit nibh. Sit lacus, ullamcorper enim,
                    tortor dolor, mauris turpis libero. Egestas sem.
                  </p>
                  {/* <p>It can even be another Collapsible component. Check out the next section!</p> */}
                </Collapsible>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
Faq.Layout = LandPageLayout;
export default Faq;
