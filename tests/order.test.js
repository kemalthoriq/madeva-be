const request = require('supertest');
const app = require('../app');

describe('Order Payment API', () => {
    it('should create a new order', async() => {

        const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');

        const res = await request(app)
            .get('/api/order')
            .set('sec-token', today)
            .query({ amount: 100000, reff: '2000837452', name: 'Test', hp: '0812345678' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('amount');
    });
});