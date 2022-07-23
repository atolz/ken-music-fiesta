import Link from "next/link";
import React, { useRef, useState } from "react";

const PrivacyNav = ({ nav = ["Privacy Policy", "Privacy Summary", "Data we collect"], onChange = () => {} }) => {
  const [active, setActive] = useState(nav[0]);
  const [IndicatorTop, setIndicatorTop] = useState(0);
  const parentRef = useRef();
  const childrenRef = useRef([]);

  return (
    <div className=" sticky top-20 h-max">
      <h1 className=" font-bold text-[4.7rem] mb-[4rem] text-primaryLighter whitespace-nowrap">Privacy Policy</h1>
      <ul className="border-l border-[#B9B9B9] w-max relative " ref={parentRef}>
        {/* Indicator */}
        <div
          key={active}
          style={{ top: IndicatorTop }}
          className="w-[5px] h-[3.5rem] rounded-[3px] absolute top-0 left-0 bg-primary transition-all duration-[2s] ease-in-out  -translate-x-1/2"
          // className="w-[5px] h-[3.5rem] rounded-[3px] absolute top-0 left-0 bg-primary transition-all duration-500 ease-in-out gelatine -translate-x-1/2"
        ></div>
        {nav.map((el, i) => {
          return (
            <li
              ref={(el) => {
                childrenRef.current[i] = el;
              }}
              onClick={(e) => {
                onChange(el);
                setActive(el);
                console.log("CUrrent ref is: ", childrenRef.current);
                setIndicatorTop(childrenRef.current[i].getBoundingClientRect().top - parentRef.current.getBoundingClientRect().top);
                document.getElementById(el)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
              key={i}
              className={`"font-bold text-[2rem] h-[3.5rem] grid items-center transition-all duration-300 pl-[3rem] ${active == el ? " !text-white" : " !text-[#706C6C]"}`}
            >
              <Link href={`#${el}`}>
                <a>{el}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PrivacyNav;
