import React, { useEffect, useState } from "react";
import { predictPower, getHealthStatus, getSuggestions } from "./api";

const Dashboard = () => {
  const [latestData, setLatestData] = useState({
    windSpeed: 15.2,
    temperature: 44.5,
    vibrationLevel: 1.2,
  });

  const [predictedPower, setPredictedPower] = useState(null);
  const [health, setHealth] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchPrediction = async () => {
    const power = await predictPower(latestData);
    const status = await getHealthStatus(latestData);
    const tips = await getSuggestions(latestData);

    setPredictedPower(power);
    setHealth(status);
    setSuggestions(tips);
  };

  // Fetch every 5 seconds
  useEffect(() => {
    fetchPrediction();
    const interval = setInterval(fetchPrediction, 5000);
    return () => clearInterval(interval);
  }, [latestData]);

  return (
    <div className="p-4 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">AI Windmill Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Predicted Power</h2>
          <p className="text-2xl">{predictedPower ?? "Loading..."}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Health Status</h2>
          <p className="text-2xl">{health ?? "Loading..."}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Suggestions</h2>
          <ul className="list-disc pl-5">
            {suggestions.length > 0
              ? suggestions.map((tip, idx) => <li key={idx}>{tip}</li>)
              : "Loading..."}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
