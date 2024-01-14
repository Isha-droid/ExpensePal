import React, { useState,useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
function AddTransaction() {
    let [text,setText]=useState('');
    let [amount,setAmount]=useState(0);
    const { addTransaction} = useContext(GlobalContext);
    function onSubmit(e) {
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount:+amount
      };
      addTransaction(newTransaction);
    }
    
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}}placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
