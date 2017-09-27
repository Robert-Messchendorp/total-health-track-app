const express = require('express');
const router = express.Router();

// var User = require('../models/user');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Shit is bananas');
});

// router.get('/cms', (req, res) => {
//   res.send('Shit is bananas');
// });

// router.get('/pages', (req, res) => {
//   res.send('Shit is bananas');
// });

module.exports = router;