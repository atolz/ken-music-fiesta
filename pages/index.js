import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Dashboard from "../Components/Pages/Dashboard";
import RaffleTickets from "../Components/Pages/RaffleTickets";
import Transactions from "../Components/Pages/Transactions";
import Rewards from "../Components/Pages/Rewards";
import LiveStream from "../Components/Pages/LiveStream";
import { useState } from "react";

export default function Home() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="w-full h-screen flex">
      <Head>
        <title>Kennis Music Fiesta | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar activePage={activePage} setActivePage={setActivePage} />
      <main className={"bg-[#FBFAFA] bg-slate-400 h-full flex-grow px-[5.2rem] py-[6.4rem] overflow-y-scroll"}>
        <Header title={activePage}></Header>
        {activePage == "Dashboard" && <Dashboard></Dashboard>}
        {activePage == "Raffle Tickets" && <RaffleTickets></RaffleTickets>}
        {activePage == "Rewards" && <Rewards></Rewards>}
        {activePage == "Livestream Event" && <LiveStream></LiveStream>}
        {activePage == "Transactions" && <Transactions></Transactions>}
        {/* <div className="w-full h-full grid place-items-center text-3xl">🚧 Under Construction...</div> */}
      </main>
    </div>
  );
}
