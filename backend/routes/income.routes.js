const express = require('express');
const auth = require('../middleware/auth');
const Income = require('../models/income.model.js');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { amount, description, date } = req.body;
  try {
    const newIncome = new Income({ userId: req.user.id, amount, description, date });
    const income = await newIncome.save();
    res.json(income);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const incomes = await Income.findAll({ where: { userId: req.user.id } });
    res.json(incomes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
