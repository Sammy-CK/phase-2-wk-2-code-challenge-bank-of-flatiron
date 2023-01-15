import React from "react";

function Transactionals({transactions}){

    return(
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    </tr>
            )
        )}
            </tbody>
        </table>
    )
}

export default Transactionals;