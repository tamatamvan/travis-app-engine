'use strict'
const express = require('express');
const router = express.Router();

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' });
});

router.get('/haha', (req, res, next) => {
  res.send({ message: 'HAHA!' });
});

module.exports = router;
