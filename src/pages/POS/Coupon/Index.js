import React from "react";
import CouponTable from "./CouponTable";

import "./coupon.scss";

export default function Coupon() {
    return (
      <div className="content-wrapper">
        <div className="flex mb-3">
          <div className="w-3/5">
            <label className="page-title">Coupon management</label>
          </div>
          <div className="w-2/5 text-right pr-12">
            <button className="common-button active ml-5">Add New Coupon</button>
          </div>
        </div>
        <div>
          <div className="">
            <CouponTable />
          </div>
        </div>
      </div>
    );
  }
  