import * as React from "react";

//  Table components
import TableSearch from "../../../../components/ui/TableSearch/TableSearch";

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
  const handleNameSelect = (event) => { };

  const handleAmountSelect = (event) => { };

  const handleFilterSelect = (event) => { };

  return (
    <div className="finance-table">
      <div className="flex mb-6">
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
      <table className="w-full">
        <tbody>
          {rows.map(row => (
            <tr key={row.user.name}>
              <td align="left" width="20%">
                <span className="big-font">{row.user.name}</span>
                <br />
                <span className="small-font">{row.user.email}</span>
              </td>
              <td align="center" width="26%">
                <span className="big-font">{row.card.num}</span>
                <br />
                <span className="small-font">{row.card.type}</span>
              </td>
              <td align="center" width="20%">
                <span className="big-font">{row.cat.name}</span>
                <br />
                <span className="small-font">{row.cat.type}</span>
              </td>
              <td align="center" width="24%" style={{paddingRight: '3%'}}>
                <span className="big-font">$ {row.amount.total}</span>
                <br />
                <span className="small-font">{row.amount.type}</span>
              </td>
              <td align="left" width="12%">
                {row.status.type}
                <br />
                <span className="text-center small-font">{row.status.mark}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
