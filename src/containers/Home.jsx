import React from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import CardHouse from "../components/CardHouse";
import "../assets/styles/containers/home.scss";
function Home() {
  return (
    <React.Fragment>
      <Header />
      <Search />
      <div className="content__house">
        <CardHouse />
        <CardHouse />
        <CardHouse />
        <CardHouse />
      </div>
    </React.Fragment>
  );
}

export default Home;
