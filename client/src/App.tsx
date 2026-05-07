import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import History from "./pages/History";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    localStorage.setItem(
      "theme",
      newTheme ? "dark" : "light"
    );
  };

  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          background: darkMode
            ? "linear-gradient(to bottom right, #111827, #0f172a, #020617)"
            : "linear-gradient(to bottom right, #f8fafc, #e2e8f0, #cbd5e1)",
          color: darkMode ? "white" : "#0f172a",
          transition: "0.3s ease",
        }}
      >
        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "25px 40px",
            borderBottom: darkMode
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(15,23,42,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "800",
            }}
          >
            Workout Tracker
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Link
              to="/"
              style={{
                color: darkMode ? "white" : "#0f172a",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Home
            </Link>

            <Link
              to="/history"
              style={{
                color: darkMode ? "white" : "#0f172a",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              History
            </Link>

            <Link
              to="/profile"
              style={{
                color: darkMode ? "white" : "#0f172a",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Profile
            </Link>

            <button
              onClick={toggleTheme}
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                background: darkMode
                  ? "linear-gradient(to right, #7c3aed, #ec4899)"
                  : "linear-gradient(to right, #2563eb, #06b6d4)",
                color: "white",
                fontWeight: "700",
              }}
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}