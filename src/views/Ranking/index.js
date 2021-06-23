import React, { useEffect, useState } from "react";
import service from "/services";
import "./index.scss";
import List from "./List";

const Ranking = () => {
  const [pilots, setPilots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    service.getPilots().then((items) => {
      setPilots(items);
      setLoading(false);
    });
  }, []);

  return (
    <div className="ranking">
      <div>
        <h1 className="ranking__title">World Kart Championship</h1>
      </div>
      <List pilots={pilots} loading={loading} />
    </div>
  );
};

export default Ranking;
