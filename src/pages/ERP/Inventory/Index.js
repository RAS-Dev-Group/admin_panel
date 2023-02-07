import React from "react";
import InventoryTable from "./InventoryTable";

import "./inventory.scss";

export default function Inventory() {
  return (
    <div className="content-wrapper">
      <div className="float-left w-3/4 pr-2">
        <div className="flex mb-3">
          <label className="page-title w-2/4">Inventory Management</label>
          <label className="page-title">Orders</label>
        </div>
        <div className="">
          <InventoryTable />
        </div>
      </div>
      <div className="buttons w-1/4 float-left bg-white text-center">
        <button className="common-button my-2 active">New Item</button>
        <button className="common-button my-2">Export CSV</button>
        <button className="common-button my-2">Import Items</button>
        <button className="common-button my-2">Coupons</button>
        <button className="common-button my-2">Select Product</button>
      </div>
    </div>
  );
}
