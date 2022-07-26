import { useContext } from "react";
import { DataContext } from "../Context/fetchData";

const useIsNigerian = () => {
  const AppData = useContext(DataContext);
  const user = AppData.user.data;
  const ExchangeRate = 665;

  const isNigerian = () => {
    if (user.country == "Nigeria" || (user.country !== "Nigeria" && user.hasConfirmedNigerian)) {
      return true;
    } else {
      return false;
    }
  };

  return { isNigerian, ExchangeRate };
};

export default useIsNigerian;
