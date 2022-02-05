import React, { lazy } from "react";

const Signup = lazy(() => import("../../components/Signup"));

const SignupPage = () => {
  return <Signup />;
};

export default SignupPage;
