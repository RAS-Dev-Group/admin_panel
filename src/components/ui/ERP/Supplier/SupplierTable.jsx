import React from "react";

import TableSearch from "../../../ui/TableSearch/TableSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Select } from "@mui/material";

export default function SupplierTable(props) {
  let rows = [];

  for (let i = 0; i < 20; i += 1) {
    rows.push({
      image: "/images/chair.png",
      name: "Italian Relaxing Chair",
      date: "5/01/2023",
      supplier: "Supplier1",
      quantity: "45",
      status: "Received",
    });
  }

  return (
    <>
      <div className="flex table-filter">
        <TableSearch />
        <select className="ml-auto mr-2 filter" placeholder="Date">
          <option>Date</option>
        </select>
        <select
          className="mr-2 filter"
          placeholder="OrderID"
          options={[{ value: "1", label: "OrderID" }]}
        >
          <option>Order ID</option>
        </select>
        <select className="mr-2 filter" placeholder="Status">
          <option>Status</option>
        </select>
        <select className="mr-2 filter" placeholder="More Filters">
          <option>More Filters</option>
        </select>
        <button className="px-6 py-1 btn-add" onClick={props.openNewModal}>Add</button>
      </div>
      <div className="pl-2 mt-3">
        <table className="table w-full text-center supplier-table">
          <thead>
            <tr>
              <th className="text-left">Product</th>
              <th>Date</th>
              <th>Supplier</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Edit Supplier</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr className="my-2" key={index}>
                <td className="font-bold text-left">
                  <img className="mt-2 mb-1" src={row.image} alt="img" />
                  <label>{row.name}</label>
                </td>
                <td>{row.date}</td>
                <td className="color1">{row.supplier}</td>
                <td className="color1">{row.quantity}</td>
                <td className="color2">{row.status}</td>
                <td className="color1">
                  <button className="ml-auto font-icon-wrapper" onClick={props.openEditModal}>
                    <FontAwesomeIcon
                      className="pr-1 fa-icon opacity-20"
                      icon="trash"
                    />
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
