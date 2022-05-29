import React, { createContext, useEffect, useState } from "react";
import { baseInstanceAPI } from "../axios";
import { useRouter } from "next/router";
import useLocalStorage from "../hooks/useLocalStorage";

export const DataContext = createContext({
  artisteCatalogues: {},
  artistes: {},
  user: {},
  artistesUser: {},
  adminUser: {},
  setUserOnLogin: (type, data) => {},
  section: "",
  fetchArtisteUserCatalogues: () => {},
});

const AppDataProvider = ({ children }) => {
  const router = useRouter();
  const { getLocalStorage, isLoggedIn } = useLocalStorage();
  const [section, setSection] = useState(""); // Sections: User, Admin, Artiste
  const [artistes, setArtistes] = useState({
    data: [],
    error: false,
    loading: true,
    hash: {},
  });
  const [artisteCatalogues, setArtisteCatalogue] = useState({
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
  });
  const [artistesUser, setArtistesUser] = useState({
    data: null,
    catalogues: [],
    dashboardHistory: {},
  });

  const [adminUser, setAdminUser] = useState({
    data: null,
  });

  const fetchArtistes = async () => {
    let artistes = [];
    setArtistes((val) => ({ ...val, error: false, loading: true }));
    try {
      const resp = await baseInstanceAPI.get("/artist");
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
        console.log("Values is ", value);
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

  const fetchArtisteUserCatalogues = async () => {
    try {
      const resp = await baseInstanceAPI.get("/artist-catalogue/dashboard/catalogue", {
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
      const historyData = await baseInstanceAPI.get("/ticket/get-raffle-history", {
        headers: {
          Authorization: `Bearer ${getLocalStorage("token")}`,
        },
      });
      console.log("Raffle history data is... ", historyData.data);
      setUser((val) => ({ ...val, dashboardHistory: historyData.data }));
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
    if (router.route.includes("admin")) {
      setSection("Admin");
    } else if (router.route.includes("catalogue") || router.route.includes("artistes")) {
      setSection("Artiste");
    } else {
      setSection("User");
    }
  };

  const loadAppSectionData = () => {
    if (section == "User" && !user.data) {
      fetchUserDetails();
      fetchUserDashboardHistory();
    } else if (section == "Artiste" && !artistesUser.data) {
      fetchArtisteUserCatalogues();
    } else if (section == "Admin" && !adminUser.data) {
    }
  };

  // Function to set the user type base on the section of the App: User, Admin, Artiste
  const setUserOnLogin = (type, data) => {
    if (type == "User") {
      setUser((val) => ({ ...val, data: data }));
      fetchUserDetails();
      fetchUserDashboardHistory();
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
    } else if (section == "Admin") {
      return; // router.replace("/auth/sign-up");
    } else if (section == "Artiste") {
      return router.replace("/artistes/sign-in");
    }
  };

  useEffect(() => {
    fetchArtistes();
    setAppSection();
    if (!isLoggedIn()) {
      return redirectLoginSection();
    }
    if (isLoggedIn()) {
      loadAppSectionData();
    }
  }, [section]);
  return <DataContext.Provider value={{ artisteCatalogues, artistes, user, artistesUser, adminUser, setUserOnLogin, section: section, fetchArtisteUserCatalogues }}>{children}</DataContext.Provider>;
};

export default AppDataProvider;