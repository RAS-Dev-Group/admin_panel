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
            key={Math.random()}
            onClick={() => {
              navigate(page.uri);
            }}
            name={page.title}
            active={location.pathname.indexOf(page.uri) >= 0}
          />
        ))}
      </div>
      <div className="absolute second-buttons">
        <SecondButton icon="settings" text="Settings" />
        <SecondButton
          icon="logout"
          text="Log Out"
          active={true}
          onClick={() => {
            navigate("/auth");
          }}
        />
      </div>
    </div>
  );
}
