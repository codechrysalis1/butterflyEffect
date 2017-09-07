const express = require('express');

const router = express.Router();

module.exports = (services)=> {
  /* GET users listing. */
  router.get('/', (req, res) => {
    res.json({ page: 'Api' });
  });

  return router;
}