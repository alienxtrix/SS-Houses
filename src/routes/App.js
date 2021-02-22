import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../assets/styles/App.scss";
import Layout from "../containers/Layout";
import Search from "../components/Search";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Contact from "../containers/Contact";
import Login from "../containers/Login";
import Register from "../containers/Register";

import CardHouse from "../components/CardHouse";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
