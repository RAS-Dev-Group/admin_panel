import React from "react";
import Modal from "../../../../ui/Modal/Modal";

const WarehouseModal = ({ open, editType, closeFunc }) => {

  return (
    <Modal
      show={open}
      onClose={closeFunc}>
      <div className="text-center modal-header">
        <label className="modal-title">{editType === 'ADD' ? 'New Warehouse' : 'Edit Warehouse'}</label>
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Input WareHouse name"></input>
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Input Location"></input>
      </div>
      <div className="text-center">
        <button className="item button" onClick={closeFunc}>{editType === 'ADD' ? 'Add' : 'Update'}</button>
      </div>
    </Modal>
  );
};

export default WarehouseModal;