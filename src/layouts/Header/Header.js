import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const curFinacePage =
    location.pathname.indexOf("/erp/finance") >= 0
      ? location.pathname.replace("/erp/finance", "")
      : "";
  const [financePage, setFinancePage] = useState(
    curFinacePage === ""
      ? "sales"
      : curFinacePage.replace("/", "").toLowerCase()
  );

  useEffect(() => {
    if (
      location.pathname.indexOf("/erp/finance") >= 0 &&
      location.pathname !== "/erp/finance/".financePage
    ) {
      // navigate("/erp/finance/".financePage);
    }
  });

  return (
    <div className="fixed admin-header">
      {location.pathname.indexOf("/erp/finance") >= 0 ? (
        <select
          name="finance"
          className="float-right sel-finance"
          value={financePage}
          onChange={(event) => {
            setFinancePage(event.target.value);
          }}
        >
          <option value="sales">Sales</option>
          <option value="expenses">Expenses</option>
          <option value="profits">Profits</option>
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
