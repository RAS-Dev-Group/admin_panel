import React, { useState } from "react";
import InventoryTable from "./Item/InventoryTable";

//  import Modals

import "./inventory.scss";
import CategoryList from "./Category/CategoryList";

import Swal from 'sweetalert2';
import { deleteInventory, getInventories, getInventory, updateInventory, createInventory } from "../../../../utils/api";

export default function Inventory() {
  const [currentRole, setCurrentRole] = useState('ITEM');

  function handleNewItemModal() {
    if (currentRole === 'ITEM') {
      // open dialog --> call inventoryTable's func
    }
    else {
      setCurrentRole('ITEM');
    }
  }

  function handleNewCatModal() {

  }

  return (
    <>
      <div className="flex float-right w-480">
        <div className="mx-auto text-center bg-white w-96 buttons">
          <button className="common-button" onClick={handleNewItemModal}>New Item</button>
          <button className="common-button">Export CSV</button>
          <button className="common-button">Import Items</button>
          <button className="common-button" onClick={handleNewCatModal}>Create Category</button>
          <button className="common-button" onClick={() => setCurrentRole('CATEGORY')}>Edit Category</button>
        </div>
      </div>
      <div className="pr-2 mr-500">
        <div className="flex mb-5">
          <label className="page-title">Inventory Management</label>
          <label className="ml-auto mr-5 page-title">Orders</label>
        </div>
        {
          currentRole === 'ITEM' ?
            <InventoryTable /> :
            <CategoryList />
        }
      </div>
    </>
  );
}
