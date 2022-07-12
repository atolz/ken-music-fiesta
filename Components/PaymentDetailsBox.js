const PaymentDetailsBox = ({
  theme,
  items = [
    { name: "Transaction ID", value: "34538590584736s" },
    { name: "Phone Number", value: "0800044455555" },
    { name: "Amount", value: 5000 },
  ],
}) => {
  return (
    <div className={` backdrop-blur-[40px] rounded-primary p-[2.3rem] px-[4.1rem] py-[5.2rem] ${theme == "light" ? " bg-[#F8F9FD]" : " bg-[rgba(255,255,255,0.09)]"}`}>
      {items.map((el, i) => {
        return (
          <div key={i} className=" text-center mb-[2.4rem] last:mb-0 grid !grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] place-items-center mobile:place-items-start">
            <span className="f font-semibold text-[1.4rem] text-[#CECECE] leading-[1.7rem] mb-[.4rem] mr-[2.4rem]  text-left">{el?.name}</span>
            <h2 className={`text-[2.2rem] font-semibold leading-[2.6rem]  overflow-hidden text-ellipsis whitespace-nowrap ${theme == "light" ? " text-black" : " text-white"}`}>{el?.value}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentDetailsBox;
