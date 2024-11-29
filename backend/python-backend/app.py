from flask import Flask, request, jsonify
from flask_cors import CORS  
import pandas as pd
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the trained model from the pickle file
with open('E:/Code with Lokanath/02.Project/@2024/03FullStack/Smart Sell/backend/python-backend/model/updated_best_model.pkl', 'rb') as model_file:
    loaded_model = pickle.load(model_file)

@app.route('/')
def home():
    return "API is working!"

@app.route('/prediction', methods=['POST'])
def predict():
    try:
        # Retrieve JSON data from the request
        data = request.get_json()
        print("Received data:", data)  # Log the received data for debugging

        # Extracting data from the JSON request
        model_name = data.get('model_name')
        age = data.get('age')
        battery_damage = data.get('battery_damage')
        screen_damage = data.get('screen_damage')
        ram = data.get('ram')
        rom = data.get('rom')
        make_receive_call = data.get('make_receive_call')
        touch_screen_working = data.get('touch_screen_working')
        is_original_screen = data.get('is_original_screen')

        # Ensure all fields are provided
        if not all([model_name, age, battery_damage, screen_damage, ram, rom,
                    make_receive_call, touch_screen_working, is_original_screen]):
            return jsonify({'error': 'Please fill in all fields.'}), 400

        # Convert inputs to appropriate types, handling None values
        try:
            age = float(age)
            battery_damage = float(battery_damage)
            screen_damage = float(screen_damage)
            ram = float(ram)
            rom = int(rom)
            
            # Convert the 'True'/'False' strings to boolean values
            make_receive_call = make_receive_call.lower() == 'true' if isinstance(make_receive_call, str) else bool(make_receive_call)
            touch_screen_working = touch_screen_working.lower() == 'true' if isinstance(touch_screen_working, str) else bool(touch_screen_working)
            is_original_screen = is_original_screen == '1' if isinstance(is_original_screen, str) else bool(is_original_screen)

        except ValueError:
            return jsonify({'error': 'Age, battery damage, and screen damage must be numeric values.'}), 400

        # Prepare the input DataFrame
        input_data = pd.DataFrame({
            'model_name': [model_name],
            'age': [age],
            'battery_damage': [battery_damage],
            'screen_damage': [screen_damage],
            'ram': [ram],
            'rom': [rom],
            'make_receive_call': [make_receive_call],
            'touch_screen_working': [touch_screen_working],
            'isOriginalScreen': [is_original_screen]
        })

        print("Prepared input data for model:", input_data)  # Log the input data format

        # Make predictions using the loaded model
        predicted_price = loaded_model.predict(input_data)

        # Ensure the prediction result is valid
        if predicted_price is None or len(predicted_price) == 0:
            return jsonify({'error': 'Prediction returned no results.'}), 400

        # Ensure predicted price is numeric
        predicted_price_value = predicted_price[0]
        if not isinstance(predicted_price_value, (int, float)):
            return jsonify({'error': 'Prediction result is not a valid number.'}), 400

        # Round the predicted price safely
        rounded_price = round(predicted_price_value, 2)

        return jsonify({'predicted_price': rounded_price})

    except Exception as e:
        print(f"An error occurred: {str(e)}")  # Log detailed error information
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
