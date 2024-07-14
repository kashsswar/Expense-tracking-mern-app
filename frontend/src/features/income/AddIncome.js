// src/features/income/AddIncome.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from './incomeSlice';

const AddIncome = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const incomeStatus = useSelector((state) => state.income.status);
  const error = useSelector((state) => state.income.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIncome({ amount, description }));
  };

  return (
    <div>
      <h1>Add Income</h1>
      {incomeStatus === 'loading' && <p>Loading...</p>}
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
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default AddIncome;
