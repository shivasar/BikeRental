const express = require('express');
const { getBikesByCity } = require('../controllers/bikeController');
const router = express.Router();
router.get('/:city', getBikesByCity);
module.exports = router;
