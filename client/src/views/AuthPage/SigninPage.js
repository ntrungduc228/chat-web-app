import React, { lazy } from "react";

const Signin = lazy(() => import("../../components/Signin"));

const SigninPage = () => {
  return <Signin />;
};

export default SigninPage;
