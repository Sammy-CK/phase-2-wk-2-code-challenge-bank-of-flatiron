import React from "react";
import "../index.css";

function TransactionForm({
  newTransaction,
  setNewTransaction,
  setTransactions,
  transactions,
}) {
  function updateTransactionDetails(name, value) {
    setNewTransaction({ ...newTransaction, [name]: value });
  }

  return (
    <form
      id="searchFormSelf"
      className="submitForm"
      onSubmit={(event) => {
        event.preventDefault();
        setTransactions([...transactions, newTransaction]);

        setNewTransaction({
          date: "",
          description: "",
          category: "",
          amount: 0,
        });
      }}
    >
      <label htmlFor="date">Date:</label>
      <input
        className="contentInput"
        required
        type="date"
        name="date"
        placeholder="date"
        value={newTransaction.date}
        onChange={(event) =>
          updateTransactionDetails(event.target.name, event.target.value)
        }
      />
      <label htmlFor="category">Category:</label>
      <input
        className="contentInput"
        required
        type="text"
        name="category"
        placeholder="category"
        value={newTransaction.category}
        onChange={(event) =>
          updateTransactionDetails(event.target.name, event.target.value)
        }
      />
      <label htmlFor="description">Description:</label>
      <input
        className="contentInput"
        required
        type="text"
        name="description"
        placeholder="description"
        value={newTransaction.description}
        onChange={(event) =>
          updateTransactionDetails(event.target.name, event.target.value)
        }
      />
      <label htmlFor="amount">Amount:</label>
      <input
        className="contentInput"
        required
        type="number"
        name="amount"
        placeholder="amount"
        value={newTransaction.amount}
        onChange={(event) =>
          updateTransactionDetails(event.target.name, event.target.value)
        }
      />
      <input type="submit" />
    </form>
  );
}

export default TransactionForm;
