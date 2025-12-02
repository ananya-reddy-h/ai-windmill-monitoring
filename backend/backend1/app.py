from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

# --------------------------
# Flask App Setup
# --------------------------
app = Flask(__name__)
CORS(app)

# --------------------------
# Load ML Model
# --------------------------
with open("power_model.pkl", "rb") as f:
    model = pickle.load(f)

# --------------------------
# API: Predict Power
# --------------------------
@app.route('/predict-power', methods=['POST'])
def predict_power():
    try:
        data = request.get_json()

        wind = float(data["windSpeed"])
        temp = float(data["temperature"])
        vib = float(data["vibrationLevel"])

        features = np.array([[wind, temp, vib]])
        predicted = model.predict(features)[0]

        return jsonify({
            "predictedPower": round(float(predicted), 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400


# --------------------------
# API: Health Status
# Rules:
#   Critical: vibration > 4 OR temperature > 60
#   Warning: vibration > 2.5 OR temperature > 45
#   Normal: otherwise
# --------------------------
@app.route('/health-status', methods=['POST'])
def health_status():
    data = request.get_json()

    temp = float(data["temperature"])
    vib = float(data["vibrationLevel"])

    if vib > 4 or temp > 60:
        status = "Critical"
    elif vib > 2.5 or temp > 45:
        status = "Warning"
    else:
        status = "Normal"

    return jsonify({"health": status})


# --------------------------
# API: Suggestions
# --------------------------
@app.route('/suggestions', methods=['POST'])
def suggestions():
    data = request.get_json()

    temp = float(data["temperature"])
    vib = float(data["vibrationLevel"])
    wind = float(data["windSpeed"])

    tips = []

    if wind < 8:
        tips.append("Wind speed is low — power generation may drop.")

    if temp > 60:
        tips.append("Temperature too high — check cooling system immediately.")
    elif temp > 45:
        tips.append("Temperature rising — schedule inspection.")

    if vib > 4:
        tips.append("High vibration detected — possible mechanical failure.")
    elif vib > 2.5:
        tips.append("Vibration slightly elevated — monitor bearings.")

    if len(tips) == 0:
        tips.append("System is stable. No immediate actions needed.")

    return jsonify({"suggestions": tips})


# --------------------------
# Run Server
# --------------------------
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
