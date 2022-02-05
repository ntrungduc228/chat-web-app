import React from "react";
import { isAuthenticated } from "./permissionChecker";
import { Navigate } from "react-router-dom";

const AuthRoutes = ({ children }) => {
  const authed = isAuthenticated(); // isauth() returns true or false based on localStorage

  return authed ? <Navigate to="/" /> : children;
};

export default AuthRoutes;
