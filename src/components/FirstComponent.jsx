import React from "react";
import ReactDom from "react-dom";
import "../assets/styles/App.scss";
import Header from "../components/Header";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";

function FirstComponent() {
  return (
    <div>
      <Header />
      <Home />
      <NotFound />
    </div>
  );
}

export default FirstComponent;
