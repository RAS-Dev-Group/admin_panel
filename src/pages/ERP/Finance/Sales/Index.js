import React from "react";

//  import Chart Component
import Chart from "react-apexcharts";

//  import My Finace Table
import FinanceTable from './FinanceTable';

//  import CSS
import '../finance.scss';

//  import Default Data
import chartdata from './chart-default-data';

export default function FinanceSales() {

  return (
    <>
      <div className="page-header">
        <span className="page-title">Financial managiment</span>
        <div className="page-tools">
          <a className="tool-btn">Export CSV</a>
          <a className="tool-btn">Export PDF</a>
        </div>
      </div>
      <div className="page-content">
        <div className="page-section">
          <div className="chart-container-2">
          <Chart height={'250'} options={chartdata.donutdata.options} series={chartdata.donutdata.series} type="donut" />
          </div>
          <div className="chart-container-2">
            <Chart height={'280'} options={chartdata.linedata.options} series={chartdata.linedata.series} type='line' />
          </div>
        </div>

        <div className="table-container">
          <FinanceTable />
        </div>
      </div>
    </>
  );
}
