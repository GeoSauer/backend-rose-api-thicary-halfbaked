const pool = require('../utils/pool');

class Quote {
  id;
  characterId;
  episodeId;
  detail;

  constructor({ id, character_id, episode_id, detail }) {
    this.id = id;
    this.characterId = character_id;
    this.episodeId = episode_id;
    this.detail = detail;
  }

  // static async count() {
  //   const { rows } = await pool.query('SELECT COUNT(*) FROM quotes');
  //   return Number(rows[0].count);
  // }

  static async insert({ characterId, episodeId, detail }) {
    // implement insert to add new quote
    const { rows } = await pool.query(
      `
    INSERT INTO quotes (character_id, episode_id, detail)
VALUES ($1, $2, $3) RETURNING *`,
      [characterId, episodeId, detail]
    );
    return new Quote(rows[0]);
  }
}

module.exports = { Quote };
