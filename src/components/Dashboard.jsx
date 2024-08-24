import React from "react";
import Chart from "./Chart";
import styles from "./Dashboard.module.css";
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
    <div className={styles.dashboard}>
      <div>
        <h4 className={styles.chart__title}>Overview</h4>
        <div className={styles.chart__outline_dashed}>
          <div className={styles.chart__overview}>
            <Chart
              creditAmount={creditAmount}
              debitAmount={debitAmount}
              balanceAmount={balanceAmount}
            />
          </div>
        </div>
      </div>
      <div className={styles.dashboard__transactions}>
        <h4 className={styles.chart__title}>Top Expense</h4>
        <div className={styles.chart__outline_dashed}>
          <div className={styles.chart__overview}>
            <TopExpense highestDebit={highestDebit} />
          </div>
        </div>
        <h4 className={`${styles.chart__title} ${styles.section__title}`}>
          Transaction Card
        </h4>
        <div className={styles.chart__outline_dashed}>
          <div className={styles.chart__overview}>
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
