# Workout Tracker App

Workout Tracker es una aplicación web fullstack desarrollada para registrar y gestionar entrenamientos de manera simple, rápida y moderna.

La aplicación permite crear, visualizar y eliminar workouts mediante una interfaz responsive y minimalista.

---

# 🚀 Deploy

Frontend desplegado en Vercel:

https://workout-tracker-app-uoxc.vercel.app/

---

# 📋 Trello

https://trello.com/b/s94mUlLY/workout-tracker-app

---

# 📂 Repositorio

https://github.com/IvanBussio/workout-tracker-app

---

# 🛠️ Tecnologías utilizadas

## Frontend
- React
- TypeScript
- Vite
- React Router
- Firebase Authentication
- LocalStorage

## Backend
- Node.js
- Express

---

# 🏗️ Arquitectura

El proyecto sigue una arquitectura fullstack separada:

client/ → frontend React  
server/ → API REST Express  
docs/ → documentación  

## Backend por capas

routes/ → endpoints  
controllers/ → requests/responses  
services/ → lógica de negocio  
config/ → configuración  

---

# ✨ Funcionalidades

- Registro y login de usuarios con Firebase Authentication
- Crear entrenamientos
- Visualizar entrenamientos
- Eliminar entrenamientos
- Dark / Light mode
- Responsive mobile design
- Persistencia local de datos
- Navegación entre páginas
- UI moderna tipo glassmorphism

---

# 📱 Secciones

## Home
- Workout del día
- Crear entrenamientos
- Estadísticas rápidas

## History
- Historial de entrenamientos

## Profile
- Gestión básica de usuario

---

# ⚙️ Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/IvanBussio/workout-tracker-app.git
```

## 2. Backend

```bash
cd server
npm install
npm run dev
```

Servidor disponible en:

```txt
http://localhost:3000
```

## 3. Frontend

```bash
cd client
npm install
npm run dev
```

Aplicación disponible en:

```txt
http://localhost:5173
```

---

# 🧪 Testing

Se realizaron pruebas manuales para validar:

- Creación de entrenamientos
- Eliminación de entrenamientos
- Login y registro
- Comunicación frontend-backend
- Responsive mobile
- Manejo de errores

Más detalles disponibles en:

docs/testing.md

---

# 📚 Documentación

La carpeta docs/ incluye:

- agile.md → metodología de trabajo
- idea.md → idea del proyecto
- design.md → arquitectura
- api.md → endpoints
- testing.md → pruebas realizadas

---

# 🔮 Mejoras futuras

- Integración Supabase
- Base de datos persistente cloud
- Historial avanzado
- Analytics y gráficos
- Ejercicios personalizados
- Protected routes
- Notificaciones
- Dashboard fitness

---

# 👨‍💻 Autor

Desarrollado por Ivan Bussio
