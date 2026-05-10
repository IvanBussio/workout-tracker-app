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

  const handleCreate = async () => {
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
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteWorkout(id);

      setWorkouts(
        workouts.filter((w) => w._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding:
          window.innerWidth < 768
            ? "30px 15px"
            : "50px 20px",
        color: "inherit",
      }}
    >
      {/* LOGIN */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding:
            window.innerWidth < 768
              ? "25px"
              : "40px",
          marginBottom: "40px",
          backdropFilter: "blur(12px)",
        }}
      >
        <h2
          style={{
            fontSize:
              window.innerWidth < 768
                ? "2rem"
                : "3rem",
            marginBottom: "10px",
            fontFamily: "Poppins",
          }}
        >
          Welcome Back
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px",
            fontSize: "1rem",
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
            value={username}
            placeholder="Tu nombre"
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
              minWidth: "220px",
              padding: "18px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "inherit",
              fontSize: "1rem",
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              padding: "18px 35px",
              borderRadius: "16px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(to right, #7c3aed, #ec4899)",
              color: "white",
              fontWeight: "600",
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
              fontWeight: "600",
            }}
          >
            Sesión iniciada como {user}
          </p>
        )}
      </div>

      {/* CREATE */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding:
            window.innerWidth < 768
              ? "25px"
              : "40px",
          marginBottom: "40px",
          backdropFilter: "blur(12px)",
        }}
      >
        <h2
          style={{
            fontSize:
              window.innerWidth < 768
                ? "1.8rem"
                : "2.5rem",
            marginBottom: "10px",
            fontFamily: "Poppins",
          }}
        >
          Create Workout
        </h2>

        <p
          style={{
            color: "#94a3b8",
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCreate();
              }
            }}
            placeholder="Nombre del workout"
            style={{
              flex: 1,
              minWidth: "220px",
              padding: "18px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              color: "inherit",
              fontSize: "1rem",
            }}
          />

          <button
            onClick={handleCreate}
            style={{
              padding: "18px 35px",
              borderRadius: "16px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(to right, #10b981, #14b8a6)",
              color: "white",
              fontWeight: "600",
            }}
          >
            Crear
          </button>
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {[
          {
            title: "Workouts",
            value: workouts.length,
            color: "#8b5cf6",
          },
          {
            title: "User",
            value: user || "Guest",
            color: "#06b6d4",
          },
          {
            title: "Streak",
            value: "7 Days",
            color: "#10b981",
          },
          {
            title: "Calories",
            value: "2.4k",
            color: "#f97316",
          },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "25px",
              backdropFilter: "blur(10px)",
            }}
          >
            <p
              style={{
                color: "#94a3b8",
                marginBottom: "10px",
              }}
            >
              {stat.title}
            </p>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: stat.color,
              }}
            >
              {stat.value}
            </h2>
          </div>
        ))}
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
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding:
                window.innerWidth < 768
                  ? "20px"
                  : "25px",
              display: "flex",
              flexDirection:
                window.innerWidth < 768
                  ? "column"
                  : "row",
              gap: "15px",
              justifyContent: "space-between",
              alignItems:
                window.innerWidth < 768
                  ? "flex-start"
                  : "center",
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
                border: "none",
                cursor: "pointer",
                color: "white",
                fontWeight: "600",
                width:
                  window.innerWidth < 768
                    ? "100%"
                    : "auto",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "60px",
          textAlign: "center",
          color: "#64748b",
          paddingBottom: "30px",
        }}
      >
        Built and designed by Ivan Bussio
      </footer>
    </div>
  );
}