const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');

router.post('/predict', predictionController.predictPrice);

module.exports = router;
