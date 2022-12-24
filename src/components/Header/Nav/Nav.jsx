import React, { useState } from "react";
import "./Nav.scss";
import logo from "../../../assets/1233.png";
import { NavLink } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import { RiAccountCircleLine } from "react-icons/ri";
import useOutsideAlerter from "../../CustomFunctions/useOutside";

export const Nav = () => {
  const [modal, setModal] = useState(false);

  const { ref, isShow, setIsShow } = useOutsideAlerter(false);

  return (
    <nav className="nav">
      <NavLink to="/">
        <img className="nav__logo" src={logo} alt="" />
      </NavLink>

      <ul className="nav__list">
        {localStorage.getItem("tokens") ? <SearchBar /> : ""}
        <NavLink to="/" className="nav__list-link">
          Главная
        </NavLink>
        <NavLink to="/genres" className="nav__list-link">
          Жанры
        </NavLink>
        <NavLink to="/artists" className="nav__list-link">
          Артисты
        </NavLink>
        <NavLink to="/albums" className="nav__list-link">
          Альбомы
        </NavLink>
      </ul>
      {localStorage.getItem("tokens") ? (
        <div>
          <RiAccountCircleLine
            className="nav__list-icon"
            onClick={() => {
              setIsShow(!isShow);
              console.log(modal);
            }}
            style={{ cursor: "pointer" }}
          />
          {isShow ? (
            <div className="modalBlock" ref={ref}>
              <div className="modalInnerBlock">
                <div>{localStorage.getItem("email")}</div>
                <div>Мой профиль</div>
                <div
                  onClick={() => {
                    localStorage.removeItem("tokens");
                    localStorage.removeItem("email");
                    window.location.reload();
                  }}>
                  Выйти
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};
