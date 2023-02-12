import React from "react";
import SupplierTable from "./SupplierTable";
import SupplierModal from "./Modals/SupplierModal";

import "./supplier.scss";

export default function Supplier() {
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
      <div className="float-left w-3/4 pr-5">
        <div className="relative flex mb-3">
          <label className="page-title">Supplier Management</label>
          <label className="absolute page-title right-2">Supply History</label>
        </div>
        <div className="">
          <SupplierTable openNewModal={handleTypeNew} openEditModal={handleTypeEdit} />
        </div>
      </div>
      <div className="float-left w-1/4 text-center bg-white buttons">
        <button className="my-2 common-button">Export CSV</button>
      </div>
      <SupplierModal open={open} type={type} closeFunc={handleClose} />
    </>
  );
}
