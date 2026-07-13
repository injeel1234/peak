import { useEffect, useState } from "react";
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
          history.reduce((sum, item) => sum + item.sleep, 0) /
          totalEntries
        ).toFixed(1)
      : "0";

  const averageCaffeine =
    totalEntries > 0
      ? (
          history.reduce((sum, item) => sum + item.caffeine, 0) /
          totalEntries
        ).toFixed(0)
      : "0";

  const averageEnergy =
    totalEntries > 0
      ? (
          history.reduce((sum, item) => sum + item.energy, 0) /
          totalEntries
        ).toFixed(0)
      : "0";

  const highestEnergy =
    totalEntries > 0
      ? Math.max(...history.map((item) => item.energy))
      : 0;

  const lowestEnergy =
    totalEntries > 0
      ? Math.min(...history.map((item) => item.energy))
      : 0;

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
          <p>{highestEnergy}%</p>
        </div>

        <div className="analytics-card">
          <h3>🔋 Lowest Energy</h3>
          <p>{lowestEnergy}%</p>
        </div>
      </div>
    </main>
  );
}

export default Analytics;