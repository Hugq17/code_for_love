import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isLoggIn }) => {
  return <div>{isLoggIn ? children : <Navigate to="/" />}</div>;
};

export default PrivateRoute;
