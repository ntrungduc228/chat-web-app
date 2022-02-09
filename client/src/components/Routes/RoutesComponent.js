import React, { Suspense } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import routes from "../../routes";
import AuthRoutes from "./AuthRoutes";
import CustomLoadable from "../CustomLoadable/CustomLoadable";
import Spinner from "../Spinner";
import PrivateRoutes from "./PrivateRoutes";

const RoutesComponent = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {routes.privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={!!route.exact}
              element={
                <PrivateRoutes>
                  {/* {CustomLoadable({ loader: route.loader })} */}
                  {route.element}
                </PrivateRoutes>
              }
            />
          ))}
          {routes.authRoutes.map((route) => (
            <Route
              key={route.path}
              exact={!!route.exact}
              path={route.path}
              element={<AuthRoutes>{route.element}</AuthRoutes>}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesComponent;
