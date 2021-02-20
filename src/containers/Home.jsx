import React from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import CardHouse from "../components/CardHouse";
function Home() {
  return (
    <React.Fragment>
      <Header />
      <Search />
      <CardHouse />
      <CardHouse />
      <CardHouse />
    </React.Fragment>
  );
}

export default Home;
