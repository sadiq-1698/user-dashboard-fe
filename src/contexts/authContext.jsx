import React, { useState, useContext, useEffect } from "react";

import { ACCESS_TOKEN, USER_INFO } from "../globals/constants";

import { helloApp } from "../api/helloApp";

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

    if (authToken) localStorage.setItem(ACCESS_TOKEN, authToken);

    let existingUserInfo = JSON.parse(localStorage.getItem(USER_INFO));

    if (existingUserInfo) userInfo = { ...existingUserInfo, ...userInfo };

    if (userInfo) localStorage.setItem(USER_INFO, JSON.stringify(userInfo));

    setIsLoggedIn(true);
  }

  function getUser() {
    let authToken = localStorage.getItem(ACCESS_TOKEN);

    let userInfo = JSON.parse(localStorage.getItem(USER_INFO));

    return { ...userInfo, authToken };
  }

  function logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_INFO);
    setIsLoggedIn(false);
  }

  useEffect(() => {
    const triggerServer = async () => {
      await helloApp();
    };
    triggerServer();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, setUser, getUser }}>
      {children}
    </AuthContext.Provider>
  );
}
