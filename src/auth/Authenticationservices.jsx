import React, { createContext, useEffect, useState } from "react";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  // responsive breakpoints
  const [matchesMobUi, setMatchesMobUi] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setMatchesMobUi(e.matches));
  }, []);
  //
  //
  const [matchesMobUiTest, setMatchesMobUiTest] = useState(
    window.matchMedia("(min-width: 769px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 769px)")
      .addEventListener("change", (e) => setMatchesMobUiTest(e.matches));
  }, []);

  return (
    <AuthenticationContext.Provider value={{ matchesMobUi, matchesMobUiTest }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
