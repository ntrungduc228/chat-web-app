import { lazy } from "react";

// Auth
const SignInPage = lazy(() => import("./views/AuthPage/SigninPage"));
// const SignInPage = import("./views/AuthPage/SigninPage");
const SignUpPage = lazy(() => import("./views/AuthPage/SignupPage"));
const VerifyAccountPage = lazy(() => import("./views/VerifyAccountPage"));

// Chat page
const ChatPage = lazy(() => import("./views/ChatPage"));

// Error page
const Page404 = lazy(() => import("./views/ErrorPage/Page404"));

const privateRoutes = [
  {
    path: "/",
    exact: true,
    loader: () => import("./views/ChatPage"),
    menu: false,
    label: "Trang chủ",
    permissionRequired: null,
    icon: "home",
    element: <ChatPage />,
  },
];

const authRoutes = [
  {
    path: "/signin",
    exact: true,
    loader: () => import("./components/Signin"),
    element: <SignInPage />,
  },
  {
    path: "/signup",
    exact: true,
    loader: () => import("./components/Signup"),
    element: <SignUpPage />,
  },
  {
    path: "/verify-account",
    exact: true,
    loader: () => import("./components/Signup"),
    element: <VerifyAccountPage />,
  },
];

const errorRoutes = [
  {
    path: "*",
    exact: true,
    loader: () => import("./views/ErrorPage/Page404"),
    element: <Page404 />,
  },
];

export default {
  privateRoutes,
  authRoutes,
  errorRoutes,
};
