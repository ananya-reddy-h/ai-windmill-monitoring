import firebase_admin
from firebase_admin import credentials, firestore
import pandas as pd

# -------------------------------
# Firebase Admin Initialization
# -------------------------------

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# -------------------------------
# Fetch Firestore Data
# -------------------------------

def fetch_windmill_data():
    docs = db.collection("windmillData").stream()

    data_list = []
    for doc in docs:
        row = doc.to_dict()
        data_list.append(row)

    df = pd.DataFrame(data_list)
    return df


if __name__ == "__main__":
    df = fetch_windmill_data()

    print("\nFetched rows:", len(df))
    print(df.head())

    # Optional — save to CSV
    df.to_csv("windmill_data.csv", index=False)
    print("\nSaved as windmill_data.csv")
