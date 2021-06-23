import React from "react";
import "./index.scss";

const Avatar = ({src, height, width}) => {
  return (
    <img height={height} width={width} src={src}></img>
  );
};

export default Avatar;
