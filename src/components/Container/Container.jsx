import React from "react";
import "./Container.scss";
import "../../testFiles/testPages/Alert.scss";

export const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="blockBackground">
        <div className="firstFlow"></div>
        <div className="secondFlow"></div>
        <div className="thirdFlow"></div>
      </div>
      {children}
    </div>
  );
};
