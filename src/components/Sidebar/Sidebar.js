import React from "react";
import UserInfo from "./UserInfo";
import MainButton from "./MainButton";
import SecondButton from "./SecondButton";
import { useNavigate } from "react-router-dom";

import "./sidebar.css";

export default function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <div className="h-screen px-4 mt-4 sidebar bg-white/40">
      <UserInfo />
      <div>
        <MainButton
          onClick={() => {
            console.log("project");
            navigate("/admin/erp/project");
          }}
          name="Project Management"
          active={true}
        />
        <MainButton
          onClick={() => {
            navigate("/admin/erp/inventory");
          }}
          name="Inventory Management"
        />
        <MainButton
          onClick={() => {
            navigate("/admin/erp/supplier");
          }}
          name="Supplier Management"
        />
        <MainButton
          onClick={() => {
            navigate("/admin/erp/finance");
          }}
          name="Financial Management"
        />
        <MainButton
          onClick={() => {
            navigate("/admin/erp/warehouse");
          }}
          name="Warehousing"
        />
      </div>
      <div className="flex content-center h-full">
        <div className="w-full my-auto">
          <SecondButton icon="icon-fog" text="Settings"></SecondButton>
          <SecondButton
            icon="icon-signout"
            text="Log Out"
            className="active"
            onClick={() => {
              navigate("/auth");
            }}
          ></SecondButton>
        </div>
      </div>
    </div>
  );
}
