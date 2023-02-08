import React from "react";
import SupplierTable from "./SupplierTable";

import "./supplier.scss";

export default function Supplier() {
  return (
    <>
      <div className="float-left w-3/4 pr-5">
        <div className="relative flex mb-3">
          <label className="page-title">Supplier Management</label>
          <label className="absolute page-title right-2">Supply History</label>
        </div>
        <div className="">
          <SupplierTable />
        </div>
      </div>
      <div className="float-left w-1/4 text-center bg-white buttons">
        <button className="my-2 common-button">Export CSV</button>
      </div>
    </>
  );
}
