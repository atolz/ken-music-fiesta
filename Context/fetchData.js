import React, { createContext, useEffect, useState } from "react";
import { baseInstanceAPI } from "../axios";
import { useRouter } from "next/router";
import useLocalStorage from "../hooks/useLocalStorage";

export const DataContext = createContext({
  allArtisteCatalogues: {},
  artistes: {},
  user: {},
  artistesUser: {},
  adminUser: {},
  kudibarEvents: {},
  setUserOnLogin: (type, data) => {},
  section: "",
  setSection: () => {},
  fetchArtisteUserCatalogues: () => {},
  fetchUserDetails: () => {},
  fetchKudibarEvents: () => {},
});

const AppDataProvider = ({ children }) => {
  const router = useRouter();
  const { getLocalStorage, isLoggedIn } = useLocalStorage();
  const [section, setSection] = useState("User"); // Sections: User, Admin, Artiste
  const [artistes, setArtistes] = useState({
    data: [],
    error: false,
    loading: true,
    hash: {},
  });
  const [allArtisteCatalogues, setAllArtisteCatalogue] = useState({
    data: [],
    error: false,
    loading: true,
  });

  const [user, setUser] = useState({
    data: null,
    dashboardHistory: {
      raffleTickets: 0,
      rewardWon: 0,
      eventTickets: 0,
    },
    raffleTickets: {},
  });
  const [artistesUser, setArtistesUser] = useState({
    data: null,
    catalogues: [],
    dashboardHistory: {},
  });

  const [adminUser, setAdminUser] = useState({
    data: null,
  });

  const [kudibarEvents, setKudibarEvents] = useState({
    data: [],
    error: false,
    loading: true,
    hash: {},
  });

  const fetchKudibarEvents = async () => {
    let events = [];
    setKudibarEvents((val) => ({ ...val, error: false, loading: true }));
    try {
      const resp = await baseInstanceAPI.get("/dashboard/get-events/");
      // console.log("artiste are")
      let allEventsPromises = resp.data.events.map(async (el) => {
        return baseInstanceAPI.get(`/dashboard/get-event-detail/${el.slug}`);
      });
      events = (await Promise.all(allEventsPromises)).map((resp) => {
        return resp.data;
      });
      console.log("All events are:", events);
      let evenstObjHashMap = {};

      for (let value of events) {
        // console.log("Values is ", value);
        evenstObjHashMap[value.name] = value;
      }
      setKudibarEvents((val) => ({ ...val, data: events, hash: evenstObjHashMap, error: false, loading: false }));
      console.log("All Kudibar events hash is", evenstObjHashMap);
    } catch (error) {
      console.log("THere was an error loading all artistes");
      setArtistes((val) => ({ ...val, error: true, loading: false }));
    }
  };
  const fetchArtistes = async () => {
    let artistes = [];
    setArtistes((val) => ({ ...val, error: false, loading: true }));
    try {
      const resp = await baseInstanceAPI.get("/artist");
      // console.log("artiste are")
      let artistePromises = resp.data.artists.map(async (el) => {
        return baseInstanceAPI.get(`/artist/${el.uuid}`);
      });
      artistes = (await Promise.all(artistePromises)).map((resp) => {
        return resp.data.artist[0];
      });
      console.log("All artist are:", artistes);
      let artObjHashMap = {};
      let i = 1;
      for (let value of artistes) {
        // console.log("Values is ", value);
        artObjHashMap[i] = value;
        i += 1;
      }
      setArtistes((val) => ({ ...val, data: artistes, hash: artObjHashMap, error: false, loading: false }));
      console.log("artistes hash is", artObjHashMap);
    } catch (error) {
      console.log("THere was an error loading all artistes");
      setArtistes((val) => ({ ...val, error: true, loading: false }));
    }
  };
  const fetchAllCatalogues = async () => {
    let catalogues = [];
    setAllArtisteCatalogue((val) => ({ ...val, error: false, loading: true }));
    try {
      const resp = await baseInstanceAPI.get("/artist-catalogue");
      console.log("resp catalogue", resp.data);
      let allCatalogues = resp.data.catalogue;
      let catObjHashMap = {};
      for (let value of allCatalogues) {
        // console.log("Values is ", value);
        catObjHashMap[value.albumTitle] = value;
      }
      setAllArtisteCatalogue((val) => ({ ...val, data: allCatalogues, hash: catObjHashMap, error: false, loading: false }));
      console.log("Catalogeus.... hash is", catObjHashMap);
    } catch (error) {
      console.log("THere was an error loading all cataloges");
      setAllArtisteCatalogue((val) => ({ ...val, error: true, loading: false }));
    }
  };

  const fetchArtisteUserCatalogues = async () => {
    try {
      const resp = await baseInstanceAPI.get("/artist-catalogue/dashboard/catalogue?tracks=true", {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      const respHistoryDashboard = await baseInstanceAPI.get("/artist-catalogue/dashboard", {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log("Fetch Artiste User Catalogue ", resp.data);
      console.log("Fetch Artiste User Catalogue Dashboard History", respHistoryDashboard.data);
      setArtistesUser((val) => ({ ...val, catalogues: resp.data, dashboardHistory: respHistoryDashboard.data }));
    } catch (error) {
      console.log("Error loadin user extra data", error);
    }
  };

  const fetchUserDashboardHistory = async () => {
    try {
      const historyData = await baseInstanceAPI.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log("Dasboard data is... ", historyData.data);
      setUser((val) => ({ ...val, dashboardHistory: historyData.data }));
    } catch (error) {
      console.log("Error loadin user extra data: History Data", error);
    }
  };
  const fetchUserRaffleTickets = async () => {
    try {
      const raffleData = await baseInstanceAPI.get("/dashboard/raffle-tickets", {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log("User Rafffle Ticket data is... ", raffleData.data);
      setUser((val) => ({ ...val, raffleTickets: raffleData.data }));
    } catch (error) {
      console.log("Error loadin user extra data: History Data", error);
    }
  };

  const fetchUserDetails = async () => {
    // User profile details
    try {
      const userResp = await baseInstanceAPI.get("/profile/dashboard", {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log("user is in layount ", userResp.data);
      setUser((val) => ({ ...val, data: userResp.data }));
    } catch (error) {
      console.log("Error loadin user extra data", error);
    }
  };

  const setAppSection = () => {
    if (router.route.includes("/dashboard")) {
      setSection("User");
    }
    if (router.route.includes("admin")) {
      setSection("Admin");
    }
    if (router.route.includes("/catalogues/dashboard") || router.route.includes("/catalogues/create")) {
      setSection("Artiste");
    }
  };

  const loadAppSectionData = () => {
    if (section == "User" && !user.data) {
      fetchUserDetails();
      fetchUserDashboardHistory();
      fetchUserRaffleTickets();
      fetchKudibarEvents();
    } else if (section == "Artiste" && !artistesUser.data) {
      fetchArtisteUserCatalogues();
    } else if (section == "Admin" && !adminUser.data) {
    }
  };

  // Function to set the user type base on the section of the App: User, Admin, Artiste
  const setUserOnLogin = (type, data) => {
    if (type == "User") {
      console.log("user in setusr onlogin is: type user -----------", data);
      setUser((val) => ({ ...val, data: data }));
      // fetchUserDetails();
      fetchUserDashboardHistory();
      fetchUserRaffleTickets();
      fetchKudibarEvents();
      setSection("User");
    }
    if (type == "Artiste") {
      fetchArtisteUserCatalogues();
      setArtistesUser((val) => ({ ...val, data: data }));
      setSection("Artiste");
    }
    if (type == "Admin") {
      fetchArtisteUserCatalogues();
      setSection("Admin");
      setAdminUser((val) => ({ ...val, data: data }));
    }
  };

  // Check section and redirect to appropraite Section Login Page i.e Artiste: User: Admin sigin Page
  const redirectLoginSection = () => {
    if (section == "User") {
      return router.push("/");
      // return router.push("/auth/sign-in");
    } else if (section == "Admin") {
      return; // router.replace("/auth/sign-up");
    } else if (section == "Artiste") {
      return router.replace("/artistes/sign-in");
    }
  };

  useEffect(() => {
    fetchArtistes();
    fetchAllCatalogues();
    setAppSection();
    // if (!isLoggedIn()) {
    //   return redirectLoginSection();
    // }
    if (isLoggedIn()) {
      loadAppSectionData();

      // Timeout to call loadAppSection incase of delayed webhook i.e tries to get updated value after app loads
      setTimeout(() => {
        loadAppSectionData();
      }, 2000);
    }
  }, [section]);
  return (
    <DataContext.Provider
      value={{
        allArtisteCatalogues,
        artistes,
        user,
        artistesUser,
        adminUser,
        kudibarEvents,
        setUserOnLogin,
        section: section,
        setSection: setSection,
        fetchArtisteUserCatalogues,
        fetchUserDetails,
        fetchKudibarEvents,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default AppDataProvider;
