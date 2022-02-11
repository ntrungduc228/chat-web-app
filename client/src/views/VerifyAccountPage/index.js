import React, { lazy } from "react";

const VerifyAccount = lazy(() => import("../../components/VerifyAccount"));

const VerifyAccountPage = () => {
  return <VerifyAccount />;
};

export default VerifyAccountPage;
