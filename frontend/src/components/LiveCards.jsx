export default function LiveCards({ latest }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg">Wind Speed</h2>
        <p className="text-2xl">{latest.windSpeed} m/s</p>
      </div>

      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg">Temperature</h2>
        <p className="text-2xl">{latest.temperature}°C</p>
      </div>

      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg">Vibration</h2>
        <p className="text-2xl">{latest.vibrationLevel}</p>
      </div>

      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg">Generated Power</h2>
        <p className="text-2xl">{latest.powerGenerated} W</p>
      </div>
    </div>
  );
}
