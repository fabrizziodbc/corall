import React, { useState } from "react";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { Carousel } from "./components/Carousel";
import { Forms } from "./components/Forms";
import { Whatsapp } from "./components/Whatsapp";
import { FindMe } from "./containers/FindMe";
import { Footer } from "./components/Footer";


const probandoAPP = () => {
  return (
    <>
      <Header />
      
      {/*  <Loading /> */}
      <Carousel />
      <Forms />
      <FindMe/>
      <Footer/>
    </>
  );
};

export { probandoAPP };
