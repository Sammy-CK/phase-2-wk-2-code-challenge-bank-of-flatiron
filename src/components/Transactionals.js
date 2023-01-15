import React from "react";
import TransactionalLi from './TransactionalLi';

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
            {
                <TransactionalLi transactions={transactions} />
            }
            </tbody>
        </table>
    )
}

export default Transactionals;