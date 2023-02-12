import React from "react";

import FinanceTable from './Sales/SalesTable';

const SalesModal = (props) => {

  return (
    <>
      <div className="modal" style={{ display: props.open ? 'block' : 'none' }}>
        <div className="action-buttons text-rigth">
          <a className="tool-btn">Add Expense</a>
          <a className="tool-btn">Export PDF</a>
          <a className="tool-btn">Export CSV</a>
        </div>
        <div className="relative finance-modal">
          <FinanceTable />
        </div>
      </div>
    </>
  );
};

export default SalesModal;
