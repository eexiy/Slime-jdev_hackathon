import React from "react";
import "./Content.scss";

export const Content = ({ img, descr }) => {
  return (
    <div className="card">
      <img src={img} alt="" className="main__img" />
      <p className="main__description">{descr}</p>
    </div>
  );
};
