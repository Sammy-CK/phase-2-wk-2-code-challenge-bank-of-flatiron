import React from "react";

function TransactionalLi({ transactions }) {
  return transactions.map((transaction) => (
    <tr key={transaction.id} className="transactionRow">
      <td>{transaction.date}</td>
      <td>{transaction.category}</td>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
    </tr>
  ));
}

export default TransactionalLi;
