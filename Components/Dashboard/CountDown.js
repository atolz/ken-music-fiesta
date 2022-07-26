import Countdown from "react-countdown";

const renderer = (element, bgColor, titleColor) => {
  return function render({ hours, minutes, seconds, completed, days }) {
    if (completed) {
      return <p> {element}</p>;
    } else {
      // Render a countdown
      return (
        <div style={{ background: `${bgColor} !important` }} className="py-[1.8rem] px-[2.7rem] rounded-[2rem] bg-[#f8f9fd41] text-[3rem] text-center mt-[2rem] border">
          <p style={{ color: `${titleColor} !important` }} className="f font-semibold text-primary text-[1.2rem] leading-[1rem] mb-[4px]">
            Next Draw Starts In
          </p>
          <div className="flex justify-center">
            {/* <p className="flex flex-col items-center">
              <span className="leading-[3.6rem] font-semibold text-[#454141]">{days}</span>
              <span className="text-[7px] font-semibold">Days</span>
            </p> */}
            {/* <span className="mx-[10px] -translate-y-2">:</span> */}
            <p className="flex flex-col items-center">
              <span className="leading-[3.6rem] font-semibold text-[#454141]">{hours}</span>
              <span className="text-[7px] font-semibold">Hours</span>
            </p>
            <span className="mx-[10px] -translate-y-2">:</span>
            <p className="flex flex-col items-center">
              <span className="leading-[3.6rem] font-semibold text-[#454141]">{minutes}</span>
              <span className="text-[7px] font-semibold">Minutes</span>
            </p>
            <span className="mx-[10px] -translate-y-2">:</span>
            <p className="flex flex-col items-center">
              <span className="leading-[3.6rem] font-semibold text-[#454141]">{seconds}</span>
              <span className="text-[7px] font-semibold">Seconds</span>
            </p>
          </div>
        </div>
      );
    }
  };
};
// const renderer =

const MyCountDown = ({ time, completed, bgColor, titleColor }) => {
  return <Countdown date={Date.now() + time} renderer={renderer(completed, bgColor, titleColor)}></Countdown>;
};

export default MyCountDown;
