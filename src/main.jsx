import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";

import HomeLayout from "./Components/layout/HomeLayout.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import AssignmentPage from "./Components/AllPAges.jsx/AssignmentPage.jsx";
import LoginToAccount from "./Components/Account/LoginToAccount.jsx";
import ForgetPassword from "./Components/Account/ForgetPassword.jsx";
import Register from "./Components/Account/Register.jsx";
import BangladeshPage from "./Components/AllPAges.jsx/BangladeshPage.jsx";
import CaseStudy from "./Components/AllPAges.jsx/CaseStudy.jsx";
import designPage from "./Components/AllPAges.jsx/designPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      { index: true, Component: HomeLayout },
     
      {
        path: "/login",
        Component: LoginToAccount,
      },
      {
        path:'/registerAccount',
        Component:Register
      },
      {
        path:'/forgetPassword',
        Component:ForgetPassword
      },
      {
        path:'/assignment',
        Component:AssignmentPage
      },
      {
        path:'/caseStudy',
        Component:CaseStudy
      },
      {
        path:'/bangladesh',
        Component:BangladeshPage
      },
      {
        path:'/design',
        Component:designPage
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
