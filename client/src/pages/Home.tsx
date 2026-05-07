import { useEffect, useState } from "react";
import { createWorkout, deleteWorkout, getWorkouts } from "../api/client";
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

  const handleCreate = async () => {
    if (!name) return;

    try {
      const newWorkout = await createWorkout({
        name,
        type: "Workout",
        user: user || "Guest",
        date: new Date().toLocaleDateString(),
      });

      setWorkouts([newWorkout, ...workouts]);
      setName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteWorkout(id);
      setWorkouts(workouts.filter((w) => w._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "50px 20px",
      }}
    >
      {/* LOGIN CARD */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding: "40px",
          marginBottom: "40px",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 40px rgba(139,92,246,0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "10px",
            fontFamily: "Poppins",
          }}
        >
          Welcome Back 👋
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "30px",
            fontSize: "1.1rem",
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
            placeholder="Tu nombre"
            onChange={(e) => login(e.target.value)}
            style={{
              flex: 1,
              minWidth: "250px",
              padding: "18px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              fontSize: "1rem",
            }}
          />

          <button
            style={{
              padding: "18px 35px",
              borderRadius: "16px",
              background:
                "linear-gradient(to right, #7c3aed, #ec4899)",
              color: "white",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            Login
          </button>
        </div>
      </div>

      {/* CREATE WORKOUT */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding: "40px",
          marginBottom: "40px",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 40px rgba(16,185,129,0.15)",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "10px",
            fontFamily: "Poppins",
          }}
        >
          Create Workout 🏋️
        </h2>

        <p
          style={{
            color: "#cbd5e1",
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del workout"
            style={{
              flex: 1,
              minWidth: "250px",
              padding: "18px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              fontSize: "1rem",
            }}
          />

          <button
            onClick={handleCreate}
            style={{
              padding: "18px 35px",
              borderRadius: "16px",
              background:
                "linear-gradient(to right, #10b981, #14b8a6)",
              color: "white",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            Crear
          </button>
        </div>
      </div>

      {/* WORKOUTS */}
      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {workouts.map((w) => (
          <div
            key={w._id}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "6px",
                }}
              >
                {w.name}
              </h3>

              <p style={{ color: "#94a3b8" }}>
                {w.user} • {w.date}
              </p>
            </div>

            <button
              onClick={() => handleDelete(w._id)}
              style={{
                background:
                  "linear-gradient(to right, #ef4444, #dc2626)",
                padding: "12px 18px",
                borderRadius: "12px",
                color: "white",
                fontWeight: "600",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}