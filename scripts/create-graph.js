const helper = require('../server/utils/dbHelper');
const { getStations } = helper;
const fs = require('fs');
const checkSpace = require('../server/lib/AirspaceChecker.js').checkSpace;
const _ = require('underscore');

const distance = (a, b) => {
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(a.lat - b.lat);
  const dLng = deg2rad(a.lng - b.lng);
  const A = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(a.lat)) * Math.cos(deg2rad(b.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const C = 2 * Math.atan2(Math.sqrt(A), Math.sqrt(1 - A));
  return R * C; // Distance in km
};

(async () => {
  const data = await getStations();

  let stations = {};
  for(let station of data){
    stations[station.id] = {};
    stations[station.id].lat = station.lat;
    stations[station.id].lng = station.lng;
  }

  let graph = {};
  let counter = 1;
  for (let point in stations) {
    for (let adj in stations) {
      counter++;
      if (point === adj) {
        continue;
      }
      if (distance(stations[point], stations[adj]) <= 2 ) {
        // check for airmap shit
        let origin = [stations[point].lat, stations[point].lng];
        let destination = [stations[adj].lat, stations[adj].lng];
        let valid = await checkSpace(origin, destination);
        if (valid) {
          console.log('IT IS VALID!!');
          graph[point] = graph[point] || {};
          graph[point][adj] = distance(stations[point], stations[adj]);
        }
      }
    }
  }
  fs.writeFileSync('./data/graph.json', JSON.stringify(graph));
  console.log('All done!');
  process.exit();
})();
