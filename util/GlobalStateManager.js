import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [globalUser, setUser] = useState();
  const [readState, setReadState] = useState(0);

  const setGlobalUser = (username) => {
    setUser(username);
  };

  const setGlobalRead = (referenceVariable) => {
    setReadState(referenceVariable);
  };

  return (
    <UserContext.Provider
      value={{ globalUser, readState, setGlobalUser, setGlobalRead }}
    >
      {children}
    </UserContext.Provider>
  );
};
