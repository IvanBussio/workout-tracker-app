const express = require('express');
const router = express.Router();

const {
  getWorkouts,
  createWorkout,
  deleteWorkout,
} = require('../controllers/workout.controller');

router.get('/', getWorkouts);
router.post('/', createWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;