import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Row from "../Row";

const PLACEHOLDER_ROWS = 3;

const Loading = () => {
  const [highlightedRow, setHighlightedRow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedRow((highlightedRow + 1) % 3);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [highlightedRow]);

  return [...Array(PLACEHOLDER_ROWS)].map((row, index) => (
    <Row
      key={index}
      className={highlightedRow === index ? "row--higlighted" : ""}
    />
  ));
};

Loading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Loading;
