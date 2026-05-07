const BASE_URL = "http://localhost:3000/api/v1/workouts";

export const getWorkouts = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error("Error al obtener workouts");
  }

  return res.json();
};

export const createWorkout = async (data: {
  name: string;
  type: string;
  user?: string;
  date?: string;
}) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error al crear workout");
  }

  return res.json();
};

export const deleteWorkout = async (id: string) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};