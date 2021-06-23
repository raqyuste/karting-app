import React from "react";
import "./index.scss";

const Races = ({races}) => {
  return (
    <div className="races">
      {races?.map((race) => (
        <div className="race" key={race.name}>
          <div>
            <h3 className="race__name">{race.name}</h3>
            <h4 className="race__position">{race.position}º position</h4>
          </div>
          <h4 className="race__time">{race.time}</h4>
        </div>
      ))}
    </div>
  );
};

export default Races;
