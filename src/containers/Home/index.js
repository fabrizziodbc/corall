import React, { useState } from "react";
import { Loading } from "../../components/Loading";
import { Carrousel } from "../../components/Carrousel";
import { Contact } from "../Contact";
const Home = () => {
  return (
    <>
      {/*  <Loading /> */}
      <Carrousel />

      <Contact />
    </>
  );
};

export { Home };
