import * as React from "react";
import PropTypes from "prop-types";

//  Table components
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableSearch from "../../../../components/ui/TableSearch/TableSearch";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, card, cat, amount, condition) {
  return {
    user: {
      name: name,
      email: name + "@uihut.com",
    },
    card: {
      num: card,
      type: "Card Number",
    },
    cat: {
      name: cat,
      type: "Category",
    },
    amount: {
      total: amount,
      type: "Amount",
    },
    status: {
      type:
        condition > 5 ? (
          <span style={{ fontSize: "14px", color: "#0B8A73" }}>Successful</span>
        ) : (
          <span style={{ fontSize: "14px", color: "#F01608" }}>
            UnSuccessful
          </span>
        ),
      mark: "Remark",
    },
  };
}

const rows = [
  createData("Cupcake", "562XXXXXXXX4643", "Furniture", 305, 3.7),
  createData("Donut", "562XXXXXXXX4643", "Furniture", 452, 25.0),
  createData("Eclair", "562XXXXXXXX4643", "Furniture", 262, 16.0),
  createData("Frozen yoghurt", "562XXXXXXXX4643", "Furniture", 159, 6.0),
  createData("Gingerbread", "562XXXXXXXX4643", "Furniture", 356, 16.0),
  createData("Honeycomb", "562XXXXXXXX4643", "Furniture", 408, 3.2),
  createData("Ice cream sandwich", "562XXXXXXXX4643", "Furniture", 237, 9.0),
  createData("Jelly Bean", "562XXXXXXXX4643", "Furniture", 375, 0.0),
  createData("KitKat", "562XXXXXXXX4643", "Furniture", 518, 26.0),
  createData("Lollipop", "562XXXXXXXX4643", "Furniture", 392, 0.2),
  createData("Marshmallow", "562XXXXXXXX4643", "Furniture", 318, 0),
  createData("Nougat", "562XXXXXXXX4643", "Furniture", 360, 19.0),
  createData("Oreo", "562XXXXXXXX4643", "Furniture", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function FinanceSalesTable({ handleOpenAdd }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handelChangeList = (event) => { };

  const handleNameSelect = (event) => { };

  const handleAmountSelect = (event) => { };

  const handleFilterSelect = (event) => { };

  return (
    <div className="finance-table">
      <div className="flex mb-2">
        <TableSearch />
        <select className="ml-auto finance-table-select" onChange={handleNameSelect}>
          <option value={"-1"}>Name</option>
          <option value="1">Alex</option>
        </select>
        <select
          className="finance-table-select"
          onChange={handleAmountSelect}
        >
          <option value={"-1"}>Amount</option>
          <option value="1">100</option>
        </select>
        <select
          className="finance-table-select"
          onChange={handleFilterSelect}
        >
          <option value={"-1"}>More Filters</option>
          <option value="1">email</option>
        </select>
        <button className="finance-add" onClick={handleOpenAdd}> Add </button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Username</TableCell>
              <TableCell align="center">Card Number</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Mark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.user.name}>
                <TableCell align="left">
                  <span className="big-font">{row.user.name}</span>
                  <br />
                  <span className="small-font">{row.user.email}</span>
                </TableCell>
                <TableCell align="center">
                  <span className="big-font">{row.card.num}</span>
                  <br />
                  <span className="small-font">{row.card.type}</span>
                </TableCell>
                <TableCell align="center">
                  <span className="big-font">{row.cat.name}</span>
                  <br />
                  <span className="small-font">{row.cat.type}</span>
                </TableCell>
                <TableCell align="center">
                  <span className="big-font">$ {row.amount.total}</span>
                  <br />
                  <span className="small-font">{row.amount.type}</span>
                </TableCell>
                <TableCell align="center">
                  {row.status.type}
                  <br />
                  <span className="small-font">{row.status.mark}</span>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              {/* <TablePagination
                rowsPerPageOptions={[25, 40, 100, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              /> */}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
