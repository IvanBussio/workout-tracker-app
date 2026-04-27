require('dotenv').config({ path: __dirname + '/../.env' });

const express = require('express');
const cors = require('cors');

const { PORT } = require('./config/env');
const workoutRoutes = require('./routes/workout.routes');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.use('/api/v1/workouts', workoutRoutes);

// health check
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// manejo de errores
app.use((err, req, res, next) => {
  if (err.message === 'NOT_FOUND') {
    return res.status(404).json({ error: 'No encontrado' });
  }

  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});