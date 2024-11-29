import pickle
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler, OneHotEncoder

# Load the saved model
model_file_path = 'E:/Code with Lokanath/02.Project/@2024/03FullStack/Smart Sell/backend/python-backend/model/updated_best_model.pkl'
with open(model_file_path, 'rb') as model_file:
    model = pickle.load(model_file)

# Function to make predictions
def predict(data):
    # Data should be a dictionary or pandas DataFrame with necessary features
    features = pd.DataFrame([data])
    
    # Prepare the data (Ensure this preprocessing matches training preprocessing)
    # You can add feature scaling, encoding, etc. if required here
    return model.predict(features)[0]

if __name__ == "__main__":
    # Example usage
    sample_data = {
        'age': 2,
        'screen_damage': 1,
        'battery_damage': 0,
        'ram': 4,
        'rom': 64,
        'make_receive_call': 1,
        'touch_screen_working': 1,
        'isOriginalScreen': 1,
        'model_name': 'iphone'
    }
    
    price_prediction = predict(sample_data)
    print(f"Predicted Price: {price_prediction}")
