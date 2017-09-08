const express = require('express');
const uuidv4 = require ('uuid/v4');

const router = express.Router();

module.exports = (services) => {
  /* GET stations listing. */
  router.get('/stations', async (req, res) => {
    try {
      const stations = await services.db.places.list();
      res.status(200).send(stations);
    } catch (err) {
      throw err;
    }
  });

  router.get('/route', async (req, res) => {
    try {
      const routes = [
        {"name":"source","lat":35.7074693,"lng":139.9589668},
        {"name":"Yoyogi-Uehara","lat":35.668988,"lng":139.679857},
        {"name":"Naka-Meguro","lat":35.6442877,"lng":139.6990956},
        {"name":"destination","lat":35.7884045,"lng":139.6122459}
      ]
      res.status(200).send(routes);
    } catch (err) {
      throw err;
    }
  });

  router.post('/route', async (req, res) => {
    try {
      const routes = req.body;
      const tracknum = uuidv4();

      let trip = {}
      trip.tracknum = tracknum;
      trip.status = "inprogress";
      let result = await services.db.trip.create(trip);

      res.status(200).send(result);
    } catch (err) {
      throw err;
    }
  });



  return router;
};
