import React from "react";

import { Outlet } from "react-router-dom";

import "./admin.scss";

import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { useLocation } from "react-router-dom";

export default function Admin({ mode }) {
  let location = useLocation();

  return (
    <>
      <Sidebar mode={mode} />
      <div className="p-4 admin-wrapper">
        <Header is_finance={location.pathname === 'erp/finance'} />
        <Outlet />
      </div>
    </>
  );
}
