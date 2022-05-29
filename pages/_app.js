import React from "react";

import "../styles/globals.scss";
import "../styles/style.css";
import "../styles/components.scss";
import "../styles/typography.scss";
import "../styles/mui.scss";
import "../styles/animations.scss";

import { StyledEngineProvider } from "@mui/material/styles";
import AppProvider from "../store";
import Utils from "../Components/Utils";
import { PopUpContextProvider } from "../Context/PopUps";
import AppDataProvider from "../Context/fetchData";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <AppProvider>
        <AppDataProvider>
          <PopUpContextProvider>
            <Utils>
              {Component.Layout ? (
                <Component.Layout>
                  <Component {...pageProps} />
                </Component.Layout>
              ) : (
                <Component {...pageProps} />
              )}
            </Utils>
          </PopUpContextProvider>
        </AppDataProvider>
      </AppProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
