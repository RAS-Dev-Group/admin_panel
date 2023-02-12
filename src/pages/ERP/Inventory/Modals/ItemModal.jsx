import React from "react";
import Modal from "../../../../components/ui/Modal/Modal";

const ItemModal = ({ open, editType, closeFunc }) => {
  return (
    <Modal
      show={open}
      onClose={closeFunc}
      content={(
        <>
          <div className="text-center modal-header">
            <label className="modal-title">{editType == 'ADD' ? 'New Item' : 'Edit Item'}</label>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='text' placeholder="Input product name"></input>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='text' placeholder="Category"></input>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='text' placeholder="Quantity"></input>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='number' placeholder="Tax rate" min={0}></input>
          </div>
          <div className="text-center modal-item">
            <input className="item danger" type='number' placeholder="Amount" min={0}></input>
          </div>
          <div className="text-center">
            <button className="item button" onClick={closeFunc}>{editType == 'ADD' ? 'Add Item' : 'Update Item'}</button>
          </div>
        </>
      )}
    />
  );
};

export default ItemModal;
