import React from "react";

import TableSearch from "../../../ui/TableSearch/TableSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InventoryTable({ description, editItem, deleteItem }) {
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
      <div className="flex table-filter">
        <TableSearch />
        <select className="ml-auto mr-2 filter" placeholder="Date">
          <option>Date</option>
        </select>
        <select className="mr-2 filter" placeholder="Product Category">
          <option>Product Category</option>
        </select>
        <select className="mr-2 filter" placeholder="Status Delivery">
          <option>Status Devlivery</option>
        </select>
        <select className="mr-2 filter" placeholder="More Filters">
          <option>More Filters</option>
        </select>
      </div>
      <div className="pl-2 mt-3">
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
                <td className="font-bold text-left">{row.name}</td>
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
                    value={description}
                  />
                </td>
                <td className="color1">{row.quantity}</td>
                <td className="color1">{row.sku}</td>
                <td>{row.vendor}</td>
                <td className="color1">
                  <button className="ml-auto font-icon-wrapper"
                    onClick={deleteItem}>
                    <FontAwesomeIcon
                      className="pr-1 fa-icon opacity-20"
                      icon="trash"
                    />
                  </button>
                  <button onClick={editItem}>
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
