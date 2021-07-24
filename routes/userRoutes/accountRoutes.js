const express = require('express');
const db = require('../../config');

const router = express.Router();


router.get('/', (req, res) => {
    db('accounts')
    .then(accounts => {
      res.json(accounts);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get accounts' });
    });
  });


  module.exports = router;