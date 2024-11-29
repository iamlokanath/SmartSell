const { makePrediction } = require('../services/predictionService');

const predictHandler = async (req, res) => {
  try {
    const inputData = req.body; // Input from frontend
    const predictions = await makePrediction(inputData);

    // Send predictions back to the frontend
    res.status(200).json({ predictions });
  } catch (error) {
    console.error('Error in predictionHandler:', error.message);
    res.status(500).json({ error: 'Failed to get predictions' });
  }
};

module.exports = { predictHandler };
