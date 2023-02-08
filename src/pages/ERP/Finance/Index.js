import React, { useState } from "react";
import FinanceExpense from "./Expense/Index";
import FinanceProfits from "./Profits/Index";
import FinanceSales from "./Sales/Index";

export default function Finance() {
  let [page, setPage] = useState("expense");

  return (
    <>
      {page === "expense" ? (
        <FinanceExpense />
      ) : page === "profits" ? (
        <FinanceProfits />
      ) : (
        <FinanceSales />
      )}
    </>
  );
}
