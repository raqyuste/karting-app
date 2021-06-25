import React from "react";
import ReactDOM from "react-dom";
import "../mockedApi";

import "./index.scss";

import App from "./App";
import { DisplayModeContextProvider } from "./context/DisplayModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DisplayModeContextProvider>
      <App />
    </DisplayModeContextProvider>
  </React.StrictMode>,
  document.querySelector("karting-app")
);
