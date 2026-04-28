const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 Base de datos en memoria (simple para el proyecto)
let workouts = [];

// GET → obtener todos
app.get("/api/v1/workouts", (req, res) => {
  res.json(workouts);
});

// POST → crear
app.post("/api/v1/workouts", (req, res) => {
  const newWorkout = {
    id: Date.now().toString(),
    ...req.body,
  };

  workouts.push(newWorkout);
  res.status(201).json(newWorkout);
});

// DELETE → eliminar
app.delete("/api/v1/workouts/:id", (req, res) => {
  const { id } = req.params;

  workouts = workouts.filter((w) => w.id !== id);

  res.status(200).json({ message: "Deleted" });
});

// 🔴 IMPORTANTE PARA RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});