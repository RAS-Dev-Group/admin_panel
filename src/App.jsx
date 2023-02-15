import "./common.scss";
import React, { useEffect, useState } from "react";
import { createBrowserRouter, BrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

import PageSpinner from "./components/ui/PageSpinner";
import "./utils/fonts";

import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

import ERP from "./pages/ERP";
import POS from "./pages/POS";
import CRM from "./pages/CRM";
import NotFound from "./pages/NotFound";

import { TokenContext } from './context/TokenContext';
import { refresh } from "./utils/api";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <AuthLayout><Login /></AuthLayout>
  },
  {
    path: '/signup',
    element: <AuthLayout><Signup /></AuthLayout>
  },
  {
    path: '/',
    element: <ERP />
  },
  {
    path: '/erp',
    element: <ERP />
  },
  {
    path: '/pos',
    element: <POS />
  },
  {
    path: '/crm',
    element: <CRM />
  },
  {
    path: '/*',
    element: <NotFound />
  }
])

export default function App() {
  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  // if logged in, update token every 5 minutes
  useEffect(() => {
    setInterval(() => {
      refresh(cookie.token)
      .then(res => {
        console.log(res);
        return;
        setCookie(res.data.access_token); // refreshed token
      })
      .catch(err => {
        // something wrong
        removeCookie('token'); // remove token
      });
    }, 300000); // every 5 minutes
  }, []);

  return <CookiesProvider>
    <TokenContext.Provider value={ cookie.token }>
      <RouterProvider router={router} />
    </TokenContext.Provider>
  </CookiesProvider>
}
