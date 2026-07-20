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

    // Display newest entries first
    setHistory([...saved].reverse());
  }, []);

  function deleteEntry(indexToDelete: number) {
    const updatedHistory = history.filter(
      (_, index) => index !== indexToDelete
    );

    setHistory(updatedHistory);

    // Save back in chronological order
    localStorage.setItem(
      "peakHistory",
      JSON.stringify([...updatedHistory].reverse())
    );
  }

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
            <h3>
              📅 {entry.date}
              <br />
              🕒 {entry.time}
            </h3>

            <p>☕ Caffeine: {entry.caffeine} mg</p>

            <p>😴 Sleep: {entry.sleep} hours</p>

            <p>⚡ Energy: {entry.energy}%</p>

            <button
              className="delete-btn"
              onClick={() => deleteEntry(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </main>
  );
}

export default History;