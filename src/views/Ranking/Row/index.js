import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Row = ({ children, className }) => {
  return <div className={`row ${className}`}>{children}</div>;
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default Row;
