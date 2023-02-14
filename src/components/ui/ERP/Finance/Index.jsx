import React from "react";
import FinanceExpense from "./Expense/Index";
import FinanceProfits from "./Profits/Index";
import FinanceSales from "./Sales/Index";

import "./finance.scss";

export default function Finance({ showType }) {
  function content() {
    if (showType === 'sales') return <FinanceSales />;
    if (showType === 'profits') return <FinanceProfits />;
    if (showType === 'expenses') return <FinanceExpense />;
  }

  return content();
}
