import * as React from "react";

import TableSearch from "../../../../components/ui/TableSearch/TableSearch";

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

export default function FinanceExpensesTable() {

  const handelChangeList = (event) => { };

  const handleNameSelect = (event) => { };

  const handleAmountSelect = (event) => { };

  const handleFilterSelect = (event) => { };

  return (
    <>
      <div className="flex mb-2">
        <TableSearch hasBorder={true} />
        <select className="ml-auto finance-table-select" onChange={handleNameSelect}>
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
        <button className="finance-add"> Add </button>
      </div>
      <table className="w-full table-expenses">
        <thead>
          <tr>
            <th className="text-left">Titles</th>
            <th className="text-center">Type of Expense</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.title}>
              <td align="left" width={240}>
                <span className="big-font">{row.title}</span>
              </td>
              <td align="center" width={240}>
                <span className="big-font">{row.type}</span>
              </td>
              <td align="right" width={240}>
                <span className="big-font">$ {row.amount}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
