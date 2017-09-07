// This is server-side code, rule is intended for client, console.error() is required.
/* eslint-disable no-console */

const express = require('express');
const Dijkstra = require('../utils/droneController');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ page: 'Api' });
});

router.post('/calculate', (req, res) => {
  const dijkstra = new Dijkstra(req.body.from, req.body.dest, { MAX_DISTANCE: 4 });
  const result = dijkstra.solve();
  console.log(result);
  res.json(result);
});

module.exports = router;
