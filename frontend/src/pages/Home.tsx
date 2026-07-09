import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <main className="app">
      <nav className="navbar">
        <h2>Peak 🚀</h2>

        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Optimise Your Energy.</h1>
        <h1>Master Your Day.</h1>

        <p>
          Peak uses AI to analyse your caffeine intake, sleep,
          and energy levels so you always know the perfect time
          to focus, rest, or recharge.
        </p>

        <Link to="/dashboard">
        <button>Track Your Energy</button>
        </Link>
      </section>

      <section className="features">
  <h2>Everything you need to stay productive.</h2>

  <div className="feature-grid">
    <div className="feature-card">
      <h3>☕ Caffeine Tracking</h3>
      <p>Monitor your daily intake and build healthier habits.</p>
    </div>

    <div className="feature-card">
      <h3>🧠 AI Insights</h3>
      <p>Receive personalised recommendations based on your routine.</p>
    </div>

    <div className="feature-card">
      <h3>📈 Progress Analytics</h3>
      <p>Visualise trends and discover what improves your focus.</p>
    </div>
  </div>
</section>
<section className="how-it-works">
  <h2>How Peak Works</h2>

  <div className="steps">
    <div className="step">
      <div className="step-number">1</div>
      <h3>Log Your Day</h3>
      <p>
        Record your caffeine intake, sleep hours, and daily energy levels in
        just a few taps.
      </p>
    </div>

    <div className="step">
      <div className="step-number">2</div>
      <h3>AI Analyses Your Habits</h3>
      <p>
        Peak finds patterns between your sleep, caffeine, and productivity to
        understand what works best for you.
      </p>
    </div>

    <div className="step">
      <div className="step-number">3</div>
      <h3>Optimise Your Routine</h3>
      <p>
        Receive personalised recommendations on when to focus, rest, or have
        your next coffee.
      </p>
    </div>
  </div>
</section>
<section className="dashboard">
  <h2>Your Personal Dashboard</h2>

  <p>
    Everything you need to understand your energy, productivity,
    and caffeine habits in one place.
  </p>

  <div className="dashboard-card">

    <div className="dashboard-row">
      <span>⚡ Energy Score</span>
      <strong>87%</strong>
    </div>

    <div className="dashboard-row">
      <span>😴 Sleep</span>
      <strong>7h 42m</strong>
    </div>

    <div className="dashboard-row">
      <span>☕ Today's Caffeine</span>
      <strong>180mg</strong>
    </div>

    <div className="dashboard-row">
      <span>🎯 Best Focus Time</span>
      <strong>2:00 PM – 5:00 PM</strong>
    </div>

    <div className="recommendation">
      <h3>AI Recommendation</h3>

      <p>
        Skip another coffee after 4 PM to improve your sleep
        and maintain higher energy tomorrow.
      </p>
    </div>

  </div>
</section>
<section className="cta">
  <h2>Ready to Take Control of Your Energy?</h2>

  <p>
    Start tracking your caffeine and discover your most productive
    hours with AI.
  </p>

  <Link to="/dashboard">
  <button>Get Started</button>
</Link>
</section>
<footer className="footer">
  <p>© 2026 Peak. Built with React.</p>
</footer>
    </main>
  );
}

export default Home;

