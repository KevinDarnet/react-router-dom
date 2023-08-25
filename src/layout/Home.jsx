import React from "react";
import Nav from "../components/Nav";
import FirstTitle from "../components/FirstTitle";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <FirstTitle title="Hello World" />
      <MainContainer />
      <Footer title="Soy el Footer" />
    </>
  );
}
