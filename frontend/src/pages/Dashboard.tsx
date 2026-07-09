import { useState } from "react";
import "../App.css";

function Dashboard() {
  const [caffeine, setCaffeine] = useState(180);
  const [sleep, setSleep] = useState(7.5);
  const [energy, setEnergy] = useState(87);

  // AI Insights
  const insights: string[] = [];

  // Overall analysis
  if (sleep >= 8 && sleep <= 12 && caffeine <= 200 && energy >= 80) {
    insights.push(
      "🌟 Excellent balance! Your sleep, caffeine intake, and energy levels are all in a healthy range."
    );
  } else if (sleep < 8 && caffeine > 300) {
    insights.push(
      "⚠️ You're relying on high caffeine despite getting less than 8 hours of sleep. Prioritise rest today if possible."
    );
  }

  // Sleep
  if (sleep < 8) {
    insights.push(
      "😴 You slept less than the recommended amount. Aim for at least 8 hours tonight."
    );
  } else if (sleep > 12) {
    insights.push(
      "🛌 More than 12 hours of sleep may indicate poor sleep quality or fatigue."
    );
  } else {
    insights.push("✅ Your sleep duration is in the optimal range.");
  }

  // Caffeine
  if (caffeine === 0) {
    insights.push(
      "☕ No caffeine logged today. Great if you're maintaining your energy naturally!"
    );
  } else if (caffeine <= 200) {
    insights.push("☕ Your caffeine intake is within a healthy range.");
  } else if (caffeine <= 400) {
    insights.push(
      "⚠️ You're approaching the recommended daily caffeine limit."
    );
  } else {
    insights.push(
      "🚫 You've exceeded the recommended daily caffeine intake. Avoid more caffeine today."
    );
  }

  // Energy
  if (energy >= 80) {
    insights.push(
      "🚀 Your energy is excellent. This is a great time for deep work or studying."
    );
  } else if (energy >= 50) {
    insights.push(
      "🙂 Your energy is moderate. Consider a short walk or drinking some water."
    );
  } else {
    insights.push(
      "⚡ Your energy is low. A break or short nap may help you recharge."
    );
  }

  const recommendation = insights.join(" ");

  // Dynamic Focus Time
  let focusTime = "2 PM – 5 PM";

  if (energy >= 80 && sleep >= 8 && caffeine <= 200) {
    focusTime = "Right now 🚀";
  } else if (energy >= 60) {
    focusTime = "Within the next hour";
  } else if (sleep < 8) {
    focusTime = "After a short rest";
  } else if (caffeine > 350) {
    focusTime = "Later today";
  }

  return (
    <main className="dashboard-page">
      <h1>Your Dashboard</h1>

      <p className="dashboard-subtitle">
        Welcome back! Here's how your energy is looking today.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>⚡ Energy Score</h3>
          <p>{energy}%</p>
        </div>

        <div className="stat-card">
          <h3>☕ Caffeine</h3>
          <p>{caffeine} mg</p>
        </div>

        <div className="stat-card">
          <h3>😴 Sleep</h3>
          <p>{sleep} hours</p>
        </div>

        <div className="stat-card">
          <h3>🎯 Best Focus Time</h3>
          <p>{focusTime}</p>
        </div>
      </div>

      <div className="ai-card">
        <h2>💡 Today's AI Insight</h2>
        <p>{recommendation}</p>
      </div>

      <div className="input-section">
        <h2>Update Today's Stats</h2>

        <label>Caffeine (mg)</label>
        <input
          type="number"
          placeholder="Enter caffeine (mg)"
          value={caffeine === 0 ? "" : caffeine}
          onChange={(e) => setCaffeine(Number(e.target.value) || 0)}
        />

        <label>Sleep (hours)</label>
        <input
          type="number"
          step="0.5"
          placeholder="Enter sleep (hours)"
          value={sleep === 0 ? "" : sleep}
          onChange={(e) => setSleep(Number(e.target.value) || 0)}
        />

        <label>Energy (%)</label>
        <input
          type="range"
          min="0"
          max="100"
          value={energy}
          onChange={(e) => setEnergy(Number(e.target.value))}
        />

        <p>{energy}%</p>

        <button className="save-btn">
          Save Today's Data
        </button>
      </div>
    </main>
  );
}

export default Dashboard;