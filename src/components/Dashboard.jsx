import React from "react";
import Chart from "./Chart";
import "./dashboard.css";
import TransactionCard from "./TransactionCard";
import TopExpense from "./TopExpense";

function Dashboard({ creditAmount, debitAmount, balanceAmount, highestDebit }) {
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
