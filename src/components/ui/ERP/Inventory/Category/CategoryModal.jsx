import React, { useState, useEffect } from "react";
import Modal from "../../../Modal/Modal";

const CategoryModal = ({ open, initialData, handleSubmit, handleClose }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Modal
      show={open}
      onClose={handleClose}
    >
      <div className="text-center modal-header">
        <label className="modal-title">
          {data.id ? "Edit Category" : "Create Category"}
        </label>
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="text"
          placeholder="Enter name of Category"
          value={data.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="number"
          placeholder="Tax rate"
          min={0}
          value={data.tax_rate}
          name="tax_rate"
          onChange={handleChange}
        />
      </div>
      <div className="text-center modal-item">
        <button className="item button" onClick={handleSubmit}>
          {data.id ? "Update" : "Create"}
        </button>
      </div>
    </Modal>
  );
};

export default CategoryModal;
