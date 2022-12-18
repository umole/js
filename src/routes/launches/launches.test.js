const request = require('supertest');
const app = require('../../app');


describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

describe('Test POST /launches', () => {
    const completeLaunchData = {
        mission: 'USS Enterprise',
        rocket: 'Umole Fire',
        target: 'kepler-186 f',
        launchDate: 'July 19, 1993',
    };

    const launchDataWithoutTheDate = {
        mission: 'USS Enterprise',
        rocket: 'Umole Fire',
        target: 'kepler-186 f',
    };

    const completeLaunchWithInvalidDate = {
        mission: 'USS Enterprise',
        rocket: 'Umole Fire',
        target: 'kepler-186 f',
        launchDate: 'ztm',
    };

    test('It should respond with 201 created', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201);

        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);

        expect(response.body).toMatchObject(launchDataWithoutTheDate);

    });

    test('It should catch missing required properties', async () => {
        const response = await request(app)
            .post('/launches')
            .send(launchDataWithoutTheDate)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            error: "Missing required launch property",
        });
    });

    test('It should catch invalid dates', async () => {
        const response = await request(app)
            .post('/launches')
            .send(completeLaunchWithInvalidDate)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            error: "Invalid launch date",
        });
    });
})