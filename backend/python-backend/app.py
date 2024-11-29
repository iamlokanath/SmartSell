from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load the trained model
model = joblib.load('E:/Code with Lokanath/02.Project/@2024/03FullStack/Smart Sell/backend/python-backend/model/updated_best_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from the POST request
        input_data = request.json
        df = pd.DataFrame(input_data)

        # Make predictions
        predictions = model.predict(df)

        # Return predictions as JSON
        return jsonify({'predictions': predictions.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
