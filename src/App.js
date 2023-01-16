import React, {useState, useEffect} from 'react';
import './App.css';
import Transactionals from './components/Transactionals';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {

  
  const [transactions, setTransactions] = useState([])
  const [newTransaction, setNewTransaction] = useState({
    date : '',
    description : '',
    category : '',
    amount : 0
  });
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
    .then(resp => resp.json())
    .then(data => {
      setTransactions(data)
    })
  },[])    


  return (
    <div className="App">
      <header>USER TRANSACTION</header>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <TransactionForm newTransaction={newTransaction} setNewTransaction={setNewTransaction} setTransactions={setTransactions} transactions={transactions} />
      <Transactionals transactions={transactions}  searchValue={searchValue}/>
    </div>
  );
}

export default App;
