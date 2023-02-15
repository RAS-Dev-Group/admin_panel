import React from "react";
import Modal from "../../../Modal/Modal";

const CategoryModal = ({ open, category, closeFunc }) => {
  return (
    <Modal
      show={open}
      onClose={closeFunc}
    >
      <div className="text-center modal-header">
        <label className="modal-title">
          {category && category.id ? "Edit Category" : "Create Category"}
        </label>
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="text"
          placeholder="Enter name of Category"
          value={category.name}
        />
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="number"
          placeholder="Tax rate"
          min={0}
          value={category.tax_rate}
        />
      </div>
      <div className="text-center modal-item">
        <button className="item button" onClick={closeFunc}>
          {category && category.id ? "Update" : "Create"}
        </button>
      </div>
    </Modal>
  );
};

export default CategoryModal;
