interface Workout {
  _id?: string;
  name: string;
  type: string;
  user?: string;
  date?: string;
}

const STORAGE_KEY = "workouts";

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = localStorage.getItem(STORAGE_KEY);

  return workouts ? JSON.parse(workouts) : [];
};

export const createWorkout = async (
  data: Workout
): Promise<Workout> => {
  const workouts = await getWorkouts();

  const newWorkout = {
    ...data,
    _id: crypto.randomUUID(),
  };

  const updated = [newWorkout, ...workouts];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );

  return newWorkout;
};

export const deleteWorkout = async (
  id: string
): Promise<void> => {
  const workouts = await getWorkouts();

  const updated = workouts.filter(
    (workout) => workout._id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
};