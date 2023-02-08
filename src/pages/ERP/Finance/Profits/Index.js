import React, { useState } from "react";

//  import Chart Component
import Chart from "react-apexcharts";

//  import default calender
import Calendar from "react-calendar";
import "./calendar.css";
import moment from "moment";

//  import CSS
import "../finance.scss";

//  import Default Data
import barchart from "./chart-default-data";

const getYearsList = (currentYear) => {
  let years = [];
  let j = 0;
  for (let i = currentYear - 10; i <= currentYear + 10; i++, j++) years[0] = i;

  return years;
};

export default function FinanceProfits() {
  const [dateState, setDateState] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const changeDate = (e) => {
    setDateState(e);
    setSelectedYear(e.getFullYear());
    setSelectedMonth(e.getMonth());
    console.log(dateState);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);

    let date = dateState;
    date.setFullYear(e.target.value);
    changeDate(date);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);

    let date = dateState;
    date.setMonth(e.target.value);
    changeDate(date);
  };

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
        <div>
          <select
            className="calendar-select"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value={1}>January</option>
            <option value={2}>Febrary</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </select>
          <select
            className="calendar-select"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value={selectedYear - 10}>{selectedYear - 10}</option>
            <option value={selectedYear - 9}>{selectedYear - 9}</option>
            <option value={selectedYear - 8}>{selectedYear - 8}</option>
            <option value={selectedYear - 7}>{selectedYear - 7}</option>
            <option value={selectedYear - 6}>{selectedYear - 6}</option>
            <option value={selectedYear - 5}>{selectedYear - 5}</option>
            <option value={selectedYear - 4}>{selectedYear - 4}</option>
            <option value={selectedYear - 3}>{selectedYear - 3}</option>
            <option value={selectedYear - 2}>{selectedYear - 2}</option>
            <option value={selectedYear - 1}>{selectedYear - 1}</option>
            <option value={selectedYear}>{selectedYear}</option>
            <option value={selectedYear * 1 + 1}>{selectedYear * 1 + 1}</option>
            <option value={selectedYear * 1 + 2}>{selectedYear * 1 + 2}</option>
            <option value={selectedYear * 1 + 3}>{selectedYear * 1 + 3}</option>
            <option value={selectedYear * 1 + 4}>{selectedYear * 1 + 4}</option>
            <option value={selectedYear * 1 + 5}>{selectedYear * 1 + 5}</option>
            <option value={selectedYear * 1 + 6}>{selectedYear * 1 + 6}</option>
            <option value={selectedYear * 1 + 7}>{selectedYear * 1 + 7}</option>
            <option value={selectedYear * 1 + 8}>{selectedYear * 1 + 8}</option>
            <option value={selectedYear * 1 + 9}>{selectedYear * 1 + 9}</option>
            <option value={selectedYear * 1 + 10}>
              {selectedYear * 1 + 10}
            </option>
          </select>
        </div>
        <Calendar value={dateState} onChange={changeDate} />
      </div>
    </>
  );
}
