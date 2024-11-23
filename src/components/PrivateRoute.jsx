import React, { useContext } from "react";
import { Route, Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ component: Component, requiredRole, ...rest }) => {
  const { isAuthenticated, hasRole } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated()) {
          return <Link to="/login" />;
        }

        if (requiredRole && !hasRole(requiredRole)) {
          return <Link to="/unauthorized" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
