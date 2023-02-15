import React, { useState } from "react";
import InventoryTable from "./Item/InventoryTable";

//  import Modals

import "./inventory.scss";
import CategoryList from "./Category/CategoryList";

import Swal from 'sweetalert2';
import { deleteInventory, getInventories, getInventory, updateInventory, createInventory } from "../../../../utils/api";

export default function Inventory() {
  const [currentRole, setCurrentRole] = useState('ITEM');

  const handleNewItemModal = () => {
    if (currentRole === 'ITEM') {
      // open dialog --> call inventoryTable's func
    }
    else {
      setCurrentRole('ITEM');
    }
  };

  const handleNewCatModal = () => {
    setCatModalType('NEW');
    handleCatOpen();
  };

  return (
    <>
      <div className="float-right text-center bg-white w-96 buttons">
        <button className="my-2 common-button" onClick={handleNewItemModal}>New Item</button>
        <button className="my-2 common-button">Export CSV</button>
        <button className="my-2 common-button">Import Items</button>
        <button className="my-2 common-button" onClick={handleNewCatModal}>Create Category</button>
        <button className="my-2 common-button" onClick={() => setCurrentRole('CATEGORY')}>Edit Category</button>
      </div>
      <div className="pr-2 mr-400">
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
