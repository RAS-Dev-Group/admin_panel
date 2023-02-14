import "./common.scss";
import React, { useState } from "react";
import { createBrowserRouter, BrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import PageSpinner from "./components/ui/PageSpinner";
import "./utils/fonts";

import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

import ERP from "./pages/ERP";
import POS from "./pages/POS";
import CRM from "./pages/CRM";
import NotFound from "./pages/NotFound";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <CookiesProvider>
    <RouterProvider router={router} />
  </CookiesProvider>
}
