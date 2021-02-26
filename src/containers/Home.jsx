import React from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import CardHouse from "../components/CardHouse";
import "../assets/styles/containers/home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <React.Fragment>
      <Header />
      <Search />
      <div className="content__house">
        <Link to="/detailHouse">
          <CardHouse />
        </Link>
        <Link to="/detailHouse">
          <CardHouse />
        </Link>
        <Link to="/detailHouse">
          <CardHouse />
        </Link>
        <Link to="/detailHouse">
          <CardHouse />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
