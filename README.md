# Event-Finder

![Event-Finder](https://img.shields.io/badge/Event--Finder-v1.0.0-blue)

Event-Finder es una aplicación ligera frontend (creada con Vite + React) para buscar, listar y marcar eventos como favoritos. Está pensada como un proyecto demostrativo y base para ampliar con APIs reales, autenticación y persistencia.

**Características principales**
- **Listado de eventos**: carga datos desde `data/events.json` para mostrar una lista de eventos.
- **Detalle de evento**: vista con información ampliada de cada evento.
- **Me gusta / Favoritos**: marcar eventos favoritos con un hook dedicado (`useLikeEvents.js`).
- **Componentización clara**: componentes reutilizables en `src/components` y vistas en `src/views`.
- **Manejo de errores**: `ErrorBoundary` y páginas de error (`Error404`).

**Demo rápido**
Clona el repositorio, instala dependencias y levanta la app en modo desarrollo (instrucciones detalladas más abajo). Al abrir `http://localhost:5173` verás el listado principal y podrás navegar a detalles y perfil.

**Stack tecnológico**
- **Framework**: React (JSX) con Vite
- **Estilos**: CSS Modules y archivos CSS locales por componente
- **Herramientas**: Vite, npm/yarn

**Requisitos**
- Node.js (>=16 recomendado)
- npm o yarn

**Instalación y ejecución**
Abre PowerShell en la carpeta del proyecto `Event-finder` y ejecuta:

```pwsh
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (Vite)
npm run dev

# Construir para producción
npm run build

# Ejecutar servidor de producción (opcional)
npm run preview
```

Los scripts se corresponden con los del `package.json` del proyecto.

**Estructura del proyecto (resumen)**
- `index.html` - punto de entrada
- `src/main.jsx` - arranque de React + enrutador
- `src/App.jsx` - componente raíz
- `src/assets/` - imágenes y recursos estáticos
- `src/components/` - componentes UI:
  - `Navbar/` - barra de navegación
  - `Events/` - lista de eventos y subcomponentes (`EventItem/`)
  - `SignupForm/` - componente de registro (UI)
- `src/views/` - páginas principales:
  - `Home/` - listado inicial
  - `Detail/` - detalle de evento
  - `Profile/` - perfil del usuario y eventos marcados
  - `Error404/` - página 404
- `src/hooks/`:
  - `useEventsData.js` - hook para cargar eventos (puede usar `src/utils/fetchEvents.js` o `data/events.json`)
  - `useLikeEvents.js` - estado y lógica de favoritos
- `src/utils/`:
  - `eventLoader.js`, `fetchEvents.js`, `wrapPromise.js`, `constants.js` - utilidades para carga y control de datos
- `data/events.json` - datos de ejemplo de eventos
- `src/state/events-results.js` - estado global/local relacionado con resultados

**Flujo de datos (alto nivel)**
1. `useEventsData` o `fetchEvents` leen `data/events.json` (o endpoint) y devuelven los eventos.
2. `Events` renderiza la lista usando `EventItem`.
3. `EventItem` emite acciones de like hacia `useLikeEvents` que mantiene la lista de favoritos (localmente en memoria; puedes extender para usar LocalStorage o backend).
4. Las rutas en `src/routes/index.jsx` gestionan la navegación entre `Home`, `Detail`, `Profile`.

**Cómo extender o personalizar**
- Reemplazar `data/events.json` por una API real: modifica `src/utils/fetchEvents.js` o el hook `useEventsData` para apuntar a un endpoint.
- Persistencia de favoritos: adapta `useLikeEvents.js` para usar `localStorage`, IndexedDB o llamadas a una API.
- Autenticación: integrar una capa de auth (ej. JWT) y proteger rutas como `Profile`.

**Resolución de problemas**
- Si la app no arranca, verifica la versión de Node: `node -v`.
- Si Vite indica puerto en uso, ejecuta `npm run dev -- --port 3000` o cambia el puerto en `vite.config.js`.

## 👨‍💻 Autor

Desarrollado por Simón Posada Acosta - [simon.150@hotmail.com]
