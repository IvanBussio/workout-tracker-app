import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 60px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              fontFamily: "Poppins",
            }}
          >
            Workout Tracker 💪
          </h1>

          <div
            style={{
              display: "flex",
              gap: "30px",
              fontSize: "1.1rem",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;