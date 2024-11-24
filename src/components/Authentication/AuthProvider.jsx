import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userInfo) => {
    setUser(userInfo);
  };
  const logout = () => setUser(null);

  const users = [
    { username: "student", password: "student", role: "student" },
    { username: "instructor", password: "instructor", role: "instructor" },
    { username: "admin", password: "admin", role: "admin" },
  ];

  const hasPermission = (role, reqrol) => {
    if (reqrol.includes(role)) return true;
    else return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider };

// import React, { createContext, useState, useEffect } from "react";
// import jwt_decode from "jsonwebtoken";

// // Create context
// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if token exists in localStorage and decode it
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decoded = jwt_decode(token);
//       setUser(decoded); // Set the decoded token information (user & role)
//     }
//   }, []);

//   const login = (token) => {
//     // Store token and decode user data
//     localStorage.setItem("token", token);
//     const decoded = jwt_decode(token);
//     setUser(decoded);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   const isAuthenticated = () => {
//     return user !== null;
//   };

//   const hasRole = (role) => {
//     return user && user.role === role;
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, login, logout, isAuthenticated, hasRole }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };
