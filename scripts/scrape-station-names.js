/* eslint-disable no-console */

const fs = require('fs');
const fetch = require('isomorphic-fetch');

let count = 0;
const APIKEY  = '';
const PORTION = 9;

const stations = JSON.parse(fs.readFileSync('../data/station-en.json')).slice(PORTION * 1000, (PORTION + 1) * 1000);

// Using timeout (fast and does not exceed rate-limit)
const func = async station => {
  try {
    let res = await (await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${station.replace(' ', '+')}+Japan&key=${APIKEY}`)).json();
    if (res.error_message) {
      console.error(res.error_message)
      throw(new Error(res.error_message));
    }

    let cord = {
      name: station,
      lat: res.results[0].geometry.location.lat,
      lng: res.results[0].geometry.location.lng,
    };
    console.log('Storing', station);
    fs.appendFile(`../data/station-cords-${PORTION}.json`, JSON.stringify(cord) + ',\n', () => {});
  } catch(err) {
    let empty = {
      name: station,
      lat: 0,
      lng: 0,
    }
    console.log('\n----- Failed -----\n', station, '\n------------------\n');
    fs.appendFile(`../data/station-cords-${PORTION}.json`, JSON.stringify(empty) + ',\n', () => {});
  }
}

for(let station of stations) {
  setTimeout(() => func(station), 50 * count++);
}
