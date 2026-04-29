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

# Workout Tracker App

## 🚀 Despliegue
https://workout-tracker-app-z21p.vercel.app/

## 📋 Trello
https://trello.com/b/s94mUlLY/workout-tracker-app

## 📂 Repositorio
https://github.com/IvanBussio/workout-tracker-app

## 🛠️ Tecnologías
- React
- TypeScript
- Vite
- LocalStorage

## 📌 Descripción
Aplicación web para registrar entrenamientos.
Permite crear, visualizar y eliminar entrenamientos.
Los datos se guardan en el navegador usando LocalStorage.

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