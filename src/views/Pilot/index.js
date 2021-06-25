import React, { useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import service from "/services";
import useService from "/hooks/useService";
import {
  enterFullScreen,
  exitFullScreen,
  INTEVAL_SCREEN_TIME,
} from "/utils/display";

import "./index.scss";

import Avatar from "/components/Avatar";
import ErrorMessage from "/components/ErrorMessage";
import Races from "./Races";
import { DisplayModeContext } from "/context/DisplayModeContext";

const Pilot = () => {
  const { id } = useParams();
  const modeContext = useContext(DisplayModeContext);
  const history = useHistory();

  const [{ data: pilot, isLoading, isError }] = useService(
    service.getPilotById.bind(null, id),
    []
  );

  useEffect(() => {
    let timeout;

    if (modeContext.displayMode) {
      enterFullScreen();

      timeout = setTimeout(() => {
        history.push(`/`);
      }, INTEVAL_SCREEN_TIME);
    } else {
      clearTimeout(timeout);
      exitFullScreen();
    }
  }, [modeContext.displayMode]);

  return (
    <div className="pilot">
      <Link to="/">
        <h1 className="pilot__title"> ← General Ranking</h1>
      </Link>
      {!isLoading &&
        (isError ? (
          <ErrorMessage />
        ) : (
          <div>
            <div className="info">
              <div className="info__main">
                <Avatar height={64} width={64} src={pilot.picture} />
                <div>
                  <h2 className="name">
                    {`${pilot.name}, `}
                    <span className="age"> {pilot.age}</span>
                  </h2>
                  <h3 className="team">{pilot.team}</h3>
                </div>
              </div>
              <div className="info__extra">
                <h3>{pilot.position}º clasified</h3>
                <h3>{Math.round(pilot.points)} points</h3>
              </div>
            </div>
            <Races races={pilot.races} />
          </div>
        ))}
    </div>
  );
};

export default Pilot;
