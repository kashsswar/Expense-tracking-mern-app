// src/features/expense/AddExpense.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from './expenseSlice';

const AddExpense = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const expenseStatus = useSelector((state) => state.expense.status);
  const error = useSelector((state) => state.expense.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense({ amount, description }));
  };

  return (
    <div>
      <h1>Add Expense</h1>
      {expenseStatus === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
