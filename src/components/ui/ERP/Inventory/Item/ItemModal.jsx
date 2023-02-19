import React, { useState, useEffect } from "react";
import Modal from "../../../../ui/Modal/Modal";

const ItemModal = ({ open, initialData, handleClose, handleSubmit }) => {
  const [data, setData] = useState(initialData);

  console.log(initialData, data);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <Modal show={open} onClose={handleClose}>
      <div className="text-center modal-header">
        <label className="modal-title">{data.id ? 'Edit Item' : 'New Item'}</label>
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Input product name"
          value={data.name} name="name" onChange={handleChange}
        />
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Category"
          value={data.category} name="category" onChange={handleChange} />
      </div>
      <div className="text-center modal-item">
        <input className="item" type='number' placeholder="Quantity"
          value={data.quantity} name="quantity" onChange={handleChange} />
      </div>
      <div className="text-center modal-item">
        <input className="item" type='number' placeholder="Tax rate" min={0}
          value={data.tax_rate} name="tax_rate" onChange={handleChange} />
      </div>
      <div className="text-center modal-item">
        <input className="item danger" type='number' placeholder="Amount" min={0}
          value={data.amount} name="amount" onChange={handleChange} />
      </div>
      <div className="text-center">
        <button className="item button" onClick={() => { handleSubmit(data) }}>
          {data.id ? 'Update Item' : 'Add Item'}
        </button>
      </div>
    </Modal>
  );
};

export default ItemModal;
