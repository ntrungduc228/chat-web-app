import React, { lazy } from "react";
import "./AuthPage.scss";

const Signin = lazy(() => import("../../components/Signin"));

const SigninPage = () => {
  return <Signin />;
};

export default SigninPage;
