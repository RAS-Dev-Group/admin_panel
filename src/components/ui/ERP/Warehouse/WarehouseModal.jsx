import React, { useState } from "react";
import Modal from "../../../ui/Modal/Modal";

const WarehouseModal = ({ open, data, closeFunc, submitFunc }) => {
  const [item, setItem] = useState(data);

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
          onChange={(e) => { setItem({ ...item, name: e.target.value }) }}
          type="text"
          placeholder="Input WareHouse name"
        />
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="text"
          value={item.location}
          onChange={(e) => { setItem({ ...item, location: e.target.value }) }}
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
