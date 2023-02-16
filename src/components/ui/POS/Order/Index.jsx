import React from "react";
import OrderTable from "./OrderTable";

import "./order.scss";

export default function Order() {
  return (
    <>
      <div className="flex">
        <div className="w-3/5">
          <label className="page-title">Order Management</label>
        </div>
        <div className="w-2/5 pr-5 text-right">
          <button className="common-button">Email Receipt</button>
          <button className="ml-5 common-button active">Print PDF Receipt</button>
        </div>
      </div>
      <div>
        <div className="">
          <OrderTable />
        </div>
      </div>
    </>
  );
}
