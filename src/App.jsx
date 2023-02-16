import "./common.scss";
import React, { createRef, useEffect } from "react";
import { createBrowserRouter, BrowserRouter, redirect, RouterProvider } from "react-router-dom";

import PageSpinner from "./components/ui/PageSpinner";
import "./utils/fonts";

import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

import ERP from "./pages/ERP";
import POS from "./pages/POS";
import CRM from "./pages/CRM";
import NotFound from "./pages/NotFound";

import { TokenContextProvider, useTokenContext, useTokenDispatch } from './context/TokenContext';
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
  const refIntervalID = createRef(0);
  const token = useTokenContext();
  const dispatch = useTokenDispatch();

  useEffect(() => {
    console.log('token changed', token, refIntervalID.current);
    if (!token) { // not logged in --> stop refresh
      clearInterval(refIntervalID.current);
    }
    else {
      // is logged in --> refresh every 5 minutes
      refIntervalID.current = setInterval(() => {
        if (!token) return; // no token ...
        refresh(token)
          .then(res => {
            console.log('refresh resp', res);
            if (res.data.access_token) {
              dispatch({
                type: 'set',
                token: token
              });
            }
          })
          .catch(err => {
            // something wrong
            console.log('refresh error', err);
            dispatch({
              type: 'clear'
            });
          });
      }, 300000);
    }
  }, [token]);

  return (
    <TokenContextProvider>
      <RouterProvider router={router} />
    </TokenContextProvider>
  )
}
