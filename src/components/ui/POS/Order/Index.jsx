import React from "react";
import OrderTable from "./OrderTable";

import "./order.scss";

export default function Order() {
  return (
    <div className="pr-24">
      <div className="flex mb-10">
        <label className="page-title">Order Management</label>
        <div className="pr-5 ml-auto">
          <button className="common-button">Email Receipt</button>
          <button className="ml-5 common-button">Print PDF Receipt</button>
        </div>
      </div>
      <div>
        <div className="">
          <OrderTable />
        </div>
      </div>
    </div>
  );
}
