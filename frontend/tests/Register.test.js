// client/src/components/Register.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Register from '../features/Register';

test('renders Register component', () => {
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );

  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  expect(screen.getByText(/register/i)).toBeInTheDocument();
});

test('registers a user', async () => {
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } });
  fireEvent.click(screen.getByText(/register/i));

  expect(await screen.findByText(/loading/i)).toBeInTheDocument();
});
