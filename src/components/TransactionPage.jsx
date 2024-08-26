import React, { useState } from "react";
import styles from "./TransactionPage.module.css";
import Item from "./Item";
import LatestTransaction from "./LatestTransaction";
import Form from "./form/Form";

function TransactionPage({
  type,
  title,
  totalAmount,
  btnContent,
  transactions,
  onSetTransactions,
  onHandleDelete,
  balanceAmount,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTrans, setEditTrans] = useState(null);
  const latestTransaction = transactions[transactions.length - 1];
  const colorText = title === "Incomes" ? "color__text-green" : "";
  const colorDot = title === "Incomes" ? "color__dot-green" : "";
  const colorBackground =
    title === "Incomes" ? "transaction__background--green" : "";

  function editTransaction(editId) {
    const editTra = transactions.find(
      (transaction) => transaction.id === editId
    );
    setEditTrans(editTra);
    setIsModalOpen(true);
  }

  return (
    <div className={styles.transaction}>
      {isModalOpen ? (
        title === "Expenses" ? (
          <Form
            color={"red"}
            type={"Debit"}
            onIsModalOpen={setIsModalOpen}
            onSetTransactions={onSetTransactions}
            editTransaction={editTrans}
            balanceAmount={balanceAmount}
          />
        ) : (
          <Form
            color={"green"}
            type={"Credit"}
            onIsModalOpen={setIsModalOpen}
            onSetTransactions={onSetTransactions}
            editTransaction={editTrans}
          />
        )
      ) : (
        ""
      )}

      <h3>{title}</h3>
      <div className={styles.transaction__summary}>
        <div className="sub__container">
          <h4>Total {title}:</h4>
          <p className={`amount__title ${colorText}`}>
            <span>₹</span>
            {totalAmount}
          </p>
        </div>
        <button className="main__button" onClick={() => setIsModalOpen(true)}>
          + Add {btnContent}
        </button>
      </div>
      <div className={styles.transaction__details}>
        <div className={styles["transaction__details-latest"]}>
          <LatestTransaction
            colorBackground={colorBackground}
            smallHeading={type}
            colorText={colorText}
            amount={latestTransaction?.amount}
            title={latestTransaction?.transactionName}
            date={latestTransaction?.date}
            comment={latestTransaction?.summary}
            id={latestTransaction?.id}
            onHandleDelete={onHandleDelete}
            onEditTransaction={editTransaction}
          />
        </div>
        <div
          className={`${styles["transaction__details-items"]} ${styles.padding__three}`}
        >
          {transactions?.map((transaction) => (
            <Item
              colorDot={colorDot}
              colorText={colorText}
              amount={transaction.amount}
              title={transaction.transactionName}
              date={transaction.date}
              summary={transaction.summary}
              id={transaction.id}
              onHandleDelete={onHandleDelete}
              onEditTransaction={editTransaction}
              key={transaction.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TransactionPage;
