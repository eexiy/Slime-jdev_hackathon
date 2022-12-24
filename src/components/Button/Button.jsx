import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.scss";

export const Button = ({ children, link }) => {
  const navigate = useNavigate();

  return (
    <button
      className="button"
      onClick={() => {
        navigate(link);
      }}>
      {children}
    </button>
  );
};
