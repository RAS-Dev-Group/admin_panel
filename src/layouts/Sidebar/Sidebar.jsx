import React from "react";
import UserInfo from "./UserInfo";
import MainButton from "./MainButton";
import SecondButton from "./SecondButton";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

export default function Sidebar({ mode, submenu, onSubmenu }) {
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  
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
        menu: "order",
        title: "Order Management",
      },
      {
        menu: "invoice",
        title: "Invoices",
      },
      {
        menu: "coupon",
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
          onClick={() => {
            removeCookie('token');
            navigate("/login");
          }}
        />
      </div>
    </div>
  );
}
