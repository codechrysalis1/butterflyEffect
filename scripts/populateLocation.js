// This is server-side code, rule is intended for client, console.error() is required.
/* eslint-disable no-console */
/* eslint-disable padded-blocks */
const fs = require('fs');
const knex = require('knex');

console.log('populateLocation process.env.DATABASE_URL');
console.log(process.env.DATABASE_URL);

console.log('populateLocation CONFIG FILE:');
console.log(config);

const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  searchPath: 'public',
});

console.log('populateLocation db.connection:');
console.log(db);

(async () => {
  try {
    const result = await new Promise((resolve, reject) => {
      fs.readFile('../data/location.json', 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });

    const stations = JSON.parse(result);

    const insert = item =>
      db('place').insert(item)
        .then(res => res)
        .catch(err => console.error('Error inserting station location', err));

    const promises = stations.map((station) => {
      const item = {};
      item.latitude = station.lat;
      item.longitude = station.lng;
      item.type = 'station';
      return insert(item);
    });

    await Promise.all(promises);

  } catch (err) {
    console.error('Error updating records', err);
  }
  process.exit();
})();
