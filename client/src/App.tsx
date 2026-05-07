import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-zinc-950 text-white">

        {/* NAVBAR */}
        <nav className="bg-zinc-900 border-b border-zinc-800 px-8 py-4">

          <div className="max-w-5xl mx-auto flex items-center justify-between">

            <h1 className="text-2xl font-bold">
              Workout Tracker 💪
            </h1>

            <div className="flex gap-6 text-zinc-300">

              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/history"
                className="hover:text-white transition"
              >
                History
              </Link>

              <Link
                to="/profile"
                className="hover:text-white transition"
              >
                Profile
              </Link>

            </div>

          </div>

        </nav>

        {/* ROUTES */}
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/history"
            element={<History />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}