/* eslint-disable padded-blocks */
const fs = require('fs');
const fetch = require('isomorphic-fetch');

const LOCATION_DATA_PATH = '../data/';
const DATA_FILE = 'location.json';

const stations = ['Meguro', 'Oshiage'];


(async () => {
  try {

    const fetchLocation = (station) => {
      console.log('station', station);
      fetch(`http://maps.googleapis.com/maps/api/geocode/json?address=${station}`)
        .then((res) => {
          console.log('res', res);
          if (res.status === 'OK' && res.results.length > 0) {
            return JSON.parse(res);
          }
        })
        .catch((err)=> {
          console.log(err);
        });
    };

    // const promises = [];
    const promises = stations.map(station => fetchLocation(station));
    // for (let i = 0; i < stations.length; i += 1) {
    //   const result = fetchLocation(stations[i]);
    //   // promises.push(result);
    // }
    // console.log(promises);

    Promise.all(promises).then((res) => {
      console.log(res);
    });

  } catch (err) {
    console.error('Error updating records', err);
  }
})();
