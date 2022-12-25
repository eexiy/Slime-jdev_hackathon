import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Button";
import "./Content.scss";

export const Content = () => {
  const navigate = useNavigate();

  return (
    <div className="header__content">
      <h1 className="header__content-title">
        Предлагаем лучшую музыку слушателям по всему миру
      </h1>
      {localStorage.getItem("tokens") ? (
        <></>
      ) : (
        <div className="header__content-btns">
          <Button link="/test-login" children="Войти" />
          <Button link="/test-register" children="Зарегистрироваться" />
        </div>
      )}
    </div>
  );
};
