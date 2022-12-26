import React, { useContext, useState } from "react";
import { testAuthContext } from "../testContexts/TestAuthContextProvider";
import "./Alert.scss";
import logo from "../../assets/1233.png";
import { useNavigate } from "react-router-dom";

const TestLoginPage = () => {
  const { login } = useContext(testAuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const [access, setAccess] = useState(false);

  function loginUserObj() {
    if (!email.trim() || !password.trim()) {
      setError(true);
      return;
    }
    let userObj = new FormData();
    userObj.append("email", email);
    userObj.append("password", password);
    login(userObj, email, navigate);
    setAccess(true);
  }
  return (
    <div className="modalDiv" style={{ overflow: "hidden" }}>
      <div className="modalDivLog">
        <img src={logo} alt="" />
        <div className="blockBackground">
          <div className="firstFlow"></div>
          <div className="secondFlow"></div>
          <div className="thirdFlow"></div>
        </div>
        <div className="modalInnerDivLog">
          <div className="background"></div>
          <div className="innerDivLog">
            <div className="inputLog">
              <div className="titleDiv">
                <h4>Ваша почта</h4>
              </div>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="inputLog">
              <div className="titleDiv">
                <h4>Пароль</h4>
              </div>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                loginUserObj();
              }}
              className="modalBtn">
              Войти
            </button>

            <div className="modalForggot">Забыли пароль?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLoginPage;
