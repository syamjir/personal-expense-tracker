import React from "react";
import styles from "./Content.module.css";
import Transaction from "../pages/transactions/Transaction";
import Dashboard from "../pages/dashboard/Dashboard";
import Expense from "../pages/expense/Expense";
import Income from "../pages/income/Income";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/notfound/NotFound";

function Content() {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="expenses" element={<Expense />} />
        <Route path="incomes" element={<Income />} />
        <Route path="transactions" element={<Transaction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Content;
