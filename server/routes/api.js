/* eslint-disable no-await-in-loop */
const express = require('express');
const uuidv4 = require('uuid/v4');

const router = express.Router();

module.exports = (services) => {
  /* GET stations listing. */
  router.get('/stations', async (req, res) => {
    try {
      const stations = await services.db.place.list();
      res.status(200).send(stations);
    } catch (err) {
      throw err;
    }
  });

  router.post('/route', async (req, res) => {
    try {
      const routes = req.body;
      const tracknum = uuidv4();

      const trip = {};
      trip.tracknum = tracknum;
      trip.status = 'inprogress';
      // db trip
      const tripResult = await services.db.trip.create(trip);
      const tripid = tripResult.id;

      for (let i = 0; i < routes.length - 1; i += 1) {
        const segment = {};
        segment.source_id = routes[i].id;
        segment.des_id = routes[i + 1].id;
        segment.trip_id = tripid;
        segment.drone_id = null;
        // db segment
        await services.db.segment.create(segment);

        if (routes[i].name === 'source' || routes[i].name === 'destination') {
          const route = {};
          route.type = routes[i].name;
          route.latitude = routes[i].lat;
          route.longitude = routes[i].lng;
          // db place
          await services.db.place.create(route);
        }
      }

      res.status(200).send('Successful!');
    } catch (err) {
      throw err;
    }
  });

  return router;
};
