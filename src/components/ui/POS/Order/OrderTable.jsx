import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="w-11/12 p-8 mx-auto bg-white rounded-xl">
        <div className="pl-1 mb-4">
          <label className="text-base font-bold">Transaction history</label>
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
                <td className="font-bold text-left">{row.name}</td>
                <td>{row.cate}</td>
                <td className="color-p">{row.quantity}</td>
                <td className="color-p">{row.tax_rate}</td>
                <td className="color-p">{row.amount}</td>
                <td className="color-g"><label className="px-2 rounded-sm coupon-state">{row.coupon}</label></td>
                <td className="color-p">
                  <button className="ml-auto font-icon-wrapper">
                    <FontAwesomeIcon className="pr-1 fa-icon color-delete opacity-20" icon="trash" />
                    Edit
                  </button>
                </td>
                <td className="color-g"><input className="check" type="checkbox" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
