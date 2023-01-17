import React from "react";
import TransactionalLi from "./TransactionalLi";

function Transactionals({ transactions, searchValue }) {
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr className="transactionRow">
          <th>Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{<TransactionalLi transactions={filteredTransactions} />}</tbody>
    </table>
  );
}

export default Transactionals;
