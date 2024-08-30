import React, { useEffect, useState } from "react";
import "./assets/styles/App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/header/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Expense from "./components/pages/expense/Expense";
import Income from "./components/pages/income/Income";
import Transaction from "./components/pages/transactions/Transaction";
import NotFound from "./components/pages/notfound/NotFound";
import { useLocalStorage } from "./customHooks/useLocalStorage";

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

  const handleDelete = (deleteId) => {
    console.log("Deleting transaction with id:", deleteId);
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== deleteId
    );
    console.log(updatedTransactions);
    setTransactions(updatedTransactions);
  };

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
