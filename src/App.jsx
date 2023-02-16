import "./common.scss";
import React, { useEffect, useReducer } from "react";
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

import { TokenContext, TokenDispatchContext } from './context/TokenContext';
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

function tokenReducer(token, action) {
  console.log('dispatch', action, token);
  switch (action.type) {
    case 'set': {
      return action.token
    }
    case 'clear': {
      return null
    }
    case 'refresh': {
      token = refresh(token)
        .then(res => {
          return res.data.access_token;
        })
        .catch(err => {
          token = null; // refresh failed
          throw Error('Refresh error: ', + err);
        });
      return token;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function App() {
  const [token, dispatch] = useReducer(tokenReducer, '');

  // if logged in, update token every 5 minutes
  useEffect(() => {
    setInterval(() => {
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
    }, 300000); // every 5 minutes
  }, []);

  return (
    <TokenContext.Provider value={token}>
      <TokenDispatchContext.Provider value={dispatch}>
        <RouterProvider router={router} />
      </TokenDispatchContext.Provider>
    </TokenContext.Provider>
  )
}
