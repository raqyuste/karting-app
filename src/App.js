import React, { useContext } from "react";

import Router from "./router";
import LoaderScreen from "./components/LoaderScreen";
import { DisplayModeContext } from "./context/DisplayModeContext";

import display from "/assets/display.svg";
import "./App.scss";

const App = () => {
  const modeContext = useContext(DisplayModeContext);

  return (
    <div className="app">
      <LoaderScreen />
      <button
        className={`display-button ${
          modeContext.displayMode ? "display-button--active" : ""
        }`}
        onClick={modeContext.switchMode}
      >
        <img src={display} alt="display" />
      </button>
      <Router />
    </div>
  );
};

export default App;
