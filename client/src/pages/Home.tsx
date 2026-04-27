import { useEffect, useState } from 'react';
import {
  getWorkouts,
  createWorkout,
  deleteWorkout,
} from '../api/client';

export default function Home() {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [name, setName] = useState('');

  const load = async () => {
    try {
      const data = await getWorkouts();
      setWorkouts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async () => {
    if (!name.trim()) return;

    await createWorkout({ name, type: 'fuerza' });
    setName('');
    load();
  };

  const handleDelete = async (id: string) => {
    await deleteWorkout(id);
    load();
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