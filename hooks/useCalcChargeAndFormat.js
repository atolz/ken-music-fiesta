import { useContext } from "react";
import { DataContext } from "../Context/fetchData";
import formatNumberWithCommas from "../Utils/addCommas";

const useCalcChargeAndFormat = () => {
  const AppData = useContext(DataContext);
  const user = AppData.user.data;

  const calculateAndFormatPrice = (value) => {
    console.log("Calling format price", value, user);
    if (user?.country == "Nigeria" || (user.country !== "Nigeria" && user?.hasConfirmedNigerian)) {
      return (
        <span className=" font-bold !text-[#827F7F]">
          <span className=" font-sans">&#8358;</span>
          {formatNumberWithCommas(value)}
        </span>
      );
    } else {
      return <span className=" font-bold !text-[#827F7F]">${formatNumberWithCommas(Math.ceil(value / 665))} </span>;
    }
  };

  return { calculateAndFormatPrice };
};

export default useCalcChargeAndFormat;
