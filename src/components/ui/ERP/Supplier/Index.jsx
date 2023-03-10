import React from "react";
import SupplierTable from "./SupplierTable";

import "./supplier.scss";

export default function Supplier() {
  return (
    <>
      <div className="flex float-right w-480">
        <div className="mx-auto text-center bg-white w-96 buttons">
          <button className="common-button">Export CSV</button>
        </div>
      </div>
      <div className="pr-5 mr-500">
        <div className="relative flex mb-5">
          <label className="page-title">Supplier Management</label>
          <label className="absolute page-title right-2">Supply History</label>
        </div>
        <SupplierTable />
      </div>
    </>
  );
}
