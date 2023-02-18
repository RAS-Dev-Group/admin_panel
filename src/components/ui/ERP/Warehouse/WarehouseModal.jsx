import React, { useState } from "react";
import Modal from "../../../ui/Modal/Modal";

const WarehouseModal = ({ open, initialData, closeFunc, submitFunc }) => {
  const [item, setItem] = useState(initialData ? initialData : {
    name: '',
    location: '',
  });

  function handleChange(e) {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  return (
    <Modal show={open} onClose={closeFunc}>
      <div className="text-center modal-header">
        <label className="modal-title">
          {item && item.id ? "Edit Warehouse" : "New Warehouse"}
        </label>
      </div>
      <input type="hidden" name="id" value={item.id} readOnly={true} />
      <div className="text-center modal-item">
        <input
          className="item"
          name="name"
          value={item.name}
          onChange={handleChange}
          type="text"
          placeholder="Input WareHouse name"
        />
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="text"
          name="location"
          value={item.location}
          onChange={handleChange}
          placeholder="Input Location"
        />
      </div>
      <div className="text-center">
        <button className="item button" onClick={() => submitFunc(item)}>
          {item && item.id ? "Update" : "Add"}
        </button>
      </div>
    </Modal>
  );
};

export default WarehouseModal;
