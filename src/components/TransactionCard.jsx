import React from "react";
import { FaMoneyCheck, FaCreditCard, FaBalanceScale } from "react-icons/fa";
import Card from "./Card";

function TransactionCard({ creditAmount, debitAmount, balanceAmount }) {
  return (
    <div className="transaction__box">
      <Card
        color="red"
        Icon={FaMoneyCheck}
        heading="Debit"
        name="Debit Summary"
        cash={debitAmount}
      />
      <Card
        color="green"
        Icon={FaCreditCard}
        heading="Credit"
        name="Credit Summary"
        cash={creditAmount}
      />
      <Card
        color="blue"
        Icon={FaBalanceScale}
        heading="Balance"
        name="Balance Summary"
        cash={balanceAmount}
      />
    </div>
  );
}

export default TransactionCard;
