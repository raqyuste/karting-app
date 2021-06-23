import React from "react";
import ReactDOM from "react-dom";
import "./api";
import "./index.scss";
import Router from "./router";
import Loader from "./components/Loader";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <div></div>
    </div>
  </React.StrictMode>,
  document.querySelector("karting-app")
);
