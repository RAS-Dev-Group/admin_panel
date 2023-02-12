import React from "react";
import EditModal from "../../../../components/ui/Modal/Modal";

const ItemModal = ({ open, editType, closeFunc }) => {
  return (
    <EditModal
      show={open}
      title={editType == 'ADD' ? 'New Item' : 'Edit Item'}
      onClose={closeFunc}
      content={(
        <>
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
