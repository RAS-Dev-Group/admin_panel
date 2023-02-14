import Modal from "../../../../ui/Modal/Modal";

const SupplierModal = ({ open, editType, closeFunc }) => {

  return (
    <Modal show={open} onClose={closeFunc}>
      <div className="text-center modal-header">
        <label className="modal-title">{editType === 'ADD' ? 'New Supplier' : 'Edit Supplier'}</label>
      </div>
      <div className="text-center inventory-modal-title">
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Input product name"></input>
      </div>
      <div className="text-center modal-item">
        <input className="item" type='text' placeholder="Input Supplier"></input>
      </div>
      <div className="text-center modal-item">
        <input className="item" type='number' placeholder="Quantity" min={0}></input>
      </div>
      <div className="text-center">
        <button className="item button" onClick={closeFunc}>{editType == 'ADD' ? 'Add' : 'Update'}</button>
      </div>
    </Modal>
  );
};

export default SupplierModal;
