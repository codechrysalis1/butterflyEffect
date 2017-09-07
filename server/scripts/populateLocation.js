const fs = require('fs');
const db = require('../knexfile');

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
    // TODO modify location.json to having only lat & lng
    for (const station of stations) {
      const item = {};
      item.latitude = station.lat;
      item.longitude = station.lng;
      item.type = 'station';
      await db('place').insert(item);
    }
  } catch(err) {
    console.error('Error updating records', err);
  }
  process.exit();
})();
