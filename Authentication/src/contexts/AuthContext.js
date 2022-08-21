import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: '',
  login: (token) => {
  },
  logout: () => {
  },
});

export const AuthContextProvider = (props) => {

  const [token, setToken] = useState(null);
  const isLoggedIn = Boolean(token);

  const login = (authToken) => {
    setToken(authToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
      <AuthContext.Provider value={{
        token, isLoggedIn, login, logout,
      }}>
        {props.children}
      </AuthContext.Provider>
  );
};

export default AuthContext;