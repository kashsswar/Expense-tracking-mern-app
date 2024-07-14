// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Dashboard from './components/Dashboard';
import AddIncome from './features/income/AddIncome';
import AddExpense from './features/expense/AddExpense';
import ViewBalances from './components/ViewBalances';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add-income" component={AddIncome} />
          <Route path="/add-expense" component={AddExpense} />
          <Route path="/view-balances" component={ViewBalances} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
