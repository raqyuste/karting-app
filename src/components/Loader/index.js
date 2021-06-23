import React from "react";
import car from "/assets/car.svg";
import "./index.scss";

const { useState } = React;

const LOADING_ANIMATION = {
  ON: "animation-on",
  OFF: "animation-off",
};

const Loader = () => {
  const [animation = LOADING_ANIMATION.OFF, setAnimation] = useState(true);
  setTimeout(() => setAnimation(LOADING_ANIMATION.ON), 500);

  return (
    <div className={`loading ${animation}`}>
      <div className="upper-curtain"></div>
      <img className="car" src={car} alt="car" />
      <div className="bottom-curtain"></div>
    </div>
  );
};

export default Loader;
