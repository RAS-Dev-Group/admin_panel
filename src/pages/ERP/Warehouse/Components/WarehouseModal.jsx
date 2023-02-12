import React from "react";
import Modal from "../../../../components/ui/Modal/Modal";

const WarehouseModal = ({ open, editType, closeFunc }) => {

  return (
    <Modal
      show={open}
      onClose={closeFunc}
      content={(
        <>
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
        </>
      )}
    />
  );
};

export default WarehouseModal;