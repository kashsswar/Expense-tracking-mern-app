// server/tests/finance.test.js

const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');

beforeAll(async () => {
  await sequelize.sync();
});

describe('Finance API', () => {
  let token;
  
  beforeAll(async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({ email: 'test@example.com', password: 'password' });
    token = res.body.token;
  });

  it('should add income', async () => {
    const res = await request(app)
      .post('/api/finance/addIncome')
      .set('Authorization', `Bearer ${token}`)
      .send({ amount: 1000, source: 'Salary' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('amount', 1000);
  });

  it('should add expense', async () => {
    const res = await request(app)
      .post('/api/finance/addExpense')
      .set('Authorization', `Bearer ${token}`)
      .send({ amount: 500, category: 'Groceries' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('amount', 500);
  });

  it('should view balances', async () => {
    const res = await request(app)
      .get('/api/finance/viewBalances')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('totalIncome');
    expect(res.body).toHaveProperty('totalExpense');
    expect(res.body).toHaveProperty('balance');
  });
});
