import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);  
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);











































// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     token: null,
//     isAuthenticated: false,
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setAuth({ token, isAuthenticated: true });
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('token', token);
//     setAuth({ token, isAuthenticated: true });
//     navigate('/todos');
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setAuth({ token: null, isAuthenticated: false });
//     navigate('/login');
//   };

//   const value = { ...auth, login, logout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => useContext(AuthContext);
