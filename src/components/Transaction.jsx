import React, { useState } from "react";
import "./transaction.css";

function Transaction({ transactions }) {
  const [isFilter, setIsFilter] = useState("");
  const [isSort, setIsSort] = useState("");

  // Filter transactions
  const debitTransactions = transactions
    ? transactions.filter((transaction) => transaction.type === "Debit")
    : [];
  const creditTransactions = transactions
    ? transactions.filter((transaction) => transaction.type === "Credit")
    : [];

  const currentDate = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);

  // Determine the filtered transaction list
  let filteredTransactions = transactions ? transactions : [];
  if (isFilter === "credit") {
    filteredTransactions = creditTransactions;
  } else if (isFilter === "debit") {
    filteredTransactions = debitTransactions;
  }

  if (isFilter === "Last 30 days") {
    filteredTransactions = filteredTransactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= thirtyDaysAgo;
    });
  }

  // Sort the filtered transactions
  if (isSort === "Amount--Low to High") {
    filteredTransactions.sort((a, b) => a.amount - b.amount);
  } else if (isSort === "Amount--High to Low") {
    filteredTransactions.sort((a, b) => b.amount - a.amount);
  }

  const totalTransactions = filteredTransactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  return (
    <div className="transaction">
      <h2 className="transaction__heading">Transactions</h2>
      <div className="transaction__summary">
        <div className="transaction__menu">
          <div className="transaction__currency">
            <h4>Total transactions:</h4>
            <p>${totalTransactions}</p>
          </div>
          <div className="transaction__menu-view">
            <select
              onChange={(e) => setIsFilter(e.target.value)}
              value={isFilter}
            >
              <option value="">Filter</option>
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
              <option value="last 30 days">Last 30 days</option>
            </select>

            <select onChange={(e) => setIsSort(e.target.value)} value={isSort}>
              <option value="">Sort</option>
              <option value="Amount--Low to High">Amount--Low to High</option>
              <option value="Amount--High to Low">Amount--High to Low</option>
            </select>
          </div>
        </div>

        <div className="transaction__title">
          <p>Trasaction name</p>
          <p>Transaction type</p>
          <p>Amount</p>
          <p>Date</p>
        </div>
        <div className="transaction__details-scroll">
          {filteredTransactions.map((transaction) => (
            <div className="transaction__details">
              <p>{transaction.transactionName}</p>
              <div className="money__inout">
                <p
                  className={`money__inout-dot ${
                    transaction.type === "Credit"
                      ? "color__dot-green"
                      : "color__dot-red"
                  }`}
                ></p>
                <p>{transaction.type}</p>
              </div>
              <p>${transaction.amount}</p>
              <p>{transaction.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transaction;
