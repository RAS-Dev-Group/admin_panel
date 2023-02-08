import React from "react";

import TableSearch from "../../../components/ui/TableSearch/TableSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InventoryTable(props) {
  let rows = [];

  for (let i = 0; i < 20; i += 1) {
    rows.push({
      name: "Italian Relaxing Chair",
      category: "Category 1",
      image: "/images/chair.png",
      tag: "Tag 1",
      description: "input details",
      quantity: 45,
      sku: "SKU67",
      vendor: "Vendor 1",
    });
  }

  const options = [
    { value: "", label: "none" },
    { value: "input details", label: "input details" },
  ];

  return (
    <>
      <div className="table-filter">
        <div className="float-left">
          <TableSearch />
        </div>
        <div className="float-right h-full">
          <div className="flex my-auto">
            <select
              className="filter mr-2"
              placeholder="Date"
              options={[{ value: "1", label: "Date" }]}
            />
            <select
              className="filter mr-2"
              placeholder="Product Category"
              options={[{ value: "1", label: "Product Category" }]}
            />
            <select
              className="filter mr-2"
              placeholder="Status Delivery"
              options={[{ value: "1", label: "Status Delivery" }]}
            />
            <select
              className="filter mr-2"
              placeholder="More Filters"
              options={[{ value: "1", label: "More Filters" }]}
            />
          </div>
        </div>
      </div>
      <div className="clear-both"></div>
      <div className="mt-3 pl-2">
        <table className="table w-full text-center inventory-table">
          <thead>
            <tr>
              <th className="text-left">Item Name</th>
              <th>Category</th>
              <th>Image</th>
              <th>Tags</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>SKU</th>
              <th>Vendor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr className="my-2" key={index}>
                <td className="text-left font-bold">{row.name}</td>
                <td>{row.category}</td>
                <td>
                  <img className="mx-auto mt-2" src={row.image} alt="img" />
                </td>
                <td className="color1">{row.tag}</td>
                <td>
                  <select
                    className="filter"
                    options={options}
                    placeholder="input details"
                    value={props.description}
                  />
                </td>
                <td className="color1">{row.quantity}</td>
                <td className="color1">{row.sku}</td>
                <td>{row.vendor}</td>
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
