import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useCloseForm } from "../../../customHooks/useCloseForm";
function Form({
  color,
  type,
  onIsModalOpen,
  onSetTransactions,
  editTransaction,
  balanceAmount,
}) {
  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [summary, setSummary] = useState("");
  useEffect(() => {
    if (editTransaction) {
      setTransactionName(editTransaction.transactionName);
      setAmount(editTransaction.amount);
      setDate(editTransaction.date);
      setSummary(editTransaction.summary);
    }
  }, [editTransaction]);
  useCloseForm(onIsModalOpen);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "Debit") {
      if (amount > balanceAmount) {
        return alert("you haven't enough balance 😕!");
      }
    }

    onIsModalOpen(false);

    onSetTransactions((transactions) => {
      if (editTransaction) {
        return transactions.map((t) =>
          t.id === editTransaction.id
            ? {
                id: editTransaction.id,
                transactionName,
                type,
                amount: Number(amount),
                date,
                summary,
              }
            : t
        );
      } else {
        return [
          ...transactions,
          {
            id: Date.now(),
            transactionName,
            type,
            amount: Number(amount),
            date,
            summary,
          },
        ];
      }
    });
  };

  return (
    <div className="form__modal">
      <div className="form__container">
        <h4 className={`form__title ${styles[`form__title--${color}`]}`}>
          {type} Input Form
        </h4>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__input--group">
            <label htmlFor="name" className="form__label">
              Transaction Name
            </label>
            <input
              type="text"
              id="name"
              name="transactionName"
              value={transactionName}
              onChange={(e) => setTransactionName(e.target.value)}
              maxLength={23}
              required
              className={`form__input ${styles[`form__input--${color}`]}`}
            />
          </div>
          <div className="form__input--group">
            <label htmlFor="type" className="form__label">
              Transaction Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={type}
              placeholder={type}
              readOnly
              className={`form__input ${styles[`form__input--${color}`]}`}
            />
          </div>
          <div className="form__input--group">
            <label htmlFor="amount" className="form__label">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className={`form__input ${styles[`form__input--${color}`]}`}
            />
          </div>
          <div className="form__input--group">
            <label htmlFor="date" className="form__label">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className={`form__input ${styles[`form__input--${color}`]}`}
            />
          </div>
          <div className="form__input--group">
            <label htmlFor="summary" className="form__label">
              Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              maxLength={19}
              placeholder="(max: 19 characters)"
              required
              className={`form__input ${styles[`form__input--${color}`]}`}
            />
          </div>

          <button
            type="submit"
            className={`form__btn ${styles[`form__btn--${color}`]}`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
