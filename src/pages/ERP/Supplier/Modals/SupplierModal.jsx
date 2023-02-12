import EditModal from "../../../../components/ui/Modal/Modal";

const SupplierModal = ({ open, editType, closeFunc }) => {

  return (
    <EditModal
      show={open}
      title={editType === 'ADD' ? 'New Supplier' : 'Edit Supplier'}
      onClose={closeFunc}
      content={(
        <>
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
        </>
      )}
    />
  );
};

export default SupplierModal;
