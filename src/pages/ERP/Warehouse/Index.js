import React from "react";
import WarehousesContainer from "./Components/WarehousesContainer";
import "./warehouse.scss";

export default function Warehouse() {
  return (
    <>
      <label className="page-title">Warehousing</label>
      <WarehousesContainer />
    </>
  );
}
