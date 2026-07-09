import "../App.css";

function Dashboard() {
  return (
    <main className="dashboard-page">
      <h1>Your Dashboard</h1>

      <p className="dashboard-subtitle">
        Welcome back! Here's how your energy is looking today.
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>⚡ Energy Score</h3>
          <p>87%</p>
        </div>

        <div className="stat-card">
          <h3>☕ Caffeine</h3>
          <p>180mg</p>
        </div>

        <div className="stat-card">
          <h3>😴 Sleep</h3>
          <p>7h 42m</p>
        </div>

        <div className="stat-card">
          <h3>🎯 Best Focus Time</h3>
          <p>2 PM – 5 PM</p>
        </div>
      </div>

      <div className="ai-card">
        <h2>AI Recommendation</h2>

        <p>
          Your caffeine intake is perfect today. Avoid another coffee after
          4 PM to improve tonight's sleep quality.
        </p>
      </div>
    </main>
  );
}

export default Dashboard;