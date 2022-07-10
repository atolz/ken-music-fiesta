const StatusCircle = ({ type, color, children }) => {
  return (
    <div className=" relative grid  place-items-center w-[75px] h-[75px]">
      <div style={{ backgroundColor: color }} className={`w-[75px] h-[75px] rounded-full grid place-content-center opacity-50 absolute`}></div>
      <div style={{ backgroundColor: color }} className={`w-[65px] h-[65px] rounded-full grid place-content-center opacity-80 absolute `}></div>
      <div style={{ backgroundColor: color }} className={`w-[55px] h-[55px] rounded-full grid place-content-center absolute `}></div>
      <div className=" absolute">{children}</div>
    </div>
  );
};

export default StatusCircle;
