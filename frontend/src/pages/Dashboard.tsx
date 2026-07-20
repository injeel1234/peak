import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function Dashboard() {
  const [caffeine, setCaffeine] = useState<number | "">("");
  const [sleep, setSleep] = useState<number | "">("");
  const [energy, setEnergy] = useState(50);
const [error, setError] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("peakData");

    if (savedData) {
      const data = JSON.parse(savedData);

      setCaffeine(data.caffeine);
      setSleep(data.sleep);
      setEnergy(data.energy);
    }
  }, []);

  // ---------------- AI Insights ----------------

  const insights: string[] = [];

if (caffeine === "" || sleep === "") {
  insights.push(
    "📝 Enter today's sleep and caffeine values to receive personalised AI insights."
  );
} else {

  // Overall analysis
  if (
    sleep >= 8 &&
    sleep <= 12 &&
    caffeine <= 200 &&
    energy >= 80
  ) {
    insights.push(
      "🌟 Excellent balance! Your sleep, caffeine intake and energy are all in a healthy range."
    );
  } else if (
    sleep < 8 &&
    caffeine > 300
  ) {
    insights.push(
      "⚠️ You're relying on high caffeine despite getting little sleep. Prioritise rest today."
    );
  }

  // Sleep
  if (sleep < 8) {
    insights.push(
      "😴 You slept less than the recommended amount. Aim for at least 8 hours tonight."
    );
  } else if (sleep > 12) {
    insights.push(
      "🛌 More than 12 hours of sleep may indicate fatigue or poor sleep quality."
    );
  } else {
    insights.push(
      "✅ Your sleep duration is in the optimal range."
    );
  }

  // Caffeine
  if (caffeine === 0) {
    insights.push(
      "☕ No caffeine logged today. Great if you're maintaining your energy naturally!"
    );
  } else if (caffeine <= 200) {
    insights.push(
      "☕ Your caffeine intake is within a healthy range."
    );
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
      "🙂 Your energy is moderate. Consider taking a short walk or drinking some water."
    );
  } else {
    insights.push(
      "⚡ Your energy is low. A short break or nap may help you recharge."
    );
  }

} 

  // Energy

  if (energy >= 80) {
    insights.push(
      "🚀 Your energy is excellent. This is a great time for deep work or studying."
    );
  } else if (energy >= 50) {
    insights.push(
      "🙂 Your energy is moderate. Consider taking a short walk or drinking some water."
    );
  } else {
    insights.push(
      "⚡ Your energy is low. A short break or nap may help you recharge."
    );
  }

  const recommendation = insights.join(" ");

  // ---------------- Focus Time ----------------

  let focusTime = "--";

if (caffeine === "" || sleep === "") {
  focusTime = "Enter your data";
} else if (
  energy >= 80 &&
  sleep >= 8 &&
  caffeine <= 200
) {
  focusTime = "Right now 🚀";
} else if (energy >= 60) {
  focusTime = "Within the next hour";
} else if (sleep < 8) {
  focusTime = "After a short rest";
} else if (caffeine > 350) {
  focusTime = "Later today";

}
  // ---------------- Save Data ----------------

  function saveData() {
  if (caffeine === "" || sleep === "") {
    setError(
      "Please enter both your caffeine intake and sleep before saving."
    );
    return;
  }

  setError("");

  const now = new Date();

  const newEntry = {
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    caffeine,
    sleep,
    energy,
  };

  localStorage.setItem(
    "peakData",
    JSON.stringify({
      caffeine,
      sleep,
      energy,
    })
  );

  const history = JSON.parse(
    localStorage.getItem("peakHistory") || "[]"
  );

  history.push(newEntry);

  localStorage.setItem(
    "peakHistory",
    JSON.stringify(history)
  );

  alert("Today's data has been saved!");
}

  // ---------------- Goals ----------------

  const goals = [
  {
    name: "Sleep 8+ hours",
    completed: sleep !== "" && sleep >= 8,
  },
  {
    name: "Stay below 400 mg caffeine",
    completed: caffeine !== "" && caffeine <= 400,
  },
  {
    name: "Energy above 80%",
    completed: energy >= 80,
  },
];

  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

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
          {error && (
  <p className="error-message">
    {error}
  </p>
)}
        </div>

        <div className="stat-card">
          <h3>☕ Caffeine</h3>
          <p>
            {caffeine === ""
              ? "--"
              : `${caffeine} mg`}
          </p>
        </div>

        <div className="stat-card">
          <h3>😴 Sleep</h3>
          <p>
            {sleep === ""
              ? "--"
              : `${sleep} hours`}
          </p>
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

      <div className="goals-card">
        <h2>🎯 Daily Goals</h2>

        {goals.map((goal, index) => (
          <p key={index}>
            {goal.completed ? "✅" : "❌"} {goal.name}
          </p>
        ))}

        <h3>
          {completedGoals} / {goals.length} Goals
          Completed
        </h3>
      </div>

      <div className="input-section">
        <h2>Update Today's Stats</h2>

        <label>Caffeine (mg)</label>

        <input
          type="number"
          min="0"
          placeholder="Enter caffeine (mg)"
          value={caffeine}
          onChange={(e) =>
            setCaffeine(
              e.target.value === ""
                ? ""
                : Number(e.target.value)
            )
          }
        />

        <label>Sleep (hours)</label>

        <input
          type="number"
          min="0"
          step="0.5"
          placeholder="Enter sleep (hours)"
          value={sleep}
          onChange={(e) =>
            setSleep(
              e.target.value === ""
                ? ""
                : Number(e.target.value)
            )
          }
        />

        <label>Energy (%)</label>

        <input
          type="range"
          min="0"
          max="100"
          value={energy}
          onChange={(e) =>
            setEnergy(Number(e.target.value))
          }
        />

        <p>{energy}%</p>

        <Link to="/analytics">
          <button className="analytics-btn">
            View Analytics
          </button>
        </Link>

        <div className="button-group">
          <button
            className="save-btn"
            onClick={saveData}
          >
            Save Today's Data
          </button>

          <Link to="/history">
            <button className="history-btn">
              View History
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;