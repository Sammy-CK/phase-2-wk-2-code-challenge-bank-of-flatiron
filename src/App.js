import React, { useState, useEffect } from "react";
import "./App.css";
import Transactionals from "./components/Transactionals";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";
import "./bootstrap.css";
import "./index.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://sammy-ck.github.io/db.json")
      .then((resp) => resp.json())
      .then((data) => {
        setTransactions(data.transactions);
      });
  }, []);

  return (
    <div className="appDisplay">
      <header className="titleHeader">BANK OF FLATIRON TRANSACTION</header>
      <TransactionForm
        newTransaction={newTransaction}
        setNewTransaction={setNewTransaction}
        setTransactions={setTransactions}
        transactions={transactions}
      />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Transactionals transactions={transactions} searchValue={searchValue} />
    </div>
  );
}

export default App;
