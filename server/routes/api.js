const express = require('express');
const router = express.Router();

const Dijkstra = require('../utils/droneController');

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
