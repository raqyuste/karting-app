import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service from "/services";
import "./index.scss";

import Avatar from '/components/Avatar';

const Ranking = () => {
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    service.getPilots().then((items) => {
      setPilots(items);
    });
  }, []);

  return (
    <div className="ranking">
      <div>
        <h1 className="title">World Kart Championship</h1>
      </div>
      <div className="pilots-list">
        {pilots.map((pilot) => {
          return (
            <Link
              to={`/pilot/${pilot._id}`}
              key={pilot._id}
              className="pilots-list__row"
            >
              <div className="pilots-list__column">{pilot.position}.</div>
              <div className="pilots-list__column">
                <Avatar height="32" width="32" src={pilot.picture}></Avatar>
              </div>
              <div className="pilots-list__column">
                <div className="pilots-list__name">{pilot.name}</div>
                <div className="pilots-list__team">{pilot.team}</div>
              </div>
              <div className="pilots-list__column">
                {Math.round(pilot.points)} points
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;