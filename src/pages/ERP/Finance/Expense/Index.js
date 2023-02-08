import React from "react";

//  import Chart Component
import Chart from "react-apexcharts";

//  import Modal mui pieces
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

//  import My Finace Table
import FinanceTable from "./FinanceTable";

//  import CSS
import "../finance.scss";

//  import Default Data
import barchart from "./chart-default-data";

export default function FinanceExpense() {
  const handleAddExpense = () => {};

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div style={{ marginBottom: "10px" }}>
              <div className="cancel-modal" onClick={handleClose}>
                x
              </div>
              <div style={{ height: "20px" }}></div>
            </div>
            <form className="text-center finance-expense-form">
              <h3
                style={{
                  color: "#86597E",
                  fontWeight: "700",
                  marginBottom: "120px",
                }}
              >
                ADD EXPENSE
              </h3>
              <div>
                <select className="expense-type">
                  <option>Expnese Type</option>
                </select>
              </div>
              <div>
                <input
                  className="expense-type"
                  placeholder="Expense Amount"
                ></input>
              </div>
              <div>
                <a className="expense-action" onClick={handleAddExpense}>
                  ADD
                </a>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
}
