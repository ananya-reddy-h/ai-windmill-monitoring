import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBz0SnVezLWO99fDfUjdvgX61Flyfwjecc",
  authDomain: "aipoweredwindmillmonitor.firebaseapp.com",
  projectId: "aipoweredwindmillmonitor",
  storageBucket: "aipoweredwindmillmonitor.firebasestorage.app",
  messagingSenderId: "630304602",
  appId: "1:630304602:web:8e3c1d47408f24a53c8d63",
  measurementId: "G-M5520GZ21L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);
