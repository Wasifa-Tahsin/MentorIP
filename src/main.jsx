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
import ErrorPage from "./Components/Pages/ErrorPage.jsx";
import DPDT from "./Components/AllPAges.jsx/DPDT.jsx";
import FAQPage from "./Components/AllPAges.jsx/FAQPage.jsx";
import IPLaws from "./Components/AllPAges.jsx/IPLaws.jsx";
import IPNews from "./Components/AllPAges.jsx/IPNews.jsx";
import IPRPage from "./Components/AllPAges.jsx/IPRPage.jsx";
import JournalPage from "./Components/AllPAges.jsx/JournalPage.jsx";
import OpossitionPage from "./Components/AllPAges.jsx/OpossitionPage.jsx";
import PatentPage from "./Components/AllPAges.jsx/PatentPage.jsx";
import RegistrationPage from "./Components/AllPAges.jsx/RegistrationPage.jsx";
import RenewalPage from "./Components/AllPAges.jsx/RenewalPage.jsx";
import TradeMarkPage from "./Components/AllPAges.jsx/TradeMarkPage.jsx";
import UtilityModelPage from "./Components/AllPAges.jsx/UtilityModelPage.jsx";
import About from "./Components/About/About.jsx";



const router = createBrowserRouter([
  {
        path:'*',
        Component:ErrorPage
      },
  {
    path: "/",
    Component: Root,

    children: [
      { index: true, Component: HomeLayout },
      {
        path:'/aboutPage',
        Component:About
      },
      
     
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
      {
        path:'/dpdt',
        Component:DPDT
      },
      {
        path:'/FAQ',
        Component:FAQPage
      },
      {
        path:'/ip-laws',
        Component:IPLaws
      },
      {
        path:'/ip-news',
        Component:IPNews
      },
      {
        path:'/ipr-enforcement',
        Component:IPRPage
      },
      {
        path:'/journal',
        Component:JournalPage
      },
      {
        path:'/opposition',
        Component:OpossitionPage
      },
      {
        path:'/patent',
        Component:PatentPage
      },
      {
        path:'/registration',
        Component:RegistrationPage
      },
      {
        path:'/renewal',
        Component:RenewalPage
      },
      {
        path:'/trademark',
        Component:TradeMarkPage
      },
      {
        path:'/utility-model',
        Component:UtilityModelPage
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
