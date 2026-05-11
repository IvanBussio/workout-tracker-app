import { useEffect, useState } from "react";
import {
  createWorkout,
  deleteWorkout,
  getWorkouts,
} from "../api/client";

import { useAuth } from "../context/AuthContext";

interface Workout {
  id?: string;
  name: string;
  type?: string;
  username?: string;
  created_at?: string;
}

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    user,
    login,
    register,
    logout,
  } = useAuth();

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const data = await getWorkouts();
      setWorkouts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError("");

      await register(email, password);

      setEmail("");
      setPassword("");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      await login(email, password);

      setEmail("");
      setPassword("");
    } catch (error: any) {
      setError("Credenciales inválidas");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateWorkout = async () => {
    if (!name.trim()) return;

    try {
      const newWorkout = await createWorkout({
        name,
        type: "strength",
        username: user?.email || "anonymous",
      });

      if (!newWorkout) return;

      setWorkouts((prev) => [
        newWorkout,
        ...prev,
      ]);

      setName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteWorkout = async (
    id?: string
  ) => {
    if (!id) return;

    try {
      await deleteWorkout(id);

      setWorkouts((prev) =>
        prev.filter(
          (workout) => workout.id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page-container">
      <section className="glass-card">
        <h1 className="title">
          Welcome Back
        </h1>

        <p className="subtitle">
          Accedé a tu cuenta fitness
        </p>

        {!user ? (
          <>
            <div className="form-group">
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="input"
              />

              <input
                type="password"
                placeholder="Tu contraseña"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="input"
              />
            </div>

            <div className="button-row">
              <button
                onClick={handleLogin}
                className="login-button"
                disabled={loading}
              >
                Login
              </button>

              <button
                onClick={handleRegister}
                className="create-button"
                disabled={loading}
              >
                Register
              </button>
            </div>
          </>
        ) : (
          <div className="logged-box">
            <p className="logged-user">
              Sesión iniciada como:
            </p>

            <h2>
              {user.email}
            </h2>

            <button
              onClick={logout}
              className="delete-button"
            >
              Logout
            </button>
          </div>
        )}

        {error && (
          <p className="error-text">
            {error}
          </p>
        )}
      </section>

      <section className="glass-card">
        <h1 className="title">
          Create Workout
        </h1>

        <p className="subtitle">
          Registrá entrenamientos reales
        </p>

        <div className="workout-form">
          <input
            type="text"
            placeholder="Nombre del workout"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="input"
          />

          <button
            onClick={handleCreateWorkout}
            className="create-button"
          >
            Crear
          </button>
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>Workouts</span>
          <h2>{workouts.length}</h2>
        </div>

        <div className="stat-card">
          <span>User</span>

          <h2>
            {user?.email
              ? user.email.split("@")[0]
              : "Guest"}
          </h2>
        </div>

        <div className="stat-card">
          <span>Status</span>

          <h2>
            {user
              ? "Online"
              : "Offline"}
          </h2>
        </div>
      </section>

      <section className="workouts-list">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="workout-card"
          >
            <div>
              <h3>{workout.name}</h3>

              <p>
                {workout.username}
              </p>
            </div>

            <button
              onClick={() =>
                handleDeleteWorkout(
                  workout.id
                )
              }
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}