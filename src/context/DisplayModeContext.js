import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

const initialState = false;

export const DisplayModeContext = createContext();

export const DisplayModeContextProvider = ({ children }) => {
  const [displayMode, setDisplayMode] = useState(initialState);

  return (
    <DisplayModeContext.Provider
      value={{
        displayMode: displayMode,
        switchMode: () => setDisplayMode((prevState) => !prevState),
      }}
    >
      {children}
    </DisplayModeContext.Provider>
  );
};

DisplayModeContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const ModeContextConsumer = DisplayModeContext.Consumer;
