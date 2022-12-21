import React, { useState } from "react";
import {
  testAuthContext,
  useTestAuth,
} from "../testContexts/TestAuthContextProvider";
import { useContext } from "react";

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
    <div>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ color: "black" }}
      />
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
      <input
        type="text"
        value={repassword}
        onChange={e => setRePassword(e.target.value)}
        style={{ color: "black" }}
      />
      <button
        onClick={() => {
          newUserObj();
        }}>
        Register
      </button>
    </div>
  );
};

export default TestRegisterPage;
