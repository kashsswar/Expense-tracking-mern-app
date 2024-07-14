const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Income extends Model {}

Income.init({
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
  modelName: 'Income'
});

module.exports = Income;
