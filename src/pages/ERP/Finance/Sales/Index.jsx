import React from "react";

//  import Chart Component
import Chart from "react-apexcharts";

//  import My Finace Table
import FinanceTable from './FinanceTable';

//  import Icon
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  import Modal
import SalesModal from './SalesModal';

//  import CSS
import '../finance.scss';

//  import Default Data
import chartdata from './chart-default-data';



export default function FinanceSales() {

  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <div className="text-center mt-5 mb-5" style={{color: '#82567A', fontSize: '14px', fontWeight:'700', cursor: 'pointer'}} onClick={handleOpen}>
            View all transaction
            <div className="text-center">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <SalesModal open={open} closeFunc={handleClose} />
        </div>
      </div>
    </>
  );
}
