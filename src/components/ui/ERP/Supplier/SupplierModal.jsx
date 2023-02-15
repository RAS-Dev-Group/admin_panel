import { useState } from "react";
import Modal from "../../Modal/Modal";

const SupplierModal = ({ open, data, submitFunc, closeFunc }) => {
  const [supplier, setSupplier] = useState(data);

  return (
    <Modal show={open} onClose={closeFunc}>
      <div className="text-center modal-header">
        <label className="modal-title">
          {supplier && supplier.id ? "Edit Supplier" : "New Supplier"}
        </label>
      </div>
      <input type="hidden" name="id" value={supplier.id} />
      <div className="text-center modal-item">
        <input
          className="item"
          type="text"
          placeholder="Input product name"
          value={supplier.name}
          onChange={(e) => setSupplier({ ...supplier, name: e.target.value })}
        />
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="text"
          placeholder="Input Supplier"
          value={supplier.name}
          onChange={(e) => setSupplier({ ...supplier, name: e.target.value })}
        />
      </div>
      <div className="text-center modal-item">
        <input
          className="item"
          type="number"
          placeholder="Quantity"
          min={0}
          value={supplier.name}
          onChange={(e) => setSupplier({ ...supplier, name: e.target.value })}
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
