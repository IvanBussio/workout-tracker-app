let workouts = [];

const getAll = () => workouts;

const create = (data) => {
  const newWorkout = {
    id: Date.now().toString(),
    name: data.name,
    type: data.type,
    completed: false,
  };

  workouts.push(newWorkout);
  return newWorkout;
};

const remove = (id) => {
  const index = workouts.findIndex((w) => w.id === id);
  if (index === -1) throw new Error('NOT_FOUND');

  workouts.splice(index, 1);
};

module.exports = {
  getAll,
  create,
  remove,
};