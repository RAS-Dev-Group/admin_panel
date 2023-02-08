import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-dropdown/style.css";

export default function OrderTable(props) {
  let rows = [];

  for (let i = 0; i < 20; i += 1) {
    rows.push({
      name: "Italian Relaxing Chair",
      cate: "Category 1",
      quantity: "45",
      tax_rate: "10%",
      amount: "$343,000",
      coupon: "Received",
    });
  }

  return (
    <>
      <div className="w-11/12 mx-auto p-8 bg-white rounded-xl">
        <div className="pl-1 mb-4">
            <label className="font-bold text-base">Transaction history</label>
        </div>
        <table className="table w-full text-center supplier-table">
          <thead>
            <tr>
              <th className="text-left">Product name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Tax rate</th>
              <th>Amount</th>
              <th>Coupon</th>
              <th>Actions</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr className="my-2" key={index}>
                <td className="text-left font-bold">{row.name}</td>
                <td>{row.cate}</td>
                <td className="color1">{row.quantity}</td>
                <td className="color1">{row.tax_rate}</td>
                <td className="color1">{row.amount}</td>
                <td className="color2"><label className="px-2 rounded-sm coupon-state">{row.coupon}</label></td>
                <td className="color1">
                  <button className="ml-auto btn-edit-invent-management font-icon-wrapper">
                    <FontAwesomeIcon className="pr-1 fa-icon opacity-20" icon="trash" />
                    Edit
                  </button>
                </td>
                <td className="color2"><input className="check" type="checkbox" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}