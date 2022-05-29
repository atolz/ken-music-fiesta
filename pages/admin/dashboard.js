import React from "react";
import { useSelector } from "react-redux";
import BaseLayout from "../../Components/Layout";
import Cards from "../../Components/Pages/Admin/Cards";
import Events from "../../Components/Pages/Admin/Events";
import RaffleDraws from "../../Components/Pages/Admin/RaffleDraws";
import TransactionsAdmin from "../../Components/Pages/Admin/TransactionsAdmin";
import Users from "../../Components/Pages/Admin/Users";
import { getPage } from "../../store/pages";

const Dashboard = () => {
  const activePage = useSelector(getPage);

  // useEffect(() => {
  //   router.prefetch("/admin/sign-in");
  //   if (getLocalStorage("section") != "Admin") {
  //     router.replace("/admin/sign-in");
  //   }
  // }, []);
  return (
    <>
      {activePage == "Users" && <Users></Users>}
      {activePage == "Transactions" && <TransactionsAdmin></TransactionsAdmin>}
      {activePage == "Events" && <Events></Events>}
      {activePage == "Raffle Draws" && <RaffleDraws></RaffleDraws>}
      {activePage == "Cards" && <Cards></Cards>}

      {/* {activePage == "Landing" && <LandingPage></LandingPage>} */}
    </>
  );
};

Dashboard.Layout = BaseLayout;
export default Dashboard;
