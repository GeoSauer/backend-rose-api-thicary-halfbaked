const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('characters routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of characters with nested quotes', async () => {
    const res = await request(app).get('/characters');
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "first_name": "Moira",
          "id": "1",
          "last_name": "Rose",
          "quotes": Array [
            Object {
              "characterId": 1,
              "detail": "What you did was impulsive, capricious, and melodramatic. But, it was also wrong.",
              "episodeId": 1,
              "id": 1,
            },
          ],
        },
        Object {
          "first_name": "Johnny",
          "id": "2",
          "last_name": "Rose",
          "quotes": Array [
            Object {
              "characterId": 2,
              "detail": "Gossip is the devil's telephone. Best to just hang up.",
              "episodeId": 6,
              "id": 9,
            },
            Object {
              "characterId": 2,
              "detail": "I dont want to be taken advantage of because I'm overdressed.",
              "episodeId": 3,
              "id": 3,
            },
            Object {
              "characterId": 2,
              "detail": "Tweet us on Facebook!",
              "episodeId": 2,
              "id": 2,
            },
          ],
        },
        Object {
          "first_name": "David",
          "id": "3",
          "last_name": "Rose",
          "quotes": Array [
            Object {
              "characterId": 3,
              "detail": "I'm sorry that I just know what looks correct. And this situation is not correct! Toilet plungers on display at the front of a store, is incorrect! Breath mints where the lip balms should be. Not correct! Not correct. These mountaineering shoes that my boyfriend is wearing, looking like Oprah on a Thanksgiving Day hike, incorrect.",
              "episodeId": 6,
              "id": 8,
            },
            Object {
              "characterId": 3,
              "detail": "Excuse me, I haven't bedazzled anything since I was 22.",
              "episodeId": 5,
              "id": 5,
            },
            Object {
              "characterId": 3,
              "detail": "I'm starting to feel like I'm trapped in an Avril Lavigne lyric here.",
              "episodeId": 4,
              "id": 4,
            },
          ],
        },
        Object {
          "first_name": "Alexis",
          "id": "4",
          "last_name": "Rose",
          "quotes": Array [
            Object {
              "characterId": 4,
              "detail": "I'm sorry I didn't respond to like one text David!",
              "episodeId": 1,
              "id": 7,
            },
            Object {
              "characterId": 4,
              "detail": "I didn't go missing, David. The FBI knew where I was the entire time!",
              "episodeId": 1,
              "id": 6,
            },
          ],
        },
        Object {
          "first_name": "Stevie",
          "id": "5",
          "last_name": "Budd",
          "quotes": Array [],
        },
        Object {
          "first_name": "Roland",
          "id": "6",
          "last_name": "Schitt",
          "quotes": Array [],
        },
        Object {
          "first_name": "Jocelyn",
          "id": "7",
          "last_name": "Schitt",
          "quotes": Array [],
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
