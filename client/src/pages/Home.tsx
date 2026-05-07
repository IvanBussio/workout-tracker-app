import { useEffect, useState } from "react";

import {
  getWorkouts,
  createWorkout,
  deleteWorkout,
} from "../api/client";

import { useAuth } from "../context/AuthContext";

interface Workout {
  id: string;
  name: string;
  type: string;
  completed: boolean;
  user?: string;
  date?: string;
}

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const {
    user,
    login,
    logout,
  } = useAuth();

  // Cargar workouts desde backend
  const loadWorkouts = async () => {
    try {
      const data = await getWorkouts();
      setWorkouts(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Cargar al iniciar
  useEffect(() => {
    loadWorkouts();
  }, []);

  // Crear workout
  const handleCreate = async () => {
    if (!name) return;

    try {
      await createWorkout({
        name,
        type: "Workout",
        user: user || "Guest",
        date: new Date().toLocaleDateString(),
      });

      await loadWorkouts();

      setName("");
    } catch (error) {
      console.error(error);
    }
  };

  // Eliminar workout
  const handleDelete = async (id: string) => {
    try {
      await deleteWorkout(id);

      await loadWorkouts();
    } catch (error) {
      console.error(error);
    }
  };

  // Login usuario
  const handleLogin = () => {
    if (!username) return;

    login(username);

    setUsername("");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-2xl mx-auto">

        {/* LOGIN */}
        <div className="flex justify-end mb-6">

          {user ? (

            <div className="flex items-center gap-4">

              <span className="text-zinc-300">
                👋 {user}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-lg"
              >
                Logout
              </button>

            </div>

          ) : (

            <div className="flex gap-3">

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu nombre"
                className="bg-zinc-800 text-white px-4 py-2 rounded-xl outline-none"
              />

              <button
                onClick={handleLogin}
                className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-xl"
              >
                Login
              </button>

            </div>

          )}

        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-bold mb-8 text-center">
          Workout Tracker 💪
        </h1>

        {/* CREATE WORKOUT */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg mb-8">

          <div className="flex gap-3">

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre del workout"
              className="flex-1 bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none"
            />

            <button
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl font-semibold transition"
            >
              Crear
            </button>

          </div>

        </div>

        {/* WORKOUTS */}
        <div className="space-y-4">

          {workouts.map((w) => (

            <div
              key={w.id}
              className="bg-zinc-900 p-5 rounded-2xl flex items-center justify-between shadow-md"
            >

              <div>

                <h2 className="text-xl font-semibold">
                  {w.name}
                </h2>

                <p className="text-zinc-400 text-sm">
                  {w.type}
                </p>

                <p className="text-zinc-500 text-xs mt-1">
                  📅 {w.date}
                </p>

                <p className="text-zinc-500 text-xs">
                  👤 {w.user}
                </p>

              </div>

              <button
                onClick={() => handleDelete(w.id)}
                className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-lg transition"
              >
                ✕
              </button>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}