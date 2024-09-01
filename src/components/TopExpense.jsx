import React from "react";
import { FaMoneyBill } from "react-icons/fa6";
import Card from "./Card";

function TopExpense({ highestDebit }) {
  return (
    <div className="transaction__box">
      <Card
        color="red"
        Icon={FaMoneyBill}
        heading={"Debit"}
        title={highestDebit?.transactionName}
        name={highestDebit?.summary}
        cash={highestDebit?.amount}
      />
    </div>
  );
}

export default TopExpense;
