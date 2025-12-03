# 🎉 **Event-Finder**

![Event-Finder](https://img.shields.io/badge/Event--Finder-v1.0.0-blue)

Event-Finder es una aplicación ligera construida con **Vite + React**, diseñada para explorar todos los eventos disponibles en México utilizando la **API de Ticketmaster**. Permite buscar eventos, marcarlos como favoritos y, además, acceder directamente al enlace oficial para comprarlos desde Ticketmaster. Es un proyecto demostrativo ideal para escalar hacia funcionalidades reales como APIs más complejas, autenticación y persistencia.

---

## 🚀 **Características principales**

* 📋 **Listado de eventos** cargados desde `data/events.json`.
* 🔍 **Detalle de evento** con información ampliada.
* ❤️ **Favoritos (Like)** mediante un hook dedicado: `useLikeEvents.js`.
* 🧩 **Componentización clara** para fácil mantenimiento y reuso.
* 🛑 **Manejo de errores** con `ErrorBoundary` y páginas `404`.

---

## ⚡ **Demo rápida**

Clona el repositorio, instala dependencias y ejecuta el modo desarrollo:

```bash
npm install
npm run dev
```

Visita 👉 **[http://localhost:5173](http://localhost:5173)** para ver la app en acción.

---

## 🧱 **Stack tecnológico**

* ⚛️ **Framework:** React + Vite
* 🎨 **Estilos:** CSS Modules
* 🛠️ **Herramientas:** npm / yarn, Vite

---

## 📦 **Requisitos**

* Node.js **16+**
* npm o yarn

---

## 🛠️ **Instalación y ejecución**

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa de producción
npm run preview
```

---

## 🗂️ **Estructura del proyecto (resumida)**

> 🔎 Solo lo esencial para entender la arquitectura.

* **`src/`** – código principal

  * `components/` – UI reutilizable (Navbar, Listas, Formularios…)
  * `views/` – páginas: Home, Detail, Profile, Error404
  * `hooks/` – lógica reutilizable (`useEventsData`, `useLikeEvents`)
  * `utils/` – funciones auxiliares (fetch, loaders…)
* **`data/events.json`** – datos de ejemplo
* **`routes/`** – configuración de navegación

---

## 🔄 **Flujo de datos**

1. `useEventsData` obtiene los eventos (desde JSON o una API).
2. `Events` muestra la lista usando `EventItem`.
3. `EventItem` envía acciones a `useLikeEvents` para gestionar favoritos.
4. Las rutas en `routes/index.jsx` manejan la navegación entre vistas.

---

## 🔧 **Cómo extender el proyecto**

* 🌐 **Conectar a una API real:** modificar `fetchEvents.js` o `useEventsData`.
* 💾 **Persistencia de favoritos:** integrar `localStorage`, IndexedDB o un backend.
* 🔐 **Autenticación:** agregar JWT o proveedores externos (Auth0, Firebase…).

---

## ❗ **Resolución de problemas**

* ❌ **No arranca la app:** verificar la versión de Node → `node -v`.
* 🔄 **Puerto en uso:** ejecutar → `npm run dev -- --port 3000`.

---

## 👨‍💻 **Autor**

Desarrollado por **Simón Posada Acosta**
📧 *[simon.150@hotmail.com](mailto:simon.150@hotmail.com)*