import React from "react";

import TableSearch from "../../../components/ui/TableSearch/TableSearch";
import DropDown from "react-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-dropdown/style.css";

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
      <div className="table-filter">
        <div className="float-left">
          <TableSearch />
        </div>
        <div className="float-right h-full">
          <div className="flex my-auto">
            <DropDown
              className="filter mr-2"
              placeholder="Date"
              options={[{ value: "1", label: "Date" }]}
            />
            <DropDown
              className="filter mr-2"
              placeholder="OrderID"
              options={[{ value: "1", label: "OrderID" }]}
            />
            <DropDown
              className="filter mr-2"
              placeholder="Status"
              options={[{ value: "1", label: "Status" }]}
            />
            <DropDown
              className="filter mr-2"
              placeholder="More Filters"
              options={[{ value: "1", label: "More Filters" }]}
            />
            <button className="btn-add px-3">Add</button>
          </div>
        </div>
      </div>
      <div className="clear-both"></div>
      <div className="mt-3 pl-2">
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
                <td className="text-left font-bold">
                  <img className="mt-2 mb-1" src={row.image} alt="img" />
                  <label>{row.name}</label>
                </td>
                <td>{row.date}</td>
                <td className="color1">{row.supplier}</td>
                <td className="color1">{row.quantity}</td>
                <td className="color2">{row.status}</td>
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
