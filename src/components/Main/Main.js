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
      <main>
      <Cover />
      <AboutProject />
      <Techs />
      <AboutMe />
      </main>
      <Footer />
    </>
  );
};

export default Main;
