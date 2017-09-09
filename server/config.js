module.exports = {
  // database connection configs
  db: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://127.0.0.1:5432/air_delivery'
  },

  // port for server to run on
  express: {
    port: 3001,
  },

  // timestamp format for our logs
  logger: {
    format: 'dddd MMMM Do YYYY, h:mm:ss a',
  },
};
