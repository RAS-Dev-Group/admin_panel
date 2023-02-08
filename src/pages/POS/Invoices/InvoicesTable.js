import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InvoicesTables(props) {
  let rows = [];

  for (let i = 0; i < 20; i += 1) {
    let status = Math.floor((Math.random() * 3) + 1);
    let statusText = "";
    if (status === 1) {
      statusText = "PAID";
    }else if (status === 2) {
      statusText = "PENDING";
    }else if (status === 3) {
      statusText = "DECLINED";
    }
    rows.push({
      item: "Italian Relaxing Chair",
      discount: "40%",
      couponCode: "SKU-7821",
      userEmail: "user7876@gmail.com",
      userAddress: "11 Base Street Texas",
      amount: "$343,000",
      tax: "$43.00",
      statusClass: "status"+status,
      statusText: statusText,
    });
  }

  return (
    <>
    <div className="pl-1 mb-4 text-center">
        <label className="font-bold text-base">LIST OF INVOICES</label>
    </div>
      <div className="w-11/12 mx-auto p-8 bg-white rounded-xl">
        <table className="table w-full text-center supplier-table">
          <thead>
            <tr>
              <th className="text-left">Item (Select Item)</th>
              <th>Discount</th>
              <th>Coupon Code</th>
              <th>User Email</th>
              <th>User Address</th>
              <th>Amount</th>
              <th>Tax</th>
              <th>Actions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr className="my-2" key={index}>
                <td className="text-left font-bold">{row.item}</td>
                <td>{row.discount}</td>
                <td className="color1">{row.couponCode}</td>
                <td className="color1">{row.userEmail}</td>
                <td className="color1">{row.userAddress}</td>
                <td className="color1">{row.amount}</td>
                <td className="color1">{row.tax}</td>
                <td className="color1">
                  <button className="ml-auto btn-edit-invent-management font-icon-wrapper">
                    <FontAwesomeIcon className="pr-1 fa-icon opacity-20" icon="trash" />
                    Edit
                  </button>
                </td>
                <td>
                  <label className={row.statusClass} >{row.statusText}</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
