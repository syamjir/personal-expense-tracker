import React from "react";
import TransactionPage from "./TransactionPage";

function Income({ transactions, onSetTransactions, onHandleDelete }) {
  const incomeLogs = transactions
    ? transactions.filter((transaction) => transaction.type === "Credit")
    : [];
  const totalAmount = transactions
    ? incomeLogs.reduce((acc, transaction) => acc + transaction.amount, 0)
    : 0;
  return (
    <TransactionPage
      type="Credit"
      title="Incomes"
      totalAmount={totalAmount}
      btnContent="income"
      transactions={incomeLogs}
      onSetTransactions={onSetTransactions}
      onHandleDelete={onHandleDelete}
    />
  );
}

export default Income;
