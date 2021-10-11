import React, { useState } from "react";
import { Loading } from "../../components/Loading";
import { Carousel } from "../../components/Carousel";
import { Contact } from "../Contact";
import { Layout } from "../../components/Layout";
const Home = () => {
  return (
    <>
      {/*  <Loading /> */}
      <Carousel />
      <Contact />
    </>
  );
};

export { Home };
