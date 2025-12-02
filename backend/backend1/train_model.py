import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle

from fetch_firestore import fetch_windmill_data


# -----------------------------
# Load Data from Firestore
# -----------------------------
df = fetch_windmill_data()

print("Fetched:", len(df), "rows")

# Keep only required columns
df = df[["windSpeed", "temperature", "vibrationLevel", "powerGenerated"]]

# -----------------------------
# CLEAN DATA — FIX FOR YOUR ERROR
# -----------------------------
# Remove rows with any missing values
df = df.dropna()

print("Rows after cleaning:", len(df))

# -----------------------------
# Train-Test Split
# -----------------------------
X = df[["windSpeed", "temperature", "vibrationLevel"]]
y = df["powerGenerated"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# -----------------------------
# Train Model
# -----------------------------
model = LinearRegression()
model.fit(X_train, y_train)

# -----------------------------
# Accuracy
# -----------------------------
score = model.score(X_test, y_test)
print("\nModel R² Accuracy:", round(score, 4))

# -----------------------------
# Save Model
# -----------------------------
with open("power_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("\nModel saved as power_model.pkl")
