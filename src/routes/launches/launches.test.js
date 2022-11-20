const request = require('supertest');
const app = require('../../app');


describe('TEST GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    })
})

describe('TEST POST /launch', () => {
    test('It should respond with 201 created', async () => {
        const response = await request(app)
        .post('/launches')
        .send({
            mission: "ZTM155",
            rocket: "ZTM Expeimental ISL",
            target: "Kepler-186 f",
            launchDate: "July 23, 2023"
        })
        .expect('Content-Type', /json/)
        .expect(201);
    });
    test('It should catch missing required properties', () => {});
    test('It should catch invalid dates', () => {});
})