import React, { useState } from "react";
import { Loading } from "../../components/Loading";
import { Carrousel } from "../../components/Carrousel";
import { Contact } from "../Contact";
import { Layout } from "../../components/Layout";
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
