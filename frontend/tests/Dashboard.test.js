// client/src/components/Dashboard.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Dashboard from '../components/Dashboard';

test('renders Dashboard component', () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/please log in to view your dashboard./i)).toBeInTheDocument();
});
