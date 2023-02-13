import React, { useState } from "react";
import InventoryTable from "./InventoryTable";

//  import Modals
import ItemModal from './Modals/ItemModal';
import CategoryModal from './Modals/CategoryModal';

import "./inventory.scss";
import CategoryList from "./Category/CategoryList";

export default function Inventory() {

  const [showItemModal, setShowItemModal] = useState(false);
  const [itemModalType, setItemModalType] = useState(true);
  const [showCatModal, setShowCatModal] = useState(false);
  const [catModalType, setCatModalType] = useState(true);
  const [currentRole, setCurrentRole] = useState('ITEM');

  //  handle Item modal
  const handleItemOpen = () => setShowItemModal(true);
  const handleItemClose = () => setShowItemModal(false);

  const handleItemModalTypeNew = () => {
    if (currentRole === 'ITEM') {
      setItemModalType('NEW');
      handleItemOpen();
    }
    else {
      setCurrentRole('ITEM');
    }
  };
  const handleItemModalTypeEdit = () => {
    setItemModalType('EDIT');
    handleItemOpen();
  };

  //  handle Category modal
  const handleCatOpen = () => setShowCatModal(true);
  const handleCatClose = () => setShowCatModal(false);

  const handleCatTypeNew = () => {
    setCatModalType('NEW');
    handleCatOpen();
  };
  const handleCatTypeEdit = () => {
    setCatModalType('EDIT');
    handleCatOpen();
  }

  // page type

  return (
    <>
      <div className="float-right text-center bg-white w-96 buttons">
        <button className="my-2 common-button" onClick={handleItemModalTypeNew}>New Item</button>
        <button className="my-2 common-button">Export CSV</button>
        <button className="my-2 common-button">Import Items</button>
        <button className="my-2 common-button" onClick={handleCatTypeNew}>Create Category</button>
        <button className="my-2 common-button" onClick={() => setCurrentRole('CATEGORY')}>Edit Category</button>
      </div>
      <div className="pr-2 mr-400">
        <div className="flex mb-5">
          <label className="page-title">Inventory Management</label>
          <label className="ml-auto mr-5 page-title">Orders</label>
        </div>
        {
          currentRole === 'ITEM' ?
            <InventoryTable editItem={handleItemModalTypeEdit} /> :
            <CategoryList showCategoryModal={handleCatOpen} />
        }
      </div>
      <ItemModal open={showItemModal} editType={itemModalType} closeFunc={handleItemClose} />
      <CategoryModal open={showCatModal} editType={catModalType} closeFunc={handleCatClose} />
    </>
  );
}
