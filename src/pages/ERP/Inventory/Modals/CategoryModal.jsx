import React from "react";
import EditModal from "../../../../components/ui/Modal/Modal";

const CategoryModal = ({ open, editType, closeFunc }) => {
  return (
    <EditModal
      show={open}
      title={editType === 'NEW' ? "Create Category" : "Edit Category"}
      onClose={closeFunc}
      content={(
        <>
          <div className="text-center modal-item">
            <input
              className="item"
              type="text"
              placeholder="Enter name of Category"
            ></input>
          </div>
          <div className="text-center modal-item">
            <input
              className="item"
              type="number"
              placeholder="Tax rate"
              min={0}
            ></input>
          </div>
          <div className="text-center modal-item">
            <button className="item button" onClick={closeFunc}>
              {editType === 'NEW' ? "Create" : "Update"}
            </button>
          </div>
        </>
      )}
    />
  );
};

export default CategoryModal;
