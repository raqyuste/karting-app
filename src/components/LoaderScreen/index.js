import React, { useEffect } from "react";
import car from "/assets/car.svg";
import "./index.scss";

const { useState } = React;

const LOADING_ANIMATION = {
  ON: "loading--animation-on",
};

const LoaderScreen = () => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setTimeout(() => setAnimation(LOADING_ANIMATION.ON), 500);
  }, []);

  return (
    <div className={`loading ${animation}`}>
      <div className="upper-curtain"></div>
      <img className="car" src={car} alt="car" />
      <div className="bottom-curtain"></div>
    </div>
  );
};

export default LoaderScreen;
