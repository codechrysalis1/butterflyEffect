const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL || `postgres://${process.env.USER}@127.0.0.1:5432/air_delivery`,
  searchPath: 'public',
});

module.exports = db;
