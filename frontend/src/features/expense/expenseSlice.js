// src/features/expense/expenseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExpenses = createAsyncThunk('expense/fetchExpenses', async () => {
  const response = await axios.get('/api/expense');
  return response.data;
});

export const addExpense = createAsyncThunk('expense/addExpense', async (expenseData) => {
  const response = await axios.post('/api/expense', expenseData);
  return response.data;
});

const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default expenseSlice.reducer;
