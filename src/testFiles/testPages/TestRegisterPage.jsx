import React, { useState } from "react";
import {
  testAuthContext,
  useTestAuth,
} from "../testContexts/TestAuthContextProvider";
import { useContext } from "react";
import "./Alert.scss";
import logo from "../../assets/1233.png";

const TestRegisterPage = () => {
  const { register } = useContext(testAuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repassword, setRePassword] = useState("");

  function newUserObj() {
    let userObj = new FormData();
    userObj.append("username", username);
    userObj.append("email", email);
    userObj.append("password", password);
    userObj.append("password_confirm", repassword);
    register(userObj);
  }

  return (
    <div className="modalDiv">
      <div className="modalDivReg">
        <div className="blockBackground">
          <div className="firstFlow"></div>
          <div className="secondFlow"></div>
          <div className="thirdFlow"></div>
        </div>
        <img src={logo} alt="" />

        <div className="modalInnerDivReg" style={{ height: "800px" }}>
          <div className="background"></div>
          <div className="innerDivReg">
            <div className="inputReg">
              <div className="titleDiv">
                <h4>Имя</h4>
              </div>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                style={{ color: "black" }}
              />
            </div>
            <div className="inputReg">
              <div className="titleDiv">
                <h4>Ваша почта</h4>
              </div>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ color: "black" }}
              />
            </div>
            <div className="inputReg">
              <div className="titleDiv">
                <h4>Пароль</h4>
              </div>
              <input
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ color: "black" }}
              />
            </div>
            <div className="inputReg">
              <div className="titleDiv">
                <h4>Повторите пароль</h4>
              </div>
              <input
                type="text"
                value={repassword}
                onChange={e => setRePassword(e.target.value)}
                style={{ color: "black" }}
              />
            </div>
            <button
              onClick={() => {
                newUserObj();
              }}
              className="modalBtn">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestRegisterPage;
