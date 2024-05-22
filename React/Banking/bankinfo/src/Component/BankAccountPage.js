import React, { useState, useEffect } from 'react';

const BankAccountPage = () => {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionAmount = parseFloat(amount);
    if (isNaN(transactionAmount)) {
      alert('Please enter a valid amount.');
      return;
    }

    if (transactionType === 'deposit') {
      setBalance(balance + transactionAmount);
    } else {
      if (balance < transactionAmount) {
        alert('Insufficient funds.');
        return;
      }
      setBalance(balance - transactionAmount);
    }

    const newTransaction = {
      type: transactionType,
      amount: transactionAmount,
      date: new Date().toLocaleString()
    };

    setTransactionHistory([...transactionHistory, newTransaction]);
    setAmount('');
  };

  return (
    <div>
      <h1>Bank Account</h1>
      <h2>Balance: ${balance}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
        <br />
        <label>
          Transaction Type:
          <select value={transactionType} onChange={handleTransactionTypeChange}>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Transaction History</h2>
      <ul>
        {transactionHistory.map((transaction, index) => (
          <li key={index}>
            {transaction.type === 'deposit' ? 'Deposit' : 'Withdraw'} of ${transaction.amount} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankAccountPage;