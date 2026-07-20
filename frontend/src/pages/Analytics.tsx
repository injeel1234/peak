import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "../App.css";

interface HistoryEntry {
  date: string;
  time: string;
  caffeine: number;
  sleep: number;
  energy: number;
}

function Analytics() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("peakHistory") || "[]"
    );

    setHistory(saved);
  }, []);

  const totalEntries = history.length;

  const averageSleep =
    totalEntries > 0
      ? (
          history.reduce((sum, entry) => sum + entry.sleep, 0) /
          totalEntries
        ).toFixed(1)
      : "0";

  const averageCaffeine =
    totalEntries > 0
      ? (
          history.reduce((sum, entry) => sum + entry.caffeine, 0) /
          totalEntries
        ).toFixed(0)
      : "0";

  const averageEnergy =
    totalEntries > 0
      ? (
          history.reduce((sum, entry) => sum + entry.energy, 0) /
          totalEntries
        ).toFixed(0)
      : "0";

  const highestEnergy =
    history.length > 0
      ? history.reduce((max, entry) =>
          entry.energy > max.energy ? entry : max
        )
      : null;

  const lowestEnergy =
    history.length > 0
      ? history.reduce((min, entry) =>
          entry.energy < min.energy ? entry : min
        )
      : null;

  const dayCounts: Record<string, number> = {};

  history.forEach((entry) => {
    dayCounts[entry.date] = (dayCounts[entry.date] || 0) + 1;
  });

  let mostActiveDay = "";
  let mostLogs = 0;

  for (const date in dayCounts) {
    if (dayCounts[date] > mostLogs) {
      mostLogs = dayCounts[date];
      mostActiveDay = date;
    }
  }

  let weeklyInsight =
    "Start logging your productivity to receive AI insights.";

  if (history.length > 0) {
    if (
      Number(averageSleep) >= 8 &&
      Number(averageEnergy) >= 80
    ) {
      weeklyInsight =
        "🌟 Excellent week! You're consistently getting enough sleep while maintaining high energy levels.";
    } else if (
      Number(averageSleep) < 8 &&
      Number(averageCaffeine) > 300
    ) {
      weeklyInsight =
        "⚠️ Your average sleep is below the recommended amount while your caffeine intake is high. More sleep may improve your energy naturally.";
    } else if (Number(averageEnergy) < 60) {
      weeklyInsight =
        "😴 Your average energy has been fairly low this week. Consider prioritising rest and hydration.";
    } else {
      weeklyInsight =
        "👍 You're building consistent productivity habits. Keep logging your data!";
    }
  }

  return (
    <main className="analytics-page">
      <h1>Analytics</h1>

      <p className="analytics-subtitle">
        A summary of your saved productivity data.
      </p>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>📊 Total Entries</h3>
          <p>{totalEntries}</p>
        </div>

        <div className="analytics-card">
          <h3>😴 Average Sleep</h3>
          <p>{averageSleep} hrs</p>
        </div>

        <div className="analytics-card">
          <h3>☕ Average Caffeine</h3>
          <p>{averageCaffeine} mg</p>
        </div>

        <div className="analytics-card">
          <h3>⚡ Average Energy</h3>
          <p>{averageEnergy}%</p>
        </div>

        <div className="analytics-card">
          <h3>🚀 Highest Energy</h3>

          {highestEnergy && (
            <>
              <p>{highestEnergy.energy}%</p>
              <small>
                {highestEnergy.date} • {highestEnergy.time}
              </small>
            </>
          )}
        </div>

        <div className="analytics-card">
          <h3>🔋 Lowest Energy</h3>

          {lowestEnergy && (
            <>
              <p>{lowestEnergy.energy}%</p>
              <small>
                {lowestEnergy.date} • {lowestEnergy.time}
              </small>
            </>
          )}
        </div>

        <div className="analytics-card">
          <h3>📅 Most Active Day</h3>
          <p>{mostActiveDay || "N/A"}</p>
          <small>{mostLogs} logs</small>
        </div>
      </div>

      <div className="chart-card">
        <h2>📈 Productivity Trends</h2>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="energy"
              stroke="#3b82f6"
              strokeWidth={3}
              name="Energy (%)"
            />

            <Line
              type="monotone"
              dataKey="sleep"
              stroke="#10b981"
              strokeWidth={3}
              name="Sleep (hrs)"
            />

            <Line
              type="monotone"
              dataKey="caffeine"
              stroke="#f59e0b"
              strokeWidth={3}
              name="Caffeine (mg)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="ai-card">
        <h2>💡 Weekly AI Insight</h2>
        <p>{weeklyInsight}</p>
      </div>
    </main>
  );
}

export default Analytics;