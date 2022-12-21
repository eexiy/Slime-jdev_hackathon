import axios from "axios";
import React, { useContext, useState } from "react";

export const testAuthContext = React.createContext();
export const useTestAuth = () => useContext(testAuthContext);

const API = "http://34.116.147.191";

const TestAuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  async function register(userObj) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/register/`, userObj);
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function login(loginObj, email) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/login/`, loginObj);
      console.log(res);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <testAuthContext.Provider
      value={{
        loading,

        setLoading,
        register,
        login,
      }}>
      {children}
    </testAuthContext.Provider>
  );
};
export default TestAuthContextProvider;
