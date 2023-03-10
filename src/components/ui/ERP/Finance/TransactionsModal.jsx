import React from "react";

import FinanceTable from './Sales/SalesTable';
import Modal from "../../../ui/Modal/Modal";

const TransactionsModal = ({ open, closeFunc }) => {

  return (
    <Modal
      contentClassName={"modal-transactions"}
      show={open}
      onClose={closeFunc}
      hasCloseBtn={false} >
      <div className="mb-3 text-right">
        <a className="tool-btn">Add Expense</a>
        <a className="tool-btn">Export PDF</a>
        <a className="tool-btn">Export CSV</a>
      </div>
      <FinanceTable />
    </Modal>
  );
};

export default TransactionsModal;
