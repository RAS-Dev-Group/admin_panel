import React from "react";
import WarehousesContainer from "./Components/WarehousesContainer";
import "./warehouse.scss";

export default function Warehouse() {
  return (
    <div className="content-wrapper">
      <label className="page-title">Warehousing</label>
      <WarehousesContainer />
    </div>
  );
}
