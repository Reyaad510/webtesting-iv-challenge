const db = require('../data/dbConfig.js');
const Actors = require('./actorsModel.js');

describe('the actors model', () => {

    describe('insert()', () => {

        afterEach( async () => {
            await db('actors').truncate();
        })
        
        it('should insert actors into the db', async () => {
            await Actors.insert({ name: 'reyaad' });

            // use this to confirm with knex
            const actors = await db('actors');

            expect(actors).toHaveLength(1);
            expect(actors[0].name).toBe('reyaad');
        });
    });
});