import React from "react";
import InvoiceRow from "./InvoiceRow";

export default function InvoicesTables({ invoices, handleEdit, handleDelete }) {
  return (
    <>
      <div className="pl-1 mb-4 text-center">
        <label className="text-base font-bold">LIST OF INVOICES</label>
      </div>
      <div className="w-11/12 p-8 mx-auto bg-white rounded-xl">
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
            {invoices.map((item) => (<InvoiceRow
              key={item.id} item={item}
              handleEdit={() => handleEdit(item)}
              handleDelete={() => handleDelete(item.id)}
            />))}
          </tbody>
        </table>
      </div>
    </>
  );
}
