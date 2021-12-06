import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Default");

  const setGlobalUser = (username) => {
    setUser(username);
  };

  return (
    <UserContext.Provider value={{ user, setGlobalUser }}>
      {children}
    </UserContext.Provider>
  );
};
