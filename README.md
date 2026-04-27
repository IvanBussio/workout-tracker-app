# Workout Tracker App

## Descripción

Workout Tracker es una aplicación web fullstack que permite crear, visualizar y eliminar entrenamientos de forma sencilla. Está diseñada para ser rápida, minimalista y fácil de usar.

---

## Tecnologías utilizadas

### Frontend
- React
- TypeScript
- Vite

### Backend
- Node.js
- Express

---

## Arquitectura

El proyecto sigue una arquitectura fullstack separada:

- `client/` → aplicación frontend en React
- `server/` → API REST con Express
- `docs/` → documentación del proyecto

En el backend se aplica arquitectura por capas:

- `routes/` → definición de endpoints
- `controllers/` → manejo de requests y responses
- `services/` → lógica de negocio
- `config/` → configuración del entorno

---

## API

Base URL:
http://localhost:3000/api/v1/workouts

Endpoints:

- GET /api/v1/workouts → obtener entrenamientos
- POST /api/v1/workouts → crear entrenamiento
- DELETE /api/v1/workouts/:id → eliminar entrenamiento

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/IvanBussio/workout-tracker-app.git
cd workout-tracker-app
```

---

### 2. Backend

```bash
cd server
npm install
npm run dev
```

Servidor disponible en:
http://localhost:3000

---

### 3. Frontend

```bash
cd client
npm install
npm run dev
```

Aplicación disponible en:
http://localhost:5173

---

## Funcionalidades

- Crear entrenamientos
- Visualizar lista de entrenamientos
- Eliminar entrenamientos
- Comunicación frontend-backend mediante API REST

---

## Testing

Se realizaron pruebas manuales para validar:

- Creación de entrenamientos
- Eliminación de entrenamientos
- Comunicación con la API
- Manejo de errores

Más detalles en `docs/testing.md`.

---

## Documentación

El proyecto incluye documentación en la carpeta `docs/`:

- `agile.md` → metodologías de desarrollo
- `idea.md` → definición del proyecto
- `design.md` → arquitectura
- `api.md` → endpoints
- `testing.md` → pruebas realizadas

---

## Conclusión

Este proyecto demuestra el desarrollo de una aplicación fullstack aplicando buenas prácticas, separación de responsabilidades y comunicación cliente-servidor mediante API REST.