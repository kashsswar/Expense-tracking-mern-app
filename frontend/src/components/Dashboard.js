// src/components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user ? user.username : 'Guest'}</p>
      <nav>
        <ul>
          <li><Link to="/add-income">Add Income</Link></li>
          <li><Link to="/add-expense">Add Expense</Link></li>
          <li><Link to="/view-balances">View Balances</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
