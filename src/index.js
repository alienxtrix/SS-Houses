import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import FirstComponent from "./components/FirstComponent";
import App from "./routes/App";
// import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { configureStore } from "./store";

const store = configureStore();
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Provider
    // domain={domain}
    // clientId={clientId}
    // redirectUri={window.location.origin}
    store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
