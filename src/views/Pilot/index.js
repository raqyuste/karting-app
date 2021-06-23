import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import service from "/services";
import "./index.scss";

import Avatar from "/components/Avatar";
import Races from "./Races";

const Pilot = () => {
  const { id } = useParams();
  const [pilot, setPilot] = useState({});

  useEffect(() => {
    service.getPilotById(id).then((pilot) => {
      setPilot(pilot);
    });
  }, []);

  return (
    <div className="pilot">
      <Link to="/">
        <h1> ← General Ranking</h1>
      </Link>
      <div className="info">
        <div className="info__main">
          <Avatar height={64} width={64} src={pilot.picture}></Avatar>
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
      <Races races={pilot.races}></Races>
    </div>
  );
};

export default Pilot;
