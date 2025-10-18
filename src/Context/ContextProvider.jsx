import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, auth } from "../firebase/config.js";

export const Context = createContext();


const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

useEffect(() => {
  const userLoggedin = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  return () => userLoggedin()
  }, [])

  return (
    <Context.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;