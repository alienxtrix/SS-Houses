import React from "react";
import ReactDom from "react-dom";
import "../assets/styles/App.scss";
import Header from "../components/Header";
import Home from "../containers/Home";

function FirstComponent() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default FirstComponent;
