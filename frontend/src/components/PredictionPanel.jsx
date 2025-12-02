export default function PredictionPanel({ predictedPower, health, suggestions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Predicted Power</h2>
        <p className="text-3xl">{predictedPower ?? "Loading..."}</p>
      </div>

      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Health Status</h2>
        <p className="text-3xl">{health ?? "Loading..."}</p>
      </div>

      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold">Suggestions</h2>
        <ul className="list-disc pl-4">
          {suggestions?.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
