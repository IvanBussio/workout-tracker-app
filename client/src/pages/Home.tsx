import { useEffect, useState } from 'react';
import {
  getWorkouts,
  addWorkout,
  deleteWorkout,
} from '../utils/workouts';

export default function Home() {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [name, setName] = useState('');

  // Cargar datos desde localStorage
  const load = () => {
    const data = getWorkouts();
    setWorkouts(data);
  };

  useEffect(() => {
    load();
  }, []);

  // Crear entrenamiento
  const handleCreate = () => {
    if (!name.trim()) return;

    const updated = addWorkout({ name, type: 'fuerza' });
    setWorkouts(updated);
    setName('');
  };

  // Eliminar entrenamiento
  const handleDelete = (id: number) => {
    const updated = deleteWorkout(id);
    setWorkouts(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Workout Tracker 💪</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />

      <button onClick={handleCreate}>Crear</button>

      <ul>
        {workouts.map((w) => (
          <li key={w.id}>
            {w.name}
            <button onClick={() => handleDelete(w.id)}> ❌ </button>
          </li>
        ))}
      </ul>
    </div>
  );
}