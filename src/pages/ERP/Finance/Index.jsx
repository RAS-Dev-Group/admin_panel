import React from "react";
import FinanceExpense from "./Expense/Index";
import FinanceProfits from "./Profits/Index";
import FinanceSales from "./Sales/Index";

import "./finance.scss";

export default function Finance({ page }) {

  return (
    <>
      {page === "expenses" ? (
        <FinanceExpense />
      ) : page === "profits" ? (
        <FinanceProfits />
      ) : (
        <FinanceSales />
      )}
    </>
  );
}
