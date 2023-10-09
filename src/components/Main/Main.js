import React from "react";
import Header from "../Header/Header";
import Cover from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Cover />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  );
};

export default Main;
