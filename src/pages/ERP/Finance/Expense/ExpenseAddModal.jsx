import Modal from "../../../../components/ui/Modal/Modal";

const ExpenseAddModal = ({ open, closeFunc }) => {

  return (
    <Modal
      show={open}
      onClose={closeFunc}
      content={(
        <>
          <div className="text-center modal-header">
            <label className="modal-title">ADD EXPENSE</label>
          </div>
          <div className="text-center modal-item">
            <select className="item" placeholder="Expense Type">
              <option>Successful</option>
              <option>UnSuccessful</option>
            </select>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='number' placeholder="Amount" min={0}></input>
          </div>
          <div className="text-center">
            <button className="item button" onClick={closeFunc}>Add</button>
          </div>
        </>
      )}
    />
  );
};

export default ExpenseAddModal;
