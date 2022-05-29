import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BaseLayout from "../../Components/Layout";
import Catalogue from "../../Components/Pages/Catalogue/Catalogue";
import CatalogueDashboard from "../../Components/Pages/Catalogue/Dashboard";
import Profile from "../../Components/Pages/Profile";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getPage } from "../../store/pages";

const DashboardPage = () => {
  const activePage = useSelector(getPage);
  const { getLocalStorage } = useLocalStorage();
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/artistes/sign-in");
    if (getLocalStorage("section") != "Artiste") {
      router.replace("/artistes/sign-in");
    }
  }, []);
  return (
    <>
      {activePage == "Catalogue" && <Catalogue></Catalogue>}
      {activePage == "Dashboard" && <CatalogueDashboard></CatalogueDashboard>}
      {/* {activePage == "Profile" && <Profile></Profile>} */}
    </>
  );
};

DashboardPage.Layout = BaseLayout;
export default DashboardPage;
