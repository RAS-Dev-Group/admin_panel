import React from "react";
import UserInfo from "./UserInfo";
import MainButton from "./MainButton";
import SecondButton from "./SecondButton";
import { useNavigate, useLocation } from "react-router-dom";

import "./sidebar.css";

export default function Sidebar({ mode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = {
    erp: [
      {
        uri: "/erp/project",
        title: "Project Management",
      },
      {
        uri: "/erp/inventory",
        title: "Inventory Management",
      },
      {
        uri: "/erp/supplier",
        title: "Supplier",
      },
      {
        uri: "/erp/finance",
        title: "Finance Management",
      },
      {
        uri: "/erp/warehouse",
        title: "Warehousing",
      },
    ],
    crm: [],
    pos: [
      {
        uri: "/pos/order",
        title: "Order Management",
      },
      {
        uri: "/pos/invoices",
        title: "Invoices",
      },
      {
        uri: "/pos/coupon",
        title: "Coupon Management",
      },
    ],
  };

  return (
    <div className="fixed h-screen px-4 mt-4 sidebar bg-white/40">
      <UserInfo />
      <div>
        {pages[mode].map((page) => (
          <MainButton
            onClick={() => {
              navigate(page.uri);
            }}
            name={page.title}
            active={location.pathname === page.uri}
          />
        ))}
      </div>
      <div className="flex content-center h-full">
        <div className="w-full my-auto">
          <SecondButton icon="icon-fog" text="Settings" />
          <SecondButton
            icon="icon-signout"
            text="Log Out"
            active={true}
            onClick={() => {
              navigate("/auth");
            }}
          />
        </div>
      </div>
    </div>
  );
}
