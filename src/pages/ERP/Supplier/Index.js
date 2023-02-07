import React from "react";
import InventoryTable from "./SupplierTable";

import "./supplier.scss";

export default function Supplier() {
  return (
    <div className="content-wrapper">
      <div className="float-left w-3/4 pr-5">
        <div className="flex mb-3 relative">
          <label className="page-title">Supplier Management</label>
          <label className="page-title absolute right-2">Supply History</label>
        </div>
        <div className="">
          <InventoryTable />
        </div>
      </div>
      <div className="buttons w-1/4 float-left bg-white text-center">
        <button className="common-button my-2">Export CSV</button>
      </div>
    </div>
  );
}
