const express = require("express");
const cors = require("cors");

const workoutRoutes = require("./routes/workout.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Workout Tracker API running",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});