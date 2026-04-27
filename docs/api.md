# API REST - Workout Tracker

La aplicación utiliza una API REST desarrollada con Node.js y Express para gestionar entrenamientos. Permite realizar operaciones básicas mediante peticiones HTTP.

Base URL:  
http://localhost:3000/api/v1/workouts

## Endpoints

GET /api/v1/workouts  
Devuelve la lista de entrenamientos.  
Status: 200 OK  

```json
[
  { "id": 1, "name": "Gym" }
]
```

---

POST /api/v1/workouts  
Crea un nuevo entrenamiento.  

Body:

```json
{ "name": "Running" }
```

Status: 201 Created  

```json
{ "id": 2, "name": "Running" }
```

---

DELETE /api/v1/workouts/:id  
Elimina un entrenamiento por ID.  
Status: 204 No Content  
Error 404 si no existe.

---

## Manejo de errores

- 400: datos inválidos  
- 404: recurso no encontrado  
- 500: error interno  