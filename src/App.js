import React, {useState, useEffect} from 'react';
import './App.css';
import Transactionals from './components/Transactionals';

function App() {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
    .then(resp => resp.json())
    .then(data => setTransactions(data))
  },[])


  // console.log(transactions)

  return (
    <div className="App">
      <header>USER TRANSACTION</header>
      <Transactionals transactions={transactions} />
    </div>
  );
}

export default App;
