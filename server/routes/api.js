const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ page: 'Api' });
});

router.post('/calculate', (req, res) => {
  res.json(['YAY!']);
});

module.exports = router;
