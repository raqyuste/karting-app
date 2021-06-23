import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

import Avatar from "/components/Avatar";
import Row from "../Row";
import Loading from "../Loading";

const List = ({ pilots, loading }) => {
  return (
    <div className="pilots-list">
      {loading ? (
        <Loading></Loading>
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
  loading: PropTypes.bool,
};

export default List;
