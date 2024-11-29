import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import r2_score
from data_cleaning import clean_data
import pickle

# Load and clean the dataset
file_path = 'E:/Code with Lokanath/02.Project/@2024/03FullStack/Smart Sell/backend/python-backend/data/Updated_dataset.csv'
data = clean_data(file_path)

# Features and target variable
X = data.drop('price', axis=1)
y = data['price']

# Define categorical and numerical columns
categorical_columns = ['model_name']
numerical_columns = ['age', 'screen_damage', 'battery_damage', 'ram', 'rom']
boolean_columns = ['make_receive_call', 'touch_screen_working', 'isOriginalScreen']

# Create column transformer for preprocessing
column_trans = ColumnTransformer(
    transformers=[('onehot', OneHotEncoder(handle_unknown='ignore'), categorical_columns),
                  ('num', StandardScaler(), numerical_columns)],
    remainder='passthrough'
)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1, random_state=42)

# Create a pipeline with preprocessing and RandomForestRegressor
pipe = Pipeline(steps=[('preprocessor', column_trans),
                       ('model', RandomForestRegressor(random_state=42))])

# Hyperparameter tuning using GridSearchCV
param_grid = {
    'model__n_estimators': [100, 200, 300],
    'model__max_depth': [10, 15, 20, None],
    'model__min_samples_split': [2, 5, 10],
    'model__min_samples_leaf': [1, 2, 4],
    'model__max_features': ['auto', 'sqrt', 'log2'],
}

grid_search = GridSearchCV(pipe, param_grid, cv=5, scoring='r2', n_jobs=-1, verbose=2)
grid_search.fit(X_train, y_train)

# Best estimator
best_rf = grid_search.best_estimator_

# Predict
y_pred = best_rf.predict(X_test)

# Save the trained model to a pickle file
with open('updated_best_model.pkl', 'wb') as model_file:
    pickle.dump(best_rf, model_file)

# Evaluate the model
r2 = r2_score(y_test, y_pred)
print(f'R2 Score (Accuracy): {r2 * 100:.2f}%')
