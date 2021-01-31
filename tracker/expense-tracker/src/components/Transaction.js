import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
//we could take prop also as a property
export const Transaction = ({transaction}) => {
    const sign=transaction.amount <0 ? '-':'+'
    const {deleteTransactions}=useContext(GlobalContext);
    return (
        <li className={transaction.amount<0?'minus':'plus'}>
            {transaction.text}
        Cash <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={()=>{deleteTransactions(transaction.id)}}>x</button>
      </li> 
    )
}
