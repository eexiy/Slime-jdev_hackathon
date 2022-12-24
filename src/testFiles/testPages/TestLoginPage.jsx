import React, { useContext, useState } from "react";
import { testAuthContext } from "../testContexts/TestAuthContextProvider";
import "./Alert.scss";
import logo from "../../assets/1233.png";

const TestLoginPage = () => {
  const { login } = useContext(testAuthContext);

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
    login(userObj, email);
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
                type="text"
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
        {error ? (
          <div id="error-box">
            <div className="dot" onClick={() => setError(false)}></div>
            <div className="dot two" onClick={() => setError(false)}></div>
            <div className="face2">
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className="mouth sad"></div>
            </div>
            <div className="shadow move"></div>
            <div className="message">
              <h1 className="alert">Error!</h1>oh no, something went wrong.
            </div>
            <button className="button-box">
              <h1 className="red" onClick={() => setError(false)}>
                try again
              </h1>
            </button>
          </div>
        ) : (
          <></>
        )}
        {access ? (
          <div id="success-box">
            <div class="dot"></div>
            <div class="dot two"></div>
            <div class="face">
              <div class="eye"></div>
              <div class="eye right"></div>
              <div class="mouth happy"></div>
            </div>
            <div class="shadow scale"></div>
            <div class="message">
              <h1 class="alert">Success!</h1>
              <p>yay, everything is working.</p>
            </div>
            <button class="button-box">
              <h1 class="green">continue</h1>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TestLoginPage;
