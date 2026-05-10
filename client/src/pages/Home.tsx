import { useEffect, useState } from "react";
import {
  createWorkout,
  deleteWorkout,
  getWorkouts,
} from "../api/client";

import { useAuth } from "../context/AuthContext";

interface Workout {
  _id: string;
  name: string;
  type: string;
  user?: string;
  date?: string;
}

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const { user, login } = useAuth();

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

  const handleLogin = () => {
    if (!username.trim()) return;

    login(username);
    setUsername("");
  };

  const handleCreateWorkout = async () => {
    if (!name.trim()) return;

    try {
      const newWorkout = await createWorkout({
        _id: "",
        name,
        type: "Workout",
        user: user || "Guest",
        date: new Date().toLocaleDateString(),
      });

      setWorkouts([newWorkout, ...workouts]);
      setName("");
    } catch (error) {
      console.error(error);
      alert("Error creando workout");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteWorkout(id);

      setWorkouts(
        workouts.filter((workout) => workout._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding: "35px",
          backdropFilter: "blur(12px)",
          marginBottom: "35px",
          boxShadow: "0 0 40px rgba(59,130,246,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "10px",
          }}
        >
          Welcome Back
        </h1>

        <p
          style={{
            opacity: 0.7,
            marginBottom: "30px",
          }}
        >
          Inicia sesión para continuar tu progreso
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Tu nombre"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
            style={{
              flex: 1,
              minWidth: "250px",
              padding: "18px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              fontSize: "1rem",
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              padding: "18px 35px",
              borderRadius: "18px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(to right, #7c3aed, #ec4899)",
              color: "white",
              fontWeight: "700",
              fontSize: "1rem",
            }}
          >
            Login
          </button>
        </div>

        {user && (
          <p
            style={{
              marginTop: "20px",
              color: "#10b981",
              fontWeight: "700",
            }}
          >
            Sesión iniciada como {user}
          </p>
        )}
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding: "35px",
          backdropFilter: "blur(12px)",
          marginBottom: "35px",
          boxShadow: "0 0 40px rgba(16,185,129,0.15)",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "10px",
          }}
        >
          Create Workout
        </h2>

        <p
          style={{
            opacity: 0.7,
            marginBottom: "30px",
          }}
        >
          Registrá tus entrenamientos y progresá cada semana
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Nombre del workout"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCreateWorkout();
              }
            }}
            style={{
              flex: 1,
              minWidth: "250px",
              padding: "18px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              fontSize: "1rem",
            }}
          />

          <button
            onClick={handleCreateWorkout}
            style={{
              padding: "18px 35px",
              borderRadius: "18px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(to right, #14b8a6, #22c55e)",
              color: "white",
              fontWeight: "700",
              fontSize: "1rem",
            }}
          >
            Crear
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "35px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: "24px",
            padding: "30px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p style={{ opacity: 0.7 }}>Workouts</p>

          <h2
            style={{
              fontSize: "3rem",
              color: "#8b5cf6",
            }}
          >
            {workouts.length}
          </h2>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: "24px",
            padding: "30px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p style={{ opacity: 0.7 }}>User</p>

          <h2
            style={{
              fontSize: "2.3rem",
              color: "#06b6d4",
            }}
          >
            {user || "Guest"}
          </h2>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: "24px",
            padding: "30px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p style={{ opacity: 0.7 }}>Streak</p>

          <h2
            style={{
              fontSize: "3rem",
              color: "#10b981",
            }}
          >
            7 Days
          </h2>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            borderRadius: "24px",
            padding: "30px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p style={{ opacity: 0.7 }}>Calories</p>

          <h2
            style={{
              fontSize: "3rem",
              color: "#f97316",
            }}
          >
            2.4k
          </h2>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {workouts.map((workout) => (
          <div
            key={workout._id}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "8px",
                }}
              >
                {workout.name}
              </h3>

              <p style={{ opacity: 0.7 }}>
                {workout.user} • {workout.date}
              </p>
            </div>

            <button
              onClick={() =>
                handleDelete(workout._id)
              }
              style={{
                padding: "12px 22px",
                borderRadius: "14px",
                border: "none",
                cursor: "pointer",
                background:
                  "linear-gradient(to right, #ef4444, #dc2626)",
                color: "white",
                fontWeight: "700",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <footer
        style={{
          textAlign: "center",
          marginTop: "60px",
          opacity: 0.6,
          paddingBottom: "20px",
        }}
      >
        Developed by Ivan Bussio
      </footer>
    </div>
  );
}