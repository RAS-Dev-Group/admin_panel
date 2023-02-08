import React from "react";
import InvoicesTable from "./InvoicesTable";

import "./invoices.scss";

export default function Invoices() {
    return (
      <div className="content-wrapper">
        <div className="flex">
          <div className="w-3/5">
            <label className="page-title">Invoices</label>
          </div>
          <div className="w-2/5 text-right pr-5">
            <button className="common-button active ml-5">Add New Invoices</button>
          </div>
        </div>
        <div>
          <div className="">
            <InvoicesTable />
          </div>
        </div>
      </div>
    );
  }
  