const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('quotes routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POST /quotes should add a new quote', async () => {
    const newQuote = {
      episodeId: '6',
      characterId: '3',
      detail:
        'Okay, I have never heard someone say so many wrong things, one after the other, consecutively, in a row.',
    };
    const resp = await request(app).post('/quotes').send(newQuote);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "characterId": "3",
        "detail": "Okay, I have never heard someone say so many wrong things, one after the other, consecutively, in a row.",
        "episodeId": "6",
        "id": "10",
      }
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
