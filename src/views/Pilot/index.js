import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "/services";
import "./index.scss";

const Pilot = () => {
  const { id } = useParams();
  const [pilot, setPilot] = useState({});

  useEffect(() => {
    service.getPilotById(id).then((pilot) => {
      setPilot(pilot);
    });
  }, []);

  return (
    <div className="pilot">
    </div>
  );
};

export default Pilot;
