import React from "react";
import {
  FaEdit,
  FaComment,
  FaTrash,
  FaCalendar,
  FaMoneyBillWave,
} from "react-icons/fa";
import styles from "./LatestTransaction.module.css";
function LatestTransaction({
  colorBackground,
  smallHeading,
  colorText,
  amount,
  title,
  date,
  comment,
  id,
  onHandleDelete,
  onEditTransaction,
}) {
  return (
    <div className={styles.container__column}>
      <div
        className={`${styles.container__column} ${styles.latest__transaction} ${styles.padding__two} ${colorBackground}`}
      >
        <p>{smallHeading}</p>
        <h4>Recent {`${smallHeading === "Debit" ? "Expense" : "Income"}`}</h4>
      </div>
      <div className={`${styles.amount} ${styles.padding__two} `}>
        <p className={colorText}>₹{amount}</p>
      </div>
      <div className={styles.transaction__details}>
        <div className={`${styles.container} ${styles.container__shadow}`}>
          <FaMoneyBillWave />
          <p>{title}</p>
        </div>
        <div className={`${styles.container} ${styles.container__shadow}`}>
          <FaCalendar />
          <p>{date}</p>
        </div>
        <div className={`${styles.container} ${styles.container__shadow}`}>
          <FaComment />
          <p>{comment}</p>
        </div>
      </div>
      <div className={`${styles.container} ${styles.btn__container}`}>
        <button
          className="sub__container  edit-button"
          onClick={() => onEditTransaction(id)}
        >
          <FaEdit /> Edit
        </button>
        <button
          className="sub__container  delete-button"
          onClick={() => onHandleDelete(id)}
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default LatestTransaction;
