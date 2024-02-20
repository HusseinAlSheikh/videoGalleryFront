import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  token: null,
  user : {} ,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [_token, setToken] = useState(null);
  const [_user, setUser] = useState({});

  useEffect(() => {

    const storedUserToken = localStorage.getItem('TOKEN');
    if (storedUserToken) {
      setToken(storedUserToken);
    }
    const storedUser = localStorage.getItem('USER');
    if(storedUser){
        setUser(storedUser);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USER');
    setToken(null);
    setUser({});
  };

  const loginHandler = (user,token) => {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('USER', user);
    setToken(token);
    setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        token    : _token,
        user     : _user,
        onLogout : logoutHandler,
        onLogin  : loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;