// server/tests/auth.test.js

const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');

beforeAll(async () => {
  await sequelize.sync();
});

describe('Auth API', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ email: 'test@example.com', password: 'password' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({ email: 'test@example.com', password: 'password' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
