import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children, requiredRole }) => {
  const { user, hasPermission } = useContext(AuthContext);

  if (!user) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/" />;
  }

  if (requiredRole && !hasPermission(user.role, requiredRole)) {
    // Redirect to unauthorized page if the user does not have the required role
    return <Navigate to="/unauthorized" />;
  }

  // Render the child component if authenticated and authorized
  return children;
};

export default PrivateRoute;
