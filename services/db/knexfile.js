module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://127.0.0.1:5432/air_delivery',
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
