import React, { useEffect, useState } from "react";
import service from "/services";
import "./index.scss";

const Ranking = () => {
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    service.getPilots().then((items) => {
      setPilots(items);
    });
  }, []);

  return (
    <div className="ranking">
    </div>
  );
};

export default Ranking;
