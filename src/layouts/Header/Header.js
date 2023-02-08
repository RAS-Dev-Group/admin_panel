import React from "react";
import { useLocation } from "react-router-dom";
import Search from "./Search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  let location = useLocation();

  return (
    <div className="fixed admin-header">
      {location.pathname === "/erp/finance" ? (
        <select name="finance" className="float-right sel-finance">
          <option>Sales</option>
          <option>Expenses</option>
          <option>Profits</option>
        </select>
      ) : (
        ""
      )}
      <div className="h-full px-4 bg-white header-bar mr-400">
        <div className="flex float-left">
          <div className="header-label">
            <label>ERP</label>
          </div>
        </div>
        <button></button>
        <div className="flex float-right h-full">
          <button className="relative my-auto btn-notification">
            <FontAwesomeIcon icon="fa-regular fa-bell" className="gray" />
            <div className="notification-alert"></div>
          </button>
        </div>
        <Search />
      </div>
    </div>
  );
}
