import React, { useEffect, useState } from "react";
import service from "/services";
import "./index.scss";
import List from "./List";

const Ranking = () => {
  const [pilots, setPilots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    service
      .getPilots()
      .then((items) => {
        setPilots(items);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="ranking">
      <div>
        <h1 className="ranking__title">World Kart Championship</h1>
      </div>
      <List pilots={pilots} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Ranking;
