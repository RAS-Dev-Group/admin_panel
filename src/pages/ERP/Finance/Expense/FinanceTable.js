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

function createData(title, type, amount) {
  return { title, type, amount };
}

const rows = [
  createData("Cupcake", "Furniture", 305),
  createData("Donut", "Furniture", 452),
  createData("Eclair", "Furniture", 262),
  createData("Frozen yoghurt", "Furniture", 159),
  createData("Gingerbread", "Furniture", 356),
  createData("Honeycomb", "Furniture", 408),
  createData("Ice cream sandwich", "Furniture", 237),
  createData("Jelly Bean", "Furniture", 375),
  createData("KitKat", "Furniture", 518),
  createData("Lollipop", "Furniture", 392),
  createData("Marshmallow", "Furniture", 318),
  createData("Nougat", "Furniture", 360),
  createData("Oreo", "Furniture", 437),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function FinanceTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

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

  const handelChangeList = (event) => {};

  const handleNameSelect = (event) => {};

  const handleAmountSelect = (event) => {};

  const handleFilterSelect = (event) => {};

  return (
    <>
      <div className="columns-2" style={{ margin: "15px" }}>
        <div className="text-left">
          <input
            type="text"
            className="search-box"
            onChange={handelChangeList}
            value={""}
          />
        </div>
        <div className="text-right">
          <select className="finance-table-select" onChange={handleNameSelect}>
            <option value={"-1"}>Type of Expense</option>
            <option value="1">Furniture</option>
          </select>
          <select
            className="finance-table-select"
            onChange={handleAmountSelect}
          >
            <option value={"-1"}>Amount</option>
            <option value="1">300</option>
          </select>
          <select
            className="finance-table-select"
            onChange={handleFilterSelect}
          >
            <option value={"-1"}>More Filters</option>
            <option value="1">email</option>
          </select>
          <a className="finance-add"> Add </a>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="center">Type of Expense</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.title}>
                <TableCell align="left" width={240}>
                  <span className="big-font">{row.title}</span>
                </TableCell>
                <TableCell align="center" width={240}>
                  <span className="big-font">{row.type}</span>
                </TableCell>
                <TableCell align="right" width={240}>
                  <span className="big-font">$ {row.amount}</span>
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
              <TablePagination
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
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
