import firebase_admin
from firebase_admin import credentials, firestore
import random
from datetime import datetime, timedelta

# Firebase Admin setup
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# Generate 200 dummy rows
records = []
base_time = datetime.now()

for i in range(200):
    record = {
        "timestamp": (base_time - timedelta(minutes=i)).strftime("%Y-%m-%d %H:%M:%S"),
        "windSpeed": round(random.uniform(5, 25), 2),
        "powerGenerated": round(random.uniform(100, 950), 2),
        "temperature": round(random.uniform(20, 70), 2),
        "vibrationLevel": round(random.uniform(0.1, 5.0), 2)
    }
    records.append(record)

# Upload to Firestore
collection = db.collection("windmillData")

for rec in records:
    collection.add(rec)

print("Uploaded 200 dummy records successfully!")
