import React, { useState } from "react";
import SupplierTable from "./SupplierTable";
import SupplierModal from "./SupplierModal";

import "./supplier.scss";

export default function Supplier() {

  // modal
  const handleTypeNew = () => {
    setEditItem({}); // new item
    setOpen(true);
  }
  const handleTypeEdit = (item) => {
    setEditItem(item);
    setOpen(true);
  }

  return (
    <>
      <div className="float-right text-center bg-white w-96 buttons">
        <button className="my-2 common-button">Export CSV</button>
      </div>
      <div className="pr-5 mr-400">
        <div className="relative flex mb-5">
          <label className="page-title">Supplier Management</label>
          <label className="absolute page-title right-2">Supply History</label>
        </div>
        <SupplierTable openNewModal={handleTypeNew} openEditModal={handleTypeEdit} />
      </div>
    </>
  );
}
