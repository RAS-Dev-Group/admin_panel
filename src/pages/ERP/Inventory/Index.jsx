import React from "react";
import InventoryTable from "./InventoryTable";

//  import Modals
import ItemModal from './Modals/ItemModal';
import CategoryModal from './Modals/CategoryModal';

import "./inventory.scss";

export default function Inventory() {

  const [openItem, setOpenItem] = React.useState(false);
  const [itemType, setItemType] = React.useState(true);
  const [openCat,  setOpenCat] = React.useState(false);
  const [catType, setCatType] = React.useState(true);
  
  //  handle Item modal
  const handleItemOpen = () => setOpenItem(true);
  const handleItemClose = () => setOpenItem(false);

  const handleItemTypeNew = () => {
    setItemType(true);
    handleItemOpen();
  };
  const handleItemTypeEdit = () => {
    setItemType(false);
    handleItemOpen();
  };

  //  handle Category modal
  const handleCatOpen = () => setOpenCat(true);
  const handleCatClose = () => setOpenCat(false);

  const handleCatTypeNew = () => {
    setCatType(true);
    handleCatOpen();
  };
  const handleCatTypeEdit = () => {
    setCatType(false);
    handleCatOpen();
  }

  return (
    <>
      <div className="float-left w-3/4 pr-2">
        <div className="flex mb-5">
          <label className="page-title">Inventory Management</label>
          <label className="ml-auto mr-5 page-title">Orders</label>
        </div>
        <div className="">
          <InventoryTable editItem={handleItemTypeEdit}/>
        </div>
      </div>
      <div className="float-left w-1/4 text-center bg-white buttons">
        <button className="my-2 common-button" onClick={handleItemTypeNew}>New Item</button>
        <button className="my-2 common-button">Export CSV</button>
        <button className="my-2 common-button">Import Items</button>
        <button className="my-2 common-button" onClick={handleCatTypeNew}>Create Category</button>
        <button className="my-2 common-button">Edit Category</button>
      </div>
      <ItemModal open={openItem} type={itemType} closeFunc={handleItemClose}/>
      <CategoryModal open={openCat} type={catType} closeFunc={handleCatClose}/>
    </>
  );
}
