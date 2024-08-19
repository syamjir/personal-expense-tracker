import React from "react";
import { FaEdit, FaCalendar, FaComment, FaTrash } from "react-icons/fa";
import styles from "./Item.module.css";
function Item({
  colorDot,
  colorText,
  amount,
  title,
  date,
  summary,
  id,
  onHandleDelete,
  onEditTransaction,
}) {
  return (
    <div className={styles.item}>
      <div className={styles.container}>
        <div className="sub__container">
          <div className={`dot ${colorDot}`}></div>
          <p>{title}</p>
        </div>
        <FaEdit
          className={styles.edit__icon}
          onClick={() => onEditTransaction(id)}
          aria-label="Edit transaction"
        />
      </div>
      <div className={styles.container}>
        <div className={styles["item__details-info"]}>
          <div className="sub__container">
            <p>₹{amount}</p>
          </div>
          <div className="sub__container">
            <FaCalendar />
            <p>{date}</p>
          </div>
          <div className="sub__container">
            <FaComment />
            <p>{summary}</p>
          </div>
        </div>
        <FaTrash
          className={styles.delete__icon}
          onClick={() => onHandleDelete(id)}
          aria-label="Delete transaction"
        />
      </div>
    </div>
  );
}

export default Item;
