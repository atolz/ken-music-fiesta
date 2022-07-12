import Countdown from "react-countdown";

const renderer = (element) => {
  return function render({ hours, minutes, seconds, completed, days }) {
    if (completed) {
      return <p> {element}</p>;
    } else {
      // Render a countdown
      return (
        <div className="py-[1.8rem] px-[2.7rem] rounded-[2rem] bg-[#f8f9fd41] text-[3rem] text-center mt-[2rem]">
          <p className="f font-semibold text-primary text-[1.2rem] leading-[1rem] mb-[4px]">Event starts in</p>
          <div className="flex">
            <p className="flex flex-col items-center">
              <span className="leading-[3.6rem] font-semibold text-[#454141]">{days}</span>
              <span className="text-[7px] font-semibold">Days</span>
            </p>
            <span className="mx-[10px] -translate-y-2">:</span>
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

const LSCountDown = ({ time, completed }) => {
  return <Countdown date={Date.now() + time} renderer={renderer(completed)}></Countdown>;
};

export default LSCountDown;
