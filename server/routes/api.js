// This is server-side code, rule is intended for client, console.error() is required.
/* eslint-disable no-console */

const express = require('express');
const Dijkstra = require('../utils/droneController');

const router = express.Router();

module.exports = (services) => {
  /* GET stations listing. */
  router.get('/stations', async (req, res) => {
    try {
      const stations = await services.db.stations.list();
      res.status(200).send(stations);
    } catch (err) {
      throw err;
    }
  });

  router.post('/calculate', (req, res) => {
    const dijkstra = new Dijkstra(req.body.from, req.body.dest, { MAX_DISTANCE: 4 });
    const result = dijkstra.solve();
    console.log(result);
    res.json(result);
  });

  return router;
};
