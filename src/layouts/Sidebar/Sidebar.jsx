import React from "react";
import UserInfo from "./UserInfo";
import MainButton from "./MainButton";
import SecondButton from "./SecondButton";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ mode, submenu, onSubmenu }) {
  const navigate = useNavigate();
  const menus = {
    erp: [
      {
        menu: "project",
        title: "Project Management",
      },
      {
        menu: "inventory",
        title: "Inventory Management",
      },
      {
        menu: "supplier",
        title: "Supplier",
      },
      {
        menu: "finance",
        title: "Finance Management",
      },
      {
        menu: "warehouse",
        title: "Warehousing",
      },
    ],
    crm: [],
    pos: [
      {
        menu: "/pos/order",
        title: "Order Management",
      },
      {
        menu: "/pos/invoices",
        title: "Invoices",
      },
      {
        menu: "/pos/coupon",
        title: "Coupon Management",
      },
    ],
  };

  return (
    <div className="fixed h-screen px-4 mt-4 sidebar bg-white/40">
      <UserInfo />
      <div>
        {menus[mode].map(menu => (
          <MainButton
            key={menu.menu}
            onClick={() => { onSubmenu(menu.menu) }}
            name={menu.title}
            active={submenu === menu.menu}
          />
        ))}
      </div>
      <div className="absolute second-buttons">
        <SecondButton icon="settings" text="Settings" 
        // onClick={onSubmenu('setting')} 
        />
        <SecondButton
          icon="logout"
          text="Log Out"
          active={true}
          onClick={() => { navigate("/"); }}
        />
      </div>
    </div>
  );
}
