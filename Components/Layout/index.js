import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Snackbar from "@mui/material/Snackbar";
import Header from "../Header";
import SideBar from "../SideBar";

import { useDispatch, useSelector } from "react-redux";
import { getMessage, getStatus, toggleSnackbar } from "../../store/snackbar";
import { getUser, login, setDashboardHistory } from "../../store/user";
import { getPage } from "../../store/pages";
import { setActivePage as setGlobalPage } from "../../store/pages";
import { setUser as setUserRedux } from "../../store/user";
// import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import useLocalStorage from "../../hooks/useLocalStorage";
import Container from "./Container";
import { baseInstanceAPI } from "../../axios";
import { DataContext } from "../../Context/fetchData";
import UserSideBar from "../SideBars/User";
import AdminSideBar from "../SideBars/Admin";
import ArtisteSideBar from "../SideBars/Artiste";
import UserHeader from "../Headers/User";
import ArtisteHeader from "../Headers/Artiste";
import AdminHeader from "../Headers/Admin";

const BaseLayout = ({ children }) => {
  const AppData = useContext(DataContext);
  const activePage = useSelector(getPage);
  const { isLoggedIn, getLocalStorage } = useLocalStorage();
  const user = useSelector(getUser);
  // const isLoggedIn = useIsLoggedIn();
  const isopen = useSelector(getStatus);
  const snbMsg = useSelector(getMessage);
  const dispatch = useDispatch();
  const router = useRouter();

  const setActivePage = (page) => {
    dispatch(setGlobalPage(page));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(toggleSnackbar({ open: false }));
    // setOpen(false);
  };

  return (
    <div className="w-full h-screen flex">
      <Head>
        <title>Kennis Music Fiesta | Home</title>
        <meta name="description" content="Kennis Music Fiesta" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      {AppData.section == "User" && <UserSideBar activePage={activePage} setActivePage={setActivePage}></UserSideBar>}
      {AppData.section == "Artiste" && <ArtisteSideBar activePage={activePage} setActivePage={setActivePage}></ArtisteSideBar>}
      {AppData.section == "Admin" && <AdminSideBar activePage={activePage} setActivePage={setActivePage}></AdminSideBar>}
      {/* <SideBar activePage={activePage} setActivePage={setActivePage} /> */}
      <main style={{ width: "calc(100% - 37rem)" }} className={"bg-[#FBFAFA] h-full flex-grow px-[2.2rem] !pb-[11.4rem] sidebar:pb-[5.2rem] sidebar:px-[5.2rem]  overflow-y-scroll scroll_hide"}>
        <Container>
          {" "}
          {AppData.section == "User" && <UserHeader title={activePage} setActivePage={setActivePage}></UserHeader>}
          {AppData.section == "Artiste" && <ArtisteHeader title={activePage} setActivePage={setActivePage}></ArtisteHeader>}
          {AppData.section == "Admin" && <AdminHeader title={activePage} setActivePage={setActivePage}></AdminHeader>}
          {/* <Header title={activePage} setActivePage={setActivePage}></Header> */}
          {children}
        </Container>
        {/* <div className="w-full h-full grid place-items-center text-3xl">???? Under Construction...</div> */}
      </main>
      <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }} open={isopen} autoHideDuration={6000} onClose={handleClose} message={snbMsg} />
    </div>
  );
};

export default BaseLayout;
