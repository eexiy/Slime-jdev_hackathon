import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>
      <div className="ellipse3"></div>
      <div className="register"></div>
      <div className="reg">
        <h3>Ваша почта</h3>
        <input type="text" />
        <h3>Пароль</h3>
        <input type="text" />
        <button>Войти</button>
        <h4>Забыли пароль?</h4>
      </div>
    </>
  );
};

export default Register;
