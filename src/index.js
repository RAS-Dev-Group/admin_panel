import "./common.scss";
// import Landing from "views/Landing.js";
// import Profile from "views/Profile.js";
// import Index from "views/Index.js";
import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './utils/fonts';
import router from './utils/router';

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
