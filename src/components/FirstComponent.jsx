import React from "react";

import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Footer from "../components/Footer";
import CardHouse from "../components/CardHouse";

function FirstComponent() {
  return (
    <div>
      <Header />
      <Search />
      <CardHouse />
      <Home />
      <NotFound />
      <Footer />
    </div>
  );
}

export default FirstComponent;
