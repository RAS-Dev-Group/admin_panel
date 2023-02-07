import React from "react";
import InventoryTable from "./InventoryTable";

import "./inventory.scss";

export default function Inventory() {
  return (
    <div className="content-wrapper">
      <div className="w-784">
        <label className="page-title">Inventory Management</label>
        <label className="float-right page-title">Orders</label>
      </div>
      <div className="float-left w-784">
        <InventoryTable />
      </div>
      <div className="buttons">
        <button className="common-button active">New Item</button>
        <button className="common-button">Export CSV</button>
        <button className="common-button">Import Items</button>
        <button className="common-button">Create Category</button>
      </div>
    </div>
  );
}
