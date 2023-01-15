import React from "react";


function TransactionForm({newTransaction, setNewTransaction, setTransactions, transactions}){
    
    function updateTransactionDetails(name, value){
        setNewTransaction({...newTransaction, [name]: value});
    }


    return(
        


        <form onSubmit={(event) => {
            event.preventDefault();


            fetch("http://localhost:3000/transactions",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                    Accept : "application/json"
                },
                body : JSON.stringify(newTransaction)
            })
                .then(resp => resp.json())
                .then(data => setTransactions([...transactions, data]))
            

        }}>
             <input type="date" name="date" placeholder="date" value={newTransaction.date} onChange={(event) => updateTransactionDetails(event.target.name, event.target.value)}/>
            <input type="text" name="category" placeholder="category" value={newTransaction.category} onChange={(event) => updateTransactionDetails(event.target.name, event.target.value)}/>
            <input type="text" name="description" placeholder="description" value={newTransaction.description} onChange={(event) => updateTransactionDetails(event.target.name, event.target.value)} />
            <input type="number" name="amount" placeholder="amount" value={newTransaction.amount} onChange={(event) => updateTransactionDetails(event.target.name, event.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default TransactionForm;