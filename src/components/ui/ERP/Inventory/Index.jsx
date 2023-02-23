import React, { useState } from "react";
import InventoryTable from "./Item/InventoryTable";

//  import Modals

import "./inventory.scss";
import CategoryList from "./Category/CategoryList";

export default function Inventory() {
  const [showNewItem, setShowNewItem] = useState(0);
  const [showNewCategory, setShowNewCategory] = useState(0);
  const [currentRole, setCurrentRole] = useState('ITEM');

  function handleNewItem() {
    if (currentRole === 'ITEM') {
      // open dialog --> call inventoryTable's func
      setShowNewItem(showNewItem + 1);
    }
    else {
      setCurrentRole('ITEM');
    }
  }

  return (
    <>
      <div className="flex float-right w-480">
        <div className="mx-auto text-center bg-white w-96 buttons">
          <button className="common-button" onClick={handleNewItem}>New Item</button>
          <button className="common-button">Export CSV</button>
          <button className="common-button">Import Items</button>
          <button className="common-button" onClick={() => setShowNewCategory(showNewCategory + 1)}>Create Category</button>
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
            <InventoryTable showNewItemModal={showNewItem} /> :
            <CategoryList showNewCategory={showNewCategory} />
        }
      </div>
    </>
  );
}
