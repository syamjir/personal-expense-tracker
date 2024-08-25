import React from "react";
import TransactionPage from "../TransactionPage";

function Expense({
  transactions,
  onSetTransactions,
  onHandleDelete,
  balanceAmount,
}) {
  const expenseLogs = transactions
    ? transactions.filter((transaction) => transaction.type === "Debit")
    : [];
  const totalAmount = transactions
    ? expenseLogs.reduce((acc, transaction) => acc + transaction.amount, 0)
    : 0;
  return (
    <TransactionPage
      type="Debit"
      title="Expenses"
      totalAmount={totalAmount}
      btnContent="expense"
      transactions={expenseLogs}
      onSetTransactions={onSetTransactions}
      onHandleDelete={onHandleDelete}
      balanceAmount={balanceAmount}
    />
  );
}

export default Expense;
