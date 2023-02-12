import React from "react";

import WarehouseItem from "./WarehouseItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableSearch from "../../../../components/ui/TableSearch/TableSearch";

export default function WarehousesContainer(props) {
  return (
    <div className="warehouse-container">
      <div className="flex">
        <TableSearch />
        <button className="px-4 py-2 ml-auto btn-add-warehouse" onClick={props.modalopennew}>
          + Add Warehouse
        </button>
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
        <WarehouseItem title="Ware House1" editmodal={props.modalopenedit}/>
        <WarehouseItem title="Ware House1" editmodal={props.modalopenedit} />
        <WarehouseItem title="Ware House1" editmodal={props.modalopenedit} />
        <WarehouseItem title="Ware House1" editmodal={props.modalopenedit} />
        <WarehouseItem title="Ware House1" editmodal={props.modalopenedit} />
        <WarehouseItem title="Ware House1" editmodal={props.modalopenedit} />
        <WarehouseItem title="Ware House1" editmodal={props.modalopenedit} />
        <WarehouseItem title="Ware House1" editmodal={props.modalopenedit} />
        <WarehouseItem title="Ware House1" editmodal={props.modalopenedit} />
      </ul>
    </div>
  );
}
