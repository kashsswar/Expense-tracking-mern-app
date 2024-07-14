// src/features/income/incomeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIncomes = createAsyncThunk('income/fetchIncomes', async () => {
  const response = await axios.get('/api/income');
  return response.data;
});

export const addIncome = createAsyncThunk('income/addIncome', async (incomeData) => {
  const response = await axios.post('/api/income', incomeData);
  return response.data;
});

const incomeSlice = createSlice({
  name: 'income',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncomes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIncomes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchIncomes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default incomeSlice.reducer;
