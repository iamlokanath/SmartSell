import pandas as pd

def clean_data(file_path):
    # Load the dataset
    data = pd.read_csv(file_path)

    # Check for missing values and impute if necessary
    # Impute numerical features with the mean
    numerical_cols = data.select_dtypes(include=['float64', 'int64']).columns
    data[numerical_cols] = data[numerical_cols].fillna(data[numerical_cols].mean())

    # Drop rows with missing values in categorical columns if necessary
    categorical_cols = data.select_dtypes(include=['object']).columns
    data[categorical_cols] = data[categorical_cols].fillna('Unknown')

    # Optionally, remove duplicates
    data.drop_duplicates(inplace=True)

    # Additional cleaning steps can be added here
    # For example, ensure model names are in a consistent format
    data['model_name'] = data['model_name'].str.strip()  # Remove leading/trailing whitespace
    data['model_name'] = data['model_name'].str.lower()  # Convert to lowercase

    return data
