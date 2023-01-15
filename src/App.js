import React, {useState, useEffect} from 'react';
import './App.css';
import Transactionals from './components/Transactionals';
import TransactionForm from './components/TransactionForm';

function App() {

  const [transactions, setTransactions] = useState([])
  const [newTransaction, setNewTransaction] = useState({
    date : '',
    description : '',
    category : '',
    amount : 0
  });

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
    .then(resp => resp.json())
    .then(data => setTransactions(data))
  },[])


  // console.log(transactions)

  return (
    <div className="App">
      <header>USER TRANSACTION</header>
      <TransactionForm newTransaction={newTransaction} setNewTransaction={setNewTransaction} setTransactions={setTransactions} transactions={transactions} />
      <Transactionals transactions={transactions}  />
    </div>
  );
}

export default App;
