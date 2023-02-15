import React from "react";
import Modal from "../../../ui/Modal/Modal";

const WarehouseModal = ({ open, item, closeFunc }) => {
  return (
    <Modal
      show={open}
      onClose={closeFunc}>
      <div className="text-center modal-header">
        <label className="modal-title">
          {item && item.id ? 'Edit Warehouse' : 'New Warehouse'}
        </label>
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Input WareHouse name"></input>
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Input Location"></input>
      </div>
      <div className="text-center">
        <button className="item button" onClick={closeFunc}>
          {item && item.id ? 'Update' : 'Add'}
        </button>
      </div>
    </Modal>
  );
};

export default WarehouseModal;