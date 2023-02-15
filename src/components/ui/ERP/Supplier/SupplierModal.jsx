import Modal from "../../Modal/Modal";

const SupplierModal = ({ open, item, closeFunc }) => {

  return (
    <Modal show={open} onClose={closeFunc}>
      <div className="text-center modal-header">
        <label className="modal-title">
          {item && item.id ? 'Edit Supplier' : 'New Supplier'}
        </label>
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
        <button className="item button" onClick={closeFunc}>
          {item && item.id ? 'Update' : 'Add'}</button>
      </div>
    </Modal>
  );
};

export default SupplierModal;
