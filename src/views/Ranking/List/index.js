import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

import Avatar from "/components/Avatar";
import ErrorMessage from "/components/ErrorMessage";

const List = ({ pilots, isLoading, isError }) => {
  return (
    <div className="pilots-list">
      {!isLoading &&
        (isError ? (
          <ErrorMessage />
        ) : (
          pilots.map((pilot) => {
            return (
              <Link to={`/pilot/${pilot._id}`} key={pilot?._id}>
                <div className="pilots-list__row">
                  <div className="pilots-list__column">{pilot.position}.</div>
                  <div className="pilots-list__column">
                    <Avatar height={32} width={32} src={pilot.picture} />
                  </div>
                  <div className="pilots-list__column">
                    <div className="name">{pilot.name}</div>
                    <div className="team">{pilot.team}</div>
                  </div>
                  <div className="pilots-list__column">
                    {Math.round(pilot.points)} points
                  </div>
                </div>
              </Link>
            );
          })
        ))}
    </div>
  );
};

List.propTypes = {
  pilots: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

export default List;
