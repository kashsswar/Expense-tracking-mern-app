const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Expense extends Model {}

Expense.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Expense'
});

module.exports = Expense;
