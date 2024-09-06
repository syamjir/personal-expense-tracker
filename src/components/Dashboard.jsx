import React from "react";
import Chart from "./Chart";
import TransactionCard from "./TransactionCard";
import TopExpense from "./TopExpense";
import styles from "./Dashboard.module.css"; // Importing styles from CSS module

function Dashboard({ creditAmount, debitAmount, balanceAmount, highestDebit }) {
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
          <div className={styles.chart__verview}>
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
