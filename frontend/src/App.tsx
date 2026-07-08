import "./App.css";

function App() {
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

        <button>Track Your Energy</button>
      </section>
    </main>
  );
}

export default App;