const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('episodes routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of episodes with nested quotes', async () => {
    const res = await request(app).get('/episodes');
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "number": 201,
          "quotes": Array [
            Object {
              "characterId": 4,
              "detail": "I'm sorry I didn't respond to like one text David!",
              "episodeId": 1,
              "id": 7,
            },
            Object {
              "characterId": 1,
              "detail": "What you did was impulsive, capricious, and melodramatic. But, it was also wrong.",
              "episodeId": 1,
              "id": 1,
            },
            Object {
              "characterId": 4,
              "detail": "I didn't go missing, David. The FBI knew where I was the entire time!",
              "episodeId": 1,
              "id": 6,
            },
          ],
          "season": 2,
          "title": "Finding David",
        },
        Object {
          "id": "2",
          "number": 308,
          "quotes": Array [
            Object {
              "characterId": 2,
              "detail": "Tweet us on Facebook!",
              "episodeId": 2,
              "id": 2,
            },
          ],
          "season": 3,
          "title": "Motel Review",
        },
        Object {
          "id": "3",
          "number": 303,
          "quotes": Array [
            Object {
              "characterId": 2,
              "detail": "I dont want to be taken advantage of because I'm overdressed.",
              "episodeId": 3,
              "id": 3,
            },
          ],
          "season": 3,
          "title": "New Car",
        },
        Object {
          "id": "4",
          "number": 302,
          "quotes": Array [
            Object {
              "characterId": 3,
              "detail": "I'm starting to feel like I'm trapped in an Avril Lavigne lyric here.",
              "episodeId": 4,
              "id": 4,
            },
          ],
          "season": 3,
          "title": "The Throuple",
        },
        Object {
          "id": "5",
          "number": 301,
          "quotes": Array [
            Object {
              "characterId": 3,
              "detail": "Excuse me, I haven't bedazzled anything since I was 22.",
              "episodeId": 5,
              "id": 5,
            },
          ],
          "season": 3,
          "title": "Opening Night",
        },
        Object {
          "id": "6",
          "number": 404,
          "quotes": Array [
            Object {
              "characterId": 3,
              "detail": "I'm sorry that I just know what looks correct. And this situation is not correct! Toilet plungers on display at the front of a store, is incorrect! Breath mints where the lip balms should be. Not correct! Not correct. These mountaineering shoes that my boyfriend is wearing, looking like Oprah on a Thanksgiving Day hike, incorrect.",
              "episodeId": 6,
              "id": 8,
            },
            Object {
              "characterId": 2,
              "detail": "Gossip is the devil's telephone. Best to just hang up.",
              "episodeId": 6,
              "id": 9,
            },
          ],
          "season": 4,
          "title": "Girls' Night",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
