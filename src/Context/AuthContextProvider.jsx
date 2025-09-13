// import { createContext, useState } from "react";

// export const authContext = createContext()

// const AuthContextProvider = ({children}) => {

// const [user, setUser] = useState(null)

// return (
//     <authContext value={{user, setUser}}>
// {children}
//     </authContext>
// )
// }

// export default AuthContextProvider


import { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;