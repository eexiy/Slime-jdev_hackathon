import React from "react";
import "./Register2.css";
import logo from "../../assets/logo.png";

const Register2 = () => {
  return (
    <>
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>
      <div className="ellipse3"></div>
      <p>
        <img src={logo} />
      </p>
      <div className="row">
        <div className="register2">
          <h3>Имя</h3>
          <input className="inp" type="text" />
          <h3>Фамилия</h3>
          <input className="inp" type="text" />
          <h3>Ваша почта</h3>
          <input className="inp" type="text" />
          <h3>Пароль</h3>
          <input className="inp" type="text" />
          <h3>Повтарите пароль</h3>
          <input className="inp" type="text" />
          <button className="btn">Зарегистрироваться</button>
        </div>
      </div>
    </>
  );
};

export default Register2;
