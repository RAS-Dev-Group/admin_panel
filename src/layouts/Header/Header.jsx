import React, { useEffect, useState } from "react";

import HeaderDropDown from "./HeaderDropdown";
import HeaderSearch from "./HeaderSearch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ isFinance, onFinanceType }) {
  const [showType, setShowType] = useState('sales');
  
  return (
    <div className="admin-header">
      {isFinance ?
        <select
          name="finance"
          className="float-right sel-finance"
          value={showType}
          onChange={(event) => {
            setShowType(event.target.value);
            onFinanceType(event.target.value);
          }}
        >
          <option value="sales">Sales</option>
          <option value="expenses">Expenses</option>
          <option value="profits">Profits</option>
        </select>
        : ""
      }
      <div className="h-full px-4 bg-white header-bar mr-500">
        <div className="flex float-left h-full">
          <HeaderDropDown />
        </div>
        <div className="flex float-right h-full">
          <button className="relative my-auto btn-notification">
            <FontAwesomeIcon icon="fa-regular fa-bell" className="gray" />
            <div className="notification-alert"></div>
          </button>
        </div>
        <HeaderSearch />
      </div>
    </div>
  );
}
