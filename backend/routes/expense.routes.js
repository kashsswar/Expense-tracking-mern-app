const express = require('express');
const auth = require('../middleware/auth');
const Expense = require('../models/expense.expense.model.js');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { amount, description, date } = req.body;
  try {
    const newExpense = new Expense({ userId: req.user.id, amount, description, date });
    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const expenses = await Expense.findAll({ where: { userId: req.user.id } });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
