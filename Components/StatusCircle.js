const StatusCircle = ({ type, color, children, className, width = "75px" }) => {
  return (
    <div style={{ width: width, height: width }} className={` relative grid  place-items-center w-[75px] h-[75px] ${className}`}>
      <div style={{ backgroundColor: color, width: width, height: width }} className={` rounded-full grid place-content-center opacity-50 absolute`}></div>
      <div style={{ backgroundColor: color, width: "calc(100% - 15px)", height: `calc(${width} - 15px)` }} className={` rounded-full grid place-content-center opacity-80 absolute `}></div>
      <div style={{ backgroundColor: color, width: "calc(100% - 30px)", height: `calc(${width} - 30px)` }} className={` rounded-full grid place-content-center absolute `}></div>
      <div className=" absolute">{children}</div>
    </div>
  );
};

export default StatusCircle;
