import React from "react";
import Modal from "../../../../ui/Modal/Modal";

const ItemModal = ({ open, item, handleClose }) => {
  return (
    <Modal show={open} onClose={handleClose}>
      <div className="text-center modal-header">
        <label className="modal-title">{item && item.id ? 'Edit Item' : 'New Item'}</label>
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Input product name" value={item.name} />
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Category" value={item.category} />
      </div>
      <div className="text-center modal-item">
        <input className="item" type='number' placeholder="Quantity" value={item.quantity} />
      </div>
      <div className="text-center modal-item">
        <input className="item" type='number' placeholder="Tax rate" min={0} value={item.tax_rate} />
      </div>
      <div className="text-center modal-item">
        <input className="item danger" type='number' placeholder="Amount" min={0} value={item.amount} />
      </div>
      <div className="text-center">
        <button className="item button" onClick={handleClose}>
          {item && item.id ? 'Update Item' : 'Add Item'}
        </button>
      </div>
    </Modal>
  );
};

export default ItemModal;
