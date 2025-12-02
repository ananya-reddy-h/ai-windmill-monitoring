AI-Powered Windmill Monitoring & Prediction System

A full-stack system that monitors windmill performance in real-time and uses Machine Learning (Linear Regression) to predict power generation.
Built using React, Firebase Firestore, Python Flask, and scikit-learn.

Features
1. Real-Time Monitoring

Wind Speed

Temperature

Vibration Level

Power Generated

Updates every 5 seconds from Firestore

2. AI Power Prediction

Predicts powerGenerated using:

windSpeed

temperature

vibrationLevel

The model is trained using Linear Regression and saved as power_model.pkl.

3. Automated Windmill Health System

Outputs system status:

Normal

Warning

Critical

Based on specific defined sensor thresholds.

4. Smart Suggestions Engine

Provides optimization and maintenance suggestions using sensor readings.

5. Interactive Dashboard (React + Tailwind)

Line charts for all metrics

Latest live values

AI predictions

Health status

Responsive dark UI

Real-time fetch from Firestore

Tech Stack
Frontend

React + Vite

Tailwind CSS

Axios

Recharts

Firebase Firestore SDK

Backend

Python Flask

Flask-CORS

Firebase Admin SDK

scikit-learn

numpy, pandas, pickle

Database

Google Firebase Firestore

Project Structure
/backend
   ├── app.py
   ├── fetch_firestore.py
   ├── train_model.py
   ├── requirements.txt
   └── power_model.pkl

/frontend
   ├── src/
   │     ├── App.jsx
   │     ├── api.js
   │     ├── firebase.js
   │     └── components/
   ├── index.html
   └── package.json

Setup Instructions
1. Backend Setup
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python fetch_firestore.py
python train_model.py
python app.py


Backend runs at:

http://127.0.0.1:5000

2. Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

API Endpoints
1. Predict Power
POST /predict-power
{
  "windSpeed": 15.2,
  "temperature": 44.5,
  "vibrationLevel": 1.2
}

2. Health Status
POST /health-status

3. Suggestions
POST /suggestions

Future Enhancements

Add anomaly detection model

Integrate with real hardware (ESP32 + sensors)

Historical analytics dashboard

Predictive maintenance alerts
