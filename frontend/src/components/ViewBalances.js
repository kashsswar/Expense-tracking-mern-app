// src/components/ViewBalances.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncomes } from '../features/income/incomeSlice';
import { fetchExpenses } from '../features/expense/expenseSlice';

const ViewBalances = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.income.items);
  const expenses = useSelector((state) => state.expense.items);

  useEffect(() => {
    dispatch(fetchIncomes());
    dispatch(fetchExpenses());
  }, [dispatch]);

  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div>
      <h1>View Balances</h1>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expense: ${totalExpense}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
};

export default ViewBalances;
