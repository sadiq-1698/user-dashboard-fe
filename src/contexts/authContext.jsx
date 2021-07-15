import React, { useState, useContext } from "react";
import { ACCESS_TOKEN, USER_INFO } from "../globals/constants";

const AuthContext = React.createContext();

// custom hook for using auth status
export function useAuth() {
  return useContext(AuthContext);
}

// context provider functions
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(ACCESS_TOKEN) != null
  );

  function setUser(userData) {
    let { authToken, userInfo } = userData;
    localStorage.setItem(ACCESS_TOKEN, authToken);
    localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
    setIsLoggedIn(true);
  }

  function getUser() {
    let userInfo = JSON.parse(localStorage.getItem(USER_INFO));
    return userInfo;
  }

  function logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, setUser, getUser }}>
      {children}
    </AuthContext.Provider>
  );
}
