import React from "react";
import { useNavigate } from "react-router-dom";
import "./Content.scss";

export const Content = ({ img, descr, slug, genre }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        if (slug) {
          navigate(`/songs/${slug}`);
        }
        if (genre) {
          navigate(`/genres/${genre}`);
        }
      }}>
      {/* <img src={img} alt="" className="main__img" /> */}
      <div
        className="main__img"
        style={{
          background: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
      <p className="main__description">{descr}</p>
    </div>
  );
};
