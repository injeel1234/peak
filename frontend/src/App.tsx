import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Analytics from "./pages/Analytics";

function App() {
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme & apply to body
  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <button
        className="theme-toggle"
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </>
  );
}

export default App;