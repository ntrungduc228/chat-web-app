import React, { lazy } from "react";
import "./AuthPage.scss";

const Signup = lazy(() => import("../../components/Signup"));

const SignupPage = () => {
  return <Signup />;
};

export default SignupPage;
