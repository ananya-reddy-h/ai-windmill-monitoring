import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import LiveCards from "./components/LiveCards";
import ChartsSection from "./components/ChartsSection";
import PredictionPanel from "./components/PredictionPanel";
import { predictPower, getHealthStatus, getSuggestions } from "./api";
import { db } from "./firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

export default function App() {
  const [chartData, setChartData] = useState([]);
  const [latest, setLatest] = useState(null);
  const [predictedPower, setPredictedPower] = useState(null);
  const [health, setHealth] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch Firestore data
  const getData = async () => {
    const q = query(collection(db, "windmillData"), orderBy("timestamp", "desc"), limit(20));
    const snap = await getDocs(q);

    const data = snap.docs.map((doc) => doc.data());
    const reversed = [...data].reverse();

    setChartData(reversed);
    setLatest(reversed[reversed.length - 1]);
  };

  // Predict using backend
  const runPrediction = async () => {
    if (!latest) return;

    const power = await predictPower(latest);
    const status = await getHealthStatus(latest);
    const tips = await getSuggestions(latest);

    setPredictedPower(power);
    setHealth(status);
    setSuggestions(tips);
  };

  useEffect(() => {
    getData();
    const interval = setInterval(getData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    runPrediction();
  }, [latest]);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <Header />
      {latest && <LiveCards latest={latest} />}
      <PredictionPanel
        predictedPower={predictedPower}
        health={health}
        suggestions={suggestions}
      />
      <ChartsSection chartData={chartData} />
    </div>
  );
}
