import React from "react";
import WarehousesContainer from "./Components/WarehousesContainer";
import WarehouseModal from './Components/WarehouseModal';
import "./warehouse.scss";

export default function Warehouse() {

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTypeNew = () => {
    setType(true);
    setOpen(true);
  }
  const handleTypeEdit = () => {
    setType(false);
    setOpen(true);
  }
  return (
    <>
      <label className="page-title">Warehousing</label>
      <WarehousesContainer modalopennew={handleTypeNew} modalopenedit={handleTypeEdit} />
      <WarehouseModal open={open} type={type} closeFunc={handleClose} />
    </>
  );
}
