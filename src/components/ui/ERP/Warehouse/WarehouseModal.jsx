import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "../../../ui/Modal/Modal";

const WarehouseModal = ({ open, initialData, handleClose, handleSubmit }) => {
  const [item, setItem] = useState(initialData);

  useEffect(() => {
    setItem(initialData);
  }, [initialData]);

  function handleChange(e) {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  return (
    <Modal show={open} onClose={handleClose}>
      <div className="text-center modal-header">
        <label className="modal-title">
          {item.id ? "Edit Warehouse" : "New Warehouse"}
        </label>
      </div>
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
        <button className="item button" onClick={() => handleSubmit(item)}>
          {item.id ? "Update" : "Add"}
        </button>
      </div>
    </Modal>
  );
};

export default WarehouseModal;
