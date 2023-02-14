import React from "react";

//  import Chart Component
import Chart from "react-apexcharts";

//  import My Finace Table
import FinanceTable from "./ExpenseTable";

//  import Icon
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  import Modal
import ExpenseModal from '../TransactionsModal';

//  import Default Data
import barchart from "./chart-default-data";

export default function FinanceExpense() {
  const handleAddExpense = () => { };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openModal, setOpenModal] = React.useState(false);
  const handleTableModalOpen = () => setOpenModal(true);
  const handleTableModalClose = () => setOpenModal(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 767,
    height: 464,
    bgcolor: "#fff",
    p: 3,
  };

  return (
    <>
      <div className="page-header">
        <span className="page-title">Financial managiment</span>
        <div className="text-right page-tools">
          <a className="tool-btn">Export CSV</a>
          <a className="tool-btn">Export PDF</a>
          <a className="tool-btn" onClick={handleOpen}>
            Add Expense
          </a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-section">
          <div className="chart-container-1">
            <div className="text-right">
              <select style={{ borderColor: "#82567A" }}>
                <option>2005-2011</option>
              </select>
            </div>
            <Chart
              height={"500"}
              series={barchart.series}
              options={barchart.options}
              type="bar"
            />
            <div className="text-center chart-container-1-title">
              2005-2011 Yearly Expenses
            </div>
          </div>
        </div>

        <div className="table-container">
          <FinanceTable />
          <div className="mt-5 text-center" style={{ color: '#82567A', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }} onClick={handleTableModalOpen}>
            View all transaction
            <div className="text-center">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <ExpenseModal open={openModal} closeFunc={handleTableModalClose} />
        </div>
      </div>
      <ExpenseModal open={open} onClose={handleClose} />
    </>
  );
}
