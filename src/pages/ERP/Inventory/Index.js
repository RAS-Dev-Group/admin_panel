import React from "react";
import InventoryTable from "./InventoryTable";

import "./inventory.scss";

export default function Inventory() {
  return (
    <>
      <div className="float-left w-3/4 pr-2">
        <div className="flex mb-3">
          <label className="w-2/4 page-title">Inventory Management</label>
          <label className="page-title">Orders</label>
        </div>
        <div className="">
          <InventoryTable />
        </div>
      </div>
      <div className="float-left w-1/4 text-center bg-white buttons">
        <button className="my-2 common-button active">New Item</button>
        <button className="my-2 common-button">Export CSV</button>
        <button className="my-2 common-button">Import Items</button>
        <button className="my-2 common-button">Coupons</button>
        <button className="my-2 common-button">Select Product</button>
      </div>
    </>
  );
}
