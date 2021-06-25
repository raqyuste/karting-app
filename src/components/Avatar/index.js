import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Avatar = ({ src, height, width }) => {
  return <img className="avatar" height={height} width={width} src={src}></img>;
};

Avatar.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Avatar;
