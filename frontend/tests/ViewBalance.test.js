// client/src/components/ViewBalances.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ViewBalances from '../components/ViewBalances';

test('renders ViewBalances component', () => {
  render(
    <Provider store={store}>
      <ViewBalances />
    </Provider>
  );

  expect(screen.getByText(/view balances/i)).toBeInTheDocument();
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
