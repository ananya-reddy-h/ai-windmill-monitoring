import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function ChartsSection({ chartData }) {
  const tooltipStyle = {
    backgroundColor: "#1f2937", // dark gray
    border: "1px solid #4b5563", // subtle border
    color: "#ffffff", // white text
  };

  const labelStyle = { color: "#ffffff" };
  const itemStyle = { color: "#ffffff" };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

      {/* Power Chart */}
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Power Generated</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={labelStyle}
              itemStyle={itemStyle}
            />
            <Line type="monotone" dataKey="powerGenerated" stroke="white" dot />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Wind Speed Chart */}
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Wind Speed</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={labelStyle}
              itemStyle={itemStyle}
            />
            <Line type="monotone" dataKey="windSpeed" stroke="cyan" dot />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Temperature Chart */}
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Temperature</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={labelStyle}
              itemStyle={itemStyle}
            />
            <Line type="monotone" dataKey="temperature" stroke="orange" dot />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Vibration Chart */}
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Vibration</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={labelStyle}
              itemStyle={itemStyle}
            />
            <Line type="monotone" dataKey="vibrationLevel" stroke="red" dot />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
