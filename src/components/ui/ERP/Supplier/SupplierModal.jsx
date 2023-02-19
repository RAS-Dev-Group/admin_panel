import { useState } from "react";
import Modal from "../../Modal/Modal";

const SupplierModal = ({ open, initialData, submitFunc, closeFunc }) => {
  const [supplier, setSupplier] = useState(initialData ? initialData : {
    id: '',
    name: '',
    supplier: '',
    quantity: 0
  });

  function handleChange(e) {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  }

  return (
    <Modal show={open} onClose={closeFunc}>
      <div className="text-center modal-header">
        <label className="modal-title">
          {supplier && supplier.id ? "Edit Supplier" : "New Supplier"}
        </label>
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="text"
          name="name"
          placeholder="Input product name"
          value={supplier.name}
          onChange={handleChange}
        />
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="text"
          placeholder="Input Supplier"
          name="supplier"
          value={supplier.supplier}
          onChange={handleChange}
        />
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="number"
          placeholder="Quantity"
          min={0}
          name="quantity"
          value={supplier.quantity}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button className="item button" onClick={() => submitFunc(supplier)}>
          {supplier && supplier.id ? "Update" : "Add"}
        </button>
      </div>
    </Modal>
  );
};

export default SupplierModal;
