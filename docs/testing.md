# Testing y validación de la aplicación

## Descripción general

Se realizaron pruebas manuales para verificar el correcto funcionamiento de la aplicación tanto en el frontend como en el backend.

El objetivo fue asegurar que todas las funcionalidades principales funcionan correctamente y que la comunicación entre cliente y servidor es estable.

---

## Pruebas realizadas

### 1. Crear entrenamiento

- Se introdujo un nombre en el input
- Se pulsó el botón "Crear"
- Resultado esperado: el entrenamiento aparece en la lista
- Resultado obtenido: correcto

---

### 2. Obtener entrenamientos

- Se cargó la página
- Resultado esperado: se muestran los entrenamientos existentes
- Resultado obtenido: correcto

---

### 3. Eliminar entrenamiento

- Se pulsó el botón de eliminar (❌)
- Resultado esperado: el elemento desaparece de la lista
- Resultado obtenido: correcto

---

## Pruebas de errores

### 1. Crear entrenamiento sin nombre

- Se intentó crear un entrenamiento vacío
- Resultado esperado: error controlado o no creación
- Resultado obtenido: correcto

---

### 2. Eliminar ID inexistente

- Se probó eliminar un ID no existente (desde API)
- Resultado esperado: error 404
- Resultado obtenido: correcto

---

## Pruebas de red

Se comprobó la comunicación con la API:

- GET → obtiene datos correctamente
- POST → crea nuevos registros
- DELETE → elimina registros

---

## Pruebas de interfaz

- La interfaz responde correctamente a las acciones del usuario
- La lista se actualiza tras cada operación
- No se detectaron errores en consola

---

## Conclusión

Las pruebas realizadas confirman que la aplicación funciona correctamente, tanto a nivel de interfaz como de backend, cumpliendo con los requisitos del proyecto.