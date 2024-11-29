const predictionService = require('../services/predictionService');

const predictPrice = async (req, res) => {
  try {
    const result = await predictionService.predict(req.body);
    res.json({ predictedPrice: result });
  } catch (error) {
    console.error('Error during prediction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  predictPrice,
};
