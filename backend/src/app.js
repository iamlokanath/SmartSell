const express = require('express');
const predictionRoutes = require('./routes/predictionRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Prediction route
app.use('/api', predictionRoutes);

module.exports = app;
