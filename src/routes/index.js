const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ data: 'hello world' });
});

module.exports = router;
