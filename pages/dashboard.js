import React, { useContext, useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Dashboard from "../Components/Pages/Dashboard";
import RaffleTickets from "../Components/Pages/RaffleTickets";
import Transactions from "../Components/Pages/Transactions";
import Rewards from "../Components/Pages/Rewards";
import LiveStream from "../Components/Pages/LiveStream";
import Profile from "../Components/Pages/Profile";
import BaseLayout from "../Components/Layout";

import { useSelector } from "react-redux";

import { getPage } from "../store/pages";
import useLocalStorage from "../hooks/useLocalStorage";
import { DataContext } from "../Context/fetchData";
import ProgressiveToken from "../Components/Pages/ProgressiveToken";
// import { setActivePage as setGlobalPage } from "../store/pages";
// import UseIsLoggedIn from "../hooks/useIsLoggedIn";

export default function Home() {
  const activePage = useSelector(getPage);
  const { getLocalStorage } = useLocalStorage();
  const router = useRouter();
  const AppData = useContext(DataContext);
  // const user = AppData.user.data;
  // const dashboardHistory = AppData.user.dashboardHistory;

  useEffect(() => {
    router.prefetch("/auth/sign-in");
    if (getLocalStorage("section") != "User") {
      router.replace("/auth/sign-in");
    }
  }, []);

  return (
    <>
      {/* <Dashboard className={` transition-all ease-in ${activePage == "Dashboard" ? "visible opacity-100" : " invisible opacity-0 h-0"}`}></Dashboard>
      <RaffleTickets className={` transition-all ease-in ${activePage == "Raffle Tickets" ? "visible opacity-100" : " invisible opacity-0 h-0"}`}></RaffleTickets>
      <Rewards className={` transition-all ease-in ${activePage == "Rewards" ? "visible opacity-100" : " invisible opacity-0 h-0"}`}></Rewards>
      <LiveStream className={` transition-all ease-in ${activePage == "Livestream Event" ? "visible opacity-100" : " invisible opacity-0 h-0"}`}></LiveStream> */}
      {/* <Profile className={` transition-all ease-in ${activePage == "Profile" ? "visible opacity-100" : " invisible opacity-0 h-0"}`}></Profile> */}
      {/* {activePage == "Profile" && <Profile></Profile>} */}
      {activePage == "Dashboard" && <Dashboard appData={AppData}></Dashboard>}
      {activePage == "Raffle Tickets" && <RaffleTickets appData={AppData}></RaffleTickets>}
      {activePage == "Rewards" && <Rewards appData={AppData}></Rewards>}
      {activePage == "Livestream Event" && <LiveStream AppData={AppData}></LiveStream>}
      {activePage == "Progressive Token" && <ProgressiveToken AppData={AppData}></ProgressiveToken>}
      {activePage == "Profile" && <Profile appData={AppData}></Profile>}
      {/* {activePage == "Transactions" && <Transactions></Transactions>} */}
      {/* {activePage == "Landing" && <LandingPage></LandingPage>} */}
    </>
  );
}

Home.Layout = BaseLayout;
