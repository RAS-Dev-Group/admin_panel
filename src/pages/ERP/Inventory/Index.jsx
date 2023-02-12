import React from "react";
import InventoryTable from "./InventoryTable";

//  import Modals
import ItemModal from './Modals/ItemModal';
import CategoryModal from './Modals/CategoryModal';

import "./inventory.scss";

export default function Inventory() {

  const [openItemModal, setOpenItemModal] = React.useState(false);
  const [itemModalType, setItemModalType] = React.useState(true);
  const [openCatModal, setOpenCatModal] = React.useState(false);
  const [catModalType, setCatModalType] = React.useState(true);

  //  handle Item modal
  const handleItemOpen = () => setOpenItemModal(true);
  const handleItemClose = () => setOpenItemModal(false);

  const handleItemModalTypeNew = () => {
    setItemModalType('NEW');
    handleItemOpen();
  };
  const handleItemModalTypeEdit = () => {
    setItemModalType('EDIT');
    handleItemOpen();
  };

  //  handle Category modal
  const handleCatOpen = () => setOpenCatModal(true);
  const handleCatClose = () => setOpenCatModal(false);

  const handleCatTypeNew = () => {
    setCatModalType('NEW');
    handleCatOpen();
  };
  const handleCatTypeEdit = () => {
    setCatModalType('EDIT');
    handleCatOpen();
  }

  return (
    <>
      <div className="float-right text-center bg-white w-96 buttons">
        <button className="my-2 common-button" onClick={handleItemModalTypeNew}>New Item</button>
        <button className="my-2 common-button">Export CSV</button>
        <button className="my-2 common-button">Import Items</button>
        <button className="my-2 common-button" onClick={handleCatTypeNew}>Create Category</button>
        <button className="my-2 common-button" onClick={handleCatTypeEdit}>Edit Category</button>
      </div>
      <div className="pr-2 mr-400">
        <div className="flex mb-5">
          <label className="page-title">Inventory Management</label>
          <label className="ml-auto mr-5 page-title">Orders</label>
        </div>
        <InventoryTable editItem={handleItemModalTypeEdit} />
      </div>
      <ItemModal open={openItemModal} editType={itemModalType} closeFunc={handleItemClose} />
      <CategoryModal open={openCatModal} editType={catModalType} closeFunc={handleCatClose} />
    </>
  );
}
