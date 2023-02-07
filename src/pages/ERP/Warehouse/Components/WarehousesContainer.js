import React from "react";

import WarehouseItem from "./WarehouseItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WarehousesContainer(props) {
  return (
    <div className="warehouse-container">
      <div className="flex">
        <div className="relative">
          <input className="input-search-warehouse pl-10" type="text" />
          <FontAwesomeIcon
            className="absolute top-2 left-4 text-white"
            icon="search"
            size="1x"
          />
        </div>
        <button className="ml-auto btn-add-warehouse">+ Add Warehouse</button>
      </div>
      <ul className="items">
        <li className="flex flex-wrap warehouse-item">
          <div className="name-container">
            <label className="title">Name</label>
          </div>
          <div className="location-container">
            <label className="title">Location</label>
          </div>
          <div className="action-container">
            <label className="title">Action</label>
          </div>
        </li>
        <WarehouseItem title="Ware House1" />
        <WarehouseItem title="Ware House1" />
        <WarehouseItem title="Ware House1" />
        <WarehouseItem title="Ware House1" />
        <WarehouseItem title="Ware House1" />
        <WarehouseItem title="Ware House1" />
        <WarehouseItem title="Ware House1" />
        <WarehouseItem title="Ware House1" />
        <WarehouseItem title="Ware House1" />
      </ul>
    </div>
  );
}