import React from "react";
import Chart from "./Chart";
import "./dashboard.css";
import TransactionCard from "./TransactionCard";
import TopExpense from "./TopExpense";

function Dashboard({ transactions }) {
  const creditAmount = transactions
    ? transactions
        .filter((transaction) => transaction.type === "Credit")
        .reduce((acc, transaction) => acc + transaction.amount, 0)
    : 0;
  const debitAmount = transactions
    ? transactions
        .filter((transaction) => transaction.type === "Debit")
        .reduce((acc, transaction) => acc + transaction.amount, 0)
    : 0;

  const balanceAmount = transactions ? creditAmount - debitAmount : 0;
  const highestDebit = transactions
    ? transactions
        .filter((transaction) => transaction.type === "Debit")
        .sort((a, b) => b.amount - a.amount)[0]
    : 0;

  return (
    <div className="dashboard">
      <div>
        <h4 className="chart__title">Overview</h4>
        <div className="chart__outline--dashed">
          <div className="chart__overview">
            <Chart
              creditAmount={creditAmount}
              debitAmount={debitAmount}
              balanceAmount={balanceAmount}
            />
          </div>
        </div>
      </div>
      <div className="dashboard__transactions">
        <h4 className="chart__title ">Top Expense</h4>
        <div className="chart__outline--dashed">
          <div className="chart__overview">
            <TopExpense highestDebit={highestDebit} />
          </div>
        </div>
        <h4 className="chart__title section__title">Transaction Card</h4>
        <div className="chart__outline--dashed">
          <div className="chart__overview">
            <TransactionCard
              creditAmount={creditAmount}
              debitAmount={debitAmount}
              balanceAmount={balanceAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
