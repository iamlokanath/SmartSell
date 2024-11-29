const express = require('express');
const { predictHandler } = require('../controllers/predictionController');
const router = express.Router();

// Route to handle prediction
router.post('/predict', predictHandler);

module.exports = router;
