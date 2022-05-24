import React from "react";
import { useSelector } from "react-redux";
import BaseLayout from "../../Components/Layout";
import Catalogue from "../../Components/Pages/Catalogue/Catalogue";
import CatalogueDashboard from "../../Components/Pages/Catalogue/Dashboard";
import { getPage } from "../../store/pages";

const DashboardPage = () => {
  const activePage = useSelector(getPage);
  return (
    <>
      {activePage == "Catalogue" && <Catalogue></Catalogue>}
      {activePage == "Dashboard" && <CatalogueDashboard></CatalogueDashboard>}
    </>
  );
};

DashboardPage.Layout = BaseLayout;
export default DashboardPage;
