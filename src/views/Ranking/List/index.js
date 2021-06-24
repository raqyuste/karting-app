import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

import Avatar from "/components/Avatar";
import Row from "../Row";
import Loading from "../Loading";

const List = ({ pilots, isLoading, error }) => {
  return (
    <div className="pilots-list">
      {isLoading ? (
        <Loading></Loading>
      ) : error ? (
        <p>{error}</p>
      ) : (
        pilots.map((pilot) => {
          return (
            <Link to={`/pilot/${pilot._id}`} key={pilot?._id}>
              <Row className="pilots-list__row">
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
              </Row>
            </Link>
          );
        })
      )}
    </div>
  );
};

List.propTypes = {
  pilots: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default List;
