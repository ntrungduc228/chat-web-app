import React from "react";
import { isAuthenticated } from "./permissionChecker";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const authed = isAuthenticated(); // isauth() returns true or false based on localStorage

  return !authed ? <Navigate to="/signin" /> : children;
};

export default PrivateRoutes;
