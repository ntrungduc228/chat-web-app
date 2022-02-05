import { lazy } from "react";

// Auth
// const Signin = lazy(() => import("./components/AuthPage/SigninPage"));
const SignInPage = lazy(() => import("./views/AuthPage/SigninPage"));
const SignUpPage = lazy(() => import("./views/AuthPage/SignupPage"));

// Chat page
const ChatPage = lazy(() => import("./components/ChatPage"));

const privateRoutes = [
  {
    path: "/",
    exact: true,
    loader: () => import("./components/ChatPage"),
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
];

export default {
  privateRoutes,
  authRoutes,
};
