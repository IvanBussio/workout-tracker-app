#  Arquitectura de la aplicación

##  Descripción general

La aplicación sigue una arquitectura fullstack separada en dos partes principales:

- **Frontend:** React + TypeScript
- **Backend:** Node.js + Express

Ambas partes se comunican a través de una API REST.

---

##  Estructura del frontend

El frontend está organizado en carpetas:

- `pages/` → vistas principales (Home)
- `api/` → cliente de conexión con backend
- `components/` → componentes reutilizables (futuro)
- `assets/` → recursos gráficos

El componente principal es `Home.tsx`, que gestiona la interacción con el usuario.

---

##  Gestión de estado

Se utiliza:

- `useState` → para almacenar los entrenamientos
- `useEffect` → para cargar datos desde la API

El estado se mantiene en el frontend y se sincroniza con el backend.

---

##  API REST

El backend expone endpoints REST:

- `GET /api/v1/workouts` → obtener entrenamientos
- `POST /api/v1/workouts` → crear entrenamiento
- `DELETE /api/v1/workouts/:id` → eliminar entrenamiento

---

##  Arquitectura del backend

El backend sigue una arquitectura por capas:

- `routes/` → define endpoints
- `controllers/` → maneja requests y responses
- `services/` → lógica de negocio
- `config/` → configuración (puerto, entorno)

---

##  Flujo de datos

1. El usuario interactúa con el frontend
2. React envía una petición a la API
3. Express recibe la petición en `routes`
4. El `controller` procesa la request
5. El `service` ejecuta la lógica
6. Se devuelve la respuesta al frontend
7. React actualiza la UI

---

##  Persistencia de datos

Actualmente los datos se almacenan en memoria en el backend.

Esto significa que:
- Los datos se pierden al reiniciar el servidor
- No se utiliza base de datos

---

##  Decisiones técnicas

- Separación frontend/backend → mejor escalabilidad
- Arquitectura por capas → código más organizado
- API REST → estándar en aplicaciones web
- React + TypeScript → tipado y mantenimiento

---

##  Conclusión

La aplicación está diseñada siguiendo buenas prácticas de desarrollo fullstack, separando responsabilidades y facilitando la escalabilidad futura.