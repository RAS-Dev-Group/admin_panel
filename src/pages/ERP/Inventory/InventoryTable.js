import React from "react";

import TableSearch from "../../../components/ui/TableSearch/TableSearch";
import DropDown from "react-dropdown";
import "react-dropdown/style.css";

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
        <div className="flex float-right h-full">
          <div className="my-auto">
            <DropDown
              className="inline-block"
              placeholder="Date"
              options={[{ value: "1", label: "Date" }]}
            />
            <DropDown
              className="inline-block"
              placeholder="Product Category"
              options={[{ value: "1", label: "Product Category" }]}
            />
            <DropDown
              className="inline-block"
              placeholder="Status Delivery"
              options={[{ value: "1", label: "Status Delivery" }]}
            />
            <DropDown
              className="inline-block"
              placeholder="More Filters"
              options={[{ value: "1", label: "More Filters" }]}
            />
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="w-full text-center fixed-header inventory-table">
          <thead>
            <tr>
              <td>Item Name</td>
              <td>Category</td>
              <td>Image</td>
              <td>Tags</td>
              <td>Description</td>
              <td>Quantity</td>
              <td>SKU</td>
              <td>Vendor</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.category}</td>
                <td>
                  <img className="mx-auto" src={row.image} alt="img" />
                </td>
                <td>{row.tag}</td>
                <td>
                  <DropDown
                    options={options}
                    placeholder="input details"
                    value={props.description}
                  />
                </td>
                <td className="text-right">{row.quantity}</td>
                <td>{row.sku}</td>
                <td>{row.vendor}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
