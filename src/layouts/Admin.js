import React from "react";

import { Outlet } from "react-router-dom";

import "./admin.scss";

import AdminSidebar from "../components/Sidebar/Sidebar";
import AdminHeader from "../components/Header/Header";

export default function Admin() {
  return (
    <div className="">
      <AdminSidebar />
      <div className="p-4 admin-wrapper">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
}
