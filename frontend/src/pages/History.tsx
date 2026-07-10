import { useEffect, useState } from "react";
import "../App.css";

interface HistoryEntry {
  date: string;
  time: string;
  caffeine: number;
  sleep: number;
  energy: number;
}

function History() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("peakHistory") || "[]"
    );

    // Show newest entries first
    setHistory(saved.reverse());
  }, []);

  return (
    <main className="history-page">
      <h1>History</h1>

      <p className="history-subtitle">
        Your previously saved energy logs.
      </p>

      {history.length === 0 ? (
        <p>No history yet.</p>
      ) : (
        history.map((entry, index) => (
          <div className="history-card" key={index}>
            <h3>📅 {entry.date}</h3>

            <p className="history-time">
              🕒 {entry.time}
            </p>

            <hr />

            <p>☕ Caffeine: {entry.caffeine} mg</p>

            <p>😴 Sleep: {entry.sleep} hours</p>

            <p>⚡ Energy: {entry.energy}%</p>
          </div>
        ))
      )}
    </main>
  );
}

export default History;