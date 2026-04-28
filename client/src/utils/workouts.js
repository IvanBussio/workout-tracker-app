export const getWorkouts = () => {
  const data = localStorage.getItem("workouts");
  return data ? JSON.parse(data) : [];
};

export const addWorkout = (workout) => {
  const workouts = getWorkouts();
  const newWorkout = { id: Date.now(), ...workout };
  const updated = [...workouts, newWorkout];
  localStorage.setItem("workouts", JSON.stringify(updated));
  return updated;
};

export const deleteWorkout = (id) => {
  const workouts = getWorkouts();
  const updated = workouts.filter((w) => w.id !== id);
  localStorage.setItem("workouts", JSON.stringify(updated));
  return updated;
};