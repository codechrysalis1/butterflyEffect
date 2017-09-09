/* eslint-disable global-require */
const Knex = require('knex');

module.exports = (config) => {
  console.log('INDEX CONFIG')
  console.log(config);
  const knex = Knex(config);

  return {
    stations: require('./stations')(knex),
  };
};
