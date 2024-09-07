import React, { useState } from "react";
import "./assets/styles/app.css";

import Topbar from "./components/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Transaction from "./components/Transaction";
import NotFound from "./components/NotFound";
import { useLocalStorage } from "./hooks/useSavedToLocalStorage.jsx";
import Sidebar from "./components/Sidebar";

function App() {
  const [loginDetail, setloginDetail] = useState(() => {
    const savedLoginDetails = localStorage.getItem("userDetails");
    return savedLoginDetails ? JSON.parse(savedLoginDetails) : "";
  });
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : "";
  });

  useLocalStorage(transactions, "transactions");
  useLocalStorage(loginDetail, "userDetails");

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

  const handleDelete = (deleteId) => {
    console.log("Deleting transaction with id:", deleteId);

    // Filter out the deleted transaction
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== deleteId
    );

    // Check if there is any transaction with type "Credit" and "Debit"
    const hasCreditTransaction = updatedTransactions.some(
      (transaction) => transaction.type === "Credit"
    );
    const hasDebitTransaction = updatedTransactions.some(
      (transaction) => transaction.type === "Debit"
    );

    // If no debit transactions, just update transactions
    if (!hasDebitTransaction) {
      return setTransactions(updatedTransactions);
    }

    // If no credit transactions, show alert
    if (!hasCreditTransaction) {
      return alert("Income is always above expense");
    }

    // Otherwise, update the transactions
    setTransactions(updatedTransactions);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="app-container__main">
          <Topbar loginDetail={loginDetail} onSetloginDetail={setloginDetail} />
          <div className="content">
            {loginDetail ? (
              <Routes>
                <Route
                  path="/"
                  element={
                    <Dashboard
                      creditAmount={creditAmount}
                      debitAmount={debitAmount}
                      balanceAmount={balanceAmount}
                      highestDebit={highestDebit}
                    />
                  }
                />
                <Route
                  path="expenses"
                  element={
                    <Expense
                      transactions={transactions}
                      onSetTransactions={setTransactions}
                      onHandleDelete={handleDelete}
                      balanceAmount={balanceAmount}
                    />
                  }
                />
                <Route
                  path="incomes"
                  element={
                    <Income
                      transactions={transactions}
                      onSetTransactions={setTransactions}
                      onHandleDelete={handleDelete}
                    />
                  }
                />
                <Route
                  path="transactions"
                  element={<Transaction transactions={transactions} />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            ) : (
              <p className="login">Please login the App :)</p>
            )}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
