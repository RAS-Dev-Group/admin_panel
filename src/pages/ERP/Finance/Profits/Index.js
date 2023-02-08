import React from "react";

//  import Chart Component
import Chart from "react-apexcharts";

//  import CSS
import "../finance.scss";

//  import Default Data
import barchart from "./chart-default-data";

export default function Finance() {
  return (
    <>
      <div className="page-header">
        <span className="page-title">Financial managiment</span>
        <div className="text-right page-tools">
          <button className="tool-btn">Export CSV</button>
          <button className="tool-btn">Export PDF</button>
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
      </div>
    </>
  );
}
