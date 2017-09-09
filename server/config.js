const config = {
  // database connection configs
  db: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
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
console.log('config config=', config);
module.exports = config;
