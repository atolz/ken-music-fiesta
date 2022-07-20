import React from "react";
import LandPageLayout from "../Components/Layout/LandPageLayout";
import PrivacyContentDetails from "../Components/Pages/Privacy/Content";
import PrivacyNav from "../Components/Pages/Privacy/nav";

const Container = ({ children }) => {
  return <div className="max-w-[182rem] mx-auto w-full px-[4rem] sidebar:px-[10rem] relative">{children}</div>;
};

const PrivacyPolicy = () => {
  const topics = [
    { title: "The privacy policy will help you better understand how we collect user data", titleAlias: "Privacy Policy", text: "" },
    { title: "Privacy Summary", titleAlias: "Privacy Summary" },
    { title: "Data we collect", titleAlias: "Data we collect" },
  ];
  return (
    <Container>
      <div className="grid sidebar:grid-cols-[1fr,2fr] grid-cols-1 gap-[5rem] relative mt-10 justify-center place-content-center">
        <PrivacyNav nav={topics.map((el) => el.titleAlias)}></PrivacyNav>
        <PrivacyContentDetails nav={topics}></PrivacyContentDetails>
      </div>
    </Container>
  );
};
PrivacyPolicy.Layout = LandPageLayout;
export default PrivacyPolicy;
