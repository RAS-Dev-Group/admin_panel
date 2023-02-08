import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CouponTables(props) {
  let rows = [];

  for (let i = 0; i < 20; i += 1) {
    rows.push({
      couponCode: "SKU-7821",
      totalNumber: "200",
      validFrom: "Jan 2023",
      validTill: "Feb 2023",
      discountPercentage: "40%",
    });
  }

  return (
    <>
      <div className="w-11/12 mx-auto p-8 bg-white rounded-xl">
        <table className="table w-full text-center supplier-table">
          <thead>
            <tr>                                                                                                                                                        
              <th className="text-left">Coupon Code</th>
              <th>Total Number</th>
              <th>Valid From</th>
              <th>Valid Till</th>
              <th>Discount Percentage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr className="my-2" key={index}>
                <td className="text-left color1">{row.couponCode}</td>
                <td >{row.totalNumber}</td>
                <td >{row.validFrom}</td>
                <td className="color1">{row.validTill}</td>
                <td className="color1">{row.discountPercentage}</td>
                <td className="color1">
                  <button className="ml-auto btn-edit-invent-management font-icon-wrapper">
                    <FontAwesomeIcon className="pr-1 fa-icon opacity-20" icon="trash" />
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
