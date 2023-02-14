import "./common.scss";
// import Landing from "views/Landing.js";
// import Profile from "views/Profile.js";
// import Index from "views/Index.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./utils/fonts";
import router from "./utils/router";

export default function App() {
  return <RouterProvider router={router} />
}
