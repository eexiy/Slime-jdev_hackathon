import React, { useContext, useState } from "react";
import { testAuthContext } from "../testContexts/TestAuthContextProvider";
import "./Alert.scss";
const TestLoginPage = () => {
  const { login } = useContext(testAuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  function loginUserObj() {
    if (!email.trim() || !password.trim()) {
      setError(true);
      return;
    }
    let userObj = new FormData();
    userObj.append("email", email);
    userObj.append("password", password);
    login(userObj, email);
  }
  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ color: "black" }}
      />
      <input
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ color: "black" }}
      />
      <button
        onClick={() => {
          loginUserObj();
        }}>
        Login
      </button>
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
    </div>
  );
};

export default TestLoginPage;
