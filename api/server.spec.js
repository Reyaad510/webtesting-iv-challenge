const request = require('supertest');
const server = require('./server.js');

const db = require('../data/dbConfig.js');

describe('server.js', () => {
    
    describe('GET /', () => {
        xit('should return 200', () => {
            return request(server)
              .get('/')
              .then(res => {
                  expect(res.status).toBe(200);
              });
        })

        it('should return 200 using async/await', async() => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        })
    });
});

describe('GET /actors', () => {
    afterEach(async() => {
        await db('actors').truncate();
    })
    it('should hit endpoint', async () => {
        const res = await request(server).get('/actors');
        expect(res.status).toBe(200);
        expect(res.body).toEqual([]);
    })
})