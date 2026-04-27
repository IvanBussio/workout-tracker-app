const service = require('../services/workout.service');

const getWorkouts = (req, res) => {
  const data = service.getAll();
  res.json(data);
};

const createWorkout = (req, res) => {
  const { name, type } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name required' });
  }

  const workout = service.create({ name, type });
  res.status(201).json(workout);
};

const deleteWorkout = (req, res, next) => {
  try {
    service.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getWorkouts,
  createWorkout,
  deleteWorkout,
};