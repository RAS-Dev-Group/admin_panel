import React from "react";
import InvoicesTable from "./InvoicesTable";

import "./invoices.scss";

export default function Invoices() {
  return (
    <>
      <div className="flex">
        <div className="w-3/5">
          <label className="page-title">Invoices</label>
        </div>
        <div className="w-2/5 pr-5 text-right">
          <button className="ml-5 common-button active">
            Add New Invoices
          </button>
        </div>
      </div>
      <div>
        <div className="">
          <InvoicesTable />
        </div>
      </div>
    </>
  );
}
