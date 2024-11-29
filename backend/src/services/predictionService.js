const axios = require('axios');

const makePrediction = async (inputData) => {
  try {
    // Call the Python backend
    const response = await axios.post('http://localhost:5000/predict', inputData);

    // Return predictions from the Python backend
    return response.data.predictions;
  } catch (error) {
    console.error('Error while calling Python backend:', error.message);
    throw new Error('Failed to fetch prediction from Python backend');
  }
};

module.exports = { makePrediction };
