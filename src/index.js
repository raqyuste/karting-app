import React from "react";
import ReactDOM from "react-dom";
import "./api";
import Loader from "./components/Loader";
import "./index.scss";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <Loader />
      <Router />
    </div>
  </React.StrictMode>,
  document.querySelector("karting-app")
);
