// client/src/components/AddExpense.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import AddExpense from '../expense/AddExpense';

test('renders AddExpense component', () => {
  render(
    <Provider store={store}>
      <AddExpense />
    </Provider>
  );

  expect(screen.getByPlaceholderText(/amount/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/category/i)).toBeInTheDocument();
  expect(screen.getByText(/add expense/i)).toBeInTheDocument();
});

test('adds an expense', async () => {
  render(
    <Provider store={store}>
      <AddExpense />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/amount/i), { target: { value: '500' } });
  fireEvent.change(screen.getByPlaceholderText(/category/i), { target: { value: 'Groceries' } });
  fireEvent.click(screen.getByText(/add expense/i));

  expect(await screen.findByText(/loading/i)).toBeInTheDocument();
});
