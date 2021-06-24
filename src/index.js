import React from "react";
import ReactDOM from "react-dom";
import "./api";
import LoaderScreen from "./components/LoaderScreen";
import "./index.scss";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <LoaderScreen />
      <Router />
    </div>
  </React.StrictMode>,
  document.querySelector("karting-app")
);
