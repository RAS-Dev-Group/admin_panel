import React from "react";

import { Outlet } from "react-router-dom";

import "./admin.scss";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

export default function Admin({ mode }) {
  return (
    <>
      <Sidebar mode={mode} />
      <div className="p-4 admin-wrapper">
        <Header />
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
}
