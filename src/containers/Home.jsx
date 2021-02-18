import React from "react";
import Search from "../components/Search";
import CardHouse from "../components/CardHouse";
function Home() {
  return (
    <React.Fragment>
      <Search />
      <CardHouse />
      <CardHouse />
      <CardHouse />
    </React.Fragment>
  );
}

export default Home;
