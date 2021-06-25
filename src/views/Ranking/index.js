import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  enterFullScreen,
  exitFullScreen,
  INTEVAL_SCREEN_TIME,
} from "/utils/display";

import "./index.scss";

import List from "./List";
import { DisplayModeContext } from "/context/DisplayModeContext";
import useService from "/hooks/useService";
import services from "/services";

const Ranking = () => {
  const modeContext = useContext(DisplayModeContext);
  const history = useHistory();

  const [{ data: pilots, isLoading, isError }] = useService(
    services.getPilots,
    []
  );

  useEffect(() => {
    let timeout;

    if (modeContext.displayMode) {
      if (pilots.length) {
        enterFullScreen();

        timeout = setTimeout(() => {
          const randomPilotIndex =
            Math.floor(Math.random() * pilots.length) + 1;

          history.push(`/pilot/${pilots[randomPilotIndex]._id}`);
        }, INTEVAL_SCREEN_TIME);
      }
    } else {
      clearTimeout(timeout);
      exitFullScreen();
    }
  }, [modeContext.displayMode, pilots]);

  return (
    <div className="ranking">
      <div>
        <h1 className="ranking__title">World Kart Championship</h1>
      </div>
      <List pilots={pilots} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default Ranking;
