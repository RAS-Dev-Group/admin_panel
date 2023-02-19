import React from "react";
import OrderRow from "./RowOrder";

export default function OrderTable({ orders, handleEdit, handleDelete }) {

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
            {orders.map(order => (
              <OrderRow key={order.id}
                order={order}
                handleEdit={() => handleEdit(order)}
                handleDelete={() => handleDelete(order.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
