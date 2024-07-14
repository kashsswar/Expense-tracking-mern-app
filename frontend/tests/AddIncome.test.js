// client/src/components/AddIncome.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import AddIncome from '../income/AddIncome';

test('renders AddIncome component', () => {
  render(
    <Provider store={store}>
      <AddIncome />
    </Provider>
  );

  expect(screen.getByPlaceholderText(/amount/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/source/i)).toBeInTheDocument();
  expect(screen.getByText(/add income/i)).toBeInTheDocument();
});

test('adds an income', async () => {
  render(
    <Provider store={store}>
      <AddIncome />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/amount/i), { target: { value: '1000' } });
  fireEvent.change(screen.getByPlaceholderText(/source/i), { target: { value: 'Salary' } });
  fireEvent.click(screen.getByText(/add income/i));

  expect(await screen.findByText(/loading/i)).toBeInTheDocument();
});
