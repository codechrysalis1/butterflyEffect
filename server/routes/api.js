const express = require('express');

const router = express.Router();

module.exports = (services) => {
  /* GET users listing. */
  router.get('/stations', async (req, res) => {
    try {
      let stations = await services.db.stations.list();
      res.status(200).send(stations);
    } catch (err) {
      throw err;
    }
  });

  return router;
};
