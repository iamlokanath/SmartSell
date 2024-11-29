const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const predictionRoutes = require('./routes/predictionRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', predictionRoutes);  // API routes for prediction

module.exports = app;
