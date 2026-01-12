# Sistema de Múltiples Layouts en Vue 3

## 📋 Descripción General

Este proyecto es una aplicación Vue 3 que implementa un **sistema de múltiples layouts dinámicos** utilizando Vue Router. El sistema permite asignar diferentes plantillas de diseño (layouts) a distintas rutas de la aplicación, proporcionando flexibilidad para crear interfaces de usuario variadas según el contexto de cada página.

## 🎯 Características Principales

- ✅ **Múltiples Layouts**: Sistema que permite usar diferentes layouts para diferentes secciones de la aplicación
- ✅ **Layouts Dinámicos**: Los layouts se asignan dinámicamente a través de los metadatos de las rutas
- ✅ **Layout por Defecto**: Sistema de fallback automático a un layout predeterminado
- ✅ **Modularización de Rutas**: Rutas organizadas en módulos separados para mejor mantenibilidad
- ✅ **Modo Oscuro/Claro**: Sistema de temas con persistencia en localStorage y detección automática del sistema
- ✅ **Tailwind CSS v4**: Estilos modernos con la última versión de Tailwind
- ✅ **Pinia**: Gestión de estado centralizada con stores para modales
- ✅ **Vue Router**: Navegación SPA con lazy loading de componentes
- ✅ **Composables**: Lógica reutilizable con el patrón Composition API
- ✅ **Sistema de Autenticación UI**: Páginas completas de login, registro, recuperación y confirmación de contraseña
- ✅ **Perfil de Usuario**: Vista de gestión de información personal

## 🏗️ Arquitectura del Sistema

### Estructura de Directorios

```
multiples_layouts_vue/
├── src/
│   ├── App.vue                     # Componente raíz con renderizado dinámico de layouts
│   ├── main.js                     # Punto de entrada de la aplicación
│   ├── layouts/                    # Plantillas de diseño
│   │   ├── default.vue             # Layout predeterminado (con header, footer y modal)
│   │   ├── auth.vue                # Layout para autenticación (minimalista, sin header)
│   │   └── dashboard.vue           # Layout para dashboard/perfil (sin header)
│   ├── router/                     # Configuración de rutas
│   │   ├── index.js                # Router principal y lógica de layouts
│   │   ├── auth.js                 # Rutas de autenticación (login, register, etc.)
│   │   ├── profile.js              # Rutas del perfil de usuario
│   │   └── welcome.js              # Ruta de bienvenida/inicio
│   ├── views/                      # Vistas/Páginas de la aplicación
│   │   ├── welcome.vue             # Página de inicio
│   │   ├── auth/                   # Vistas de autenticación
│   │   │   ├── login.vue           # Página de inicio de sesión
│   │   │   ├── register.vue        # Página de registro de usuario
│   │   │   ├── forgot-password.vue # Página de recuperación de contraseña
│   │   │   ├── reset-password.vue  # Página de restablecimiento de contraseña
│   │   │   └── confirm-password.vue# Página de confirmación de contraseña
│   │   └── profile/                # Vistas del perfil
│   │       └── index.vue           # Página de gestión del perfil
│   ├── components/                 # Componentes reutilizables
│   │   ├── header.vue              # Barra de navegación principal
│   │   ├── footer.vue              # Pie de página con botón "Acerca de"
│   │   ├── btnTheme.vue            # Botón toggle modo oscuro/claro
│   │   └── AboutModal.vue          # Modal informativo del proyecto
│   ├── composables/                # Lógica reutilizable (Composition API)
│   │   └── useTheme.js             # Composable para gestión del tema
│   ├── stores/                     # Stores de Pinia
│   │   └── modalStore.js           # Store para control del modal "Acerca de"
│   └── assets/                     # Recursos estáticos
│       └── css/                    # Estilos CSS
│           ├── main.css            # Estilos principales
│           └── all.min.css         # Font Awesome iconos
├── vite.config.js                  # Configuración de Vite
└── package.json                    # Dependencias y scripts
```

## 🔧 Funcionamiento del Sistema de Layouts

### 1. Componente Raíz (`App.vue`)

El componente `App.vue` es el corazón del sistema de layouts dinámicos:

```vue
<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>
```

**¿Cómo funciona?**

- Utiliza el componente dinámico `<component :is="...">` de Vue
- Lee el layout desde `$route.meta.layout` (metadatos de la ruta actual)
- Si no hay layout definido, usa un `div` simple como fallback
- Renderiza el contenido de la ruta dentro del layout mediante `<router-view />`

### 2. Configuración del Router (`router/index.js`)

El router principal implementa la lógica para asignar layouts:

```javascript
import { createRouter, createWebHistory } from 'vue-router'
import layoutDefault from "@/layouts/default.vue";
import user from '@/router/auth'
import welcome from './welcome';
import profile from './profile';

// Combinar todas las rutas de los módulos
let routes = [...user, ...welcome, ...profile];

// Asignar layout por defecto a rutas que no tienen uno
routes = routes.map((route) => {
  if (!route.meta?.layout) {
    route.meta = Object.assign({}, route.meta, { layout: layoutDefault })
  }
  return route
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

**Proceso paso a paso:**

1. **Importación de módulos**: Importa las rutas desde archivos separados (`auth.js`, `welcome.js`, `profile.js`)
2. **Combinación de rutas**: Usa el spread operator para unir todas las rutas en un solo array
3. **Asignación de layout por defecto**: Recorre cada ruta y verifica si tiene un layout definido
4. **Fallback automático**: Si una ruta no tiene `meta.layout`, le asigna `layoutDefault`
5. **Creación del router**: Configura el router con historial HTML5 y las rutas procesadas

### 3. Módulos de Rutas

#### Rutas de Autenticación (`router/auth.js`)

```javascript
import layoutAuth from "@/layouts/auth.vue"

export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/login.vue'),
    meta: { layout: layoutAuth }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/register.vue'),
    meta: { layout: layoutAuth }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/auth/forgot-password.vue'),
    meta: { layout: layoutAuth }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('@/views/auth/reset-password.vue'),
    meta: { layout: layoutAuth }
  },
  {
    path: '/confirm-password',
    name: 'ConfirmPassword',
    component: () => import('@/views/auth/confirm-password.vue'),
    meta: { layout: layoutAuth }
  },
]
```

**Características:**

- Define rutas relacionadas con autenticación (5 rutas en total)
- Usa **lazy loading** con `import()` dinámico para optimizar el bundle
- Asigna `layoutAuth` explícitamente en los metadatos
- Agrupa rutas por funcionalidad

#### Rutas del Perfil (`router/profile.js`)

```javascript
import layoutDashboard from "@/layouts/dashboard.vue"

export default [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/index.vue'),
    meta: { layout: layoutDashboard }
  },
]
```

**Características:**

- Usa el layout `dashboard` para la página de perfil
- Ideal para áreas de usuario autenticado

#### Rutas de Bienvenida (`router/welcome.js`)

```javascript
import layoutDefault from "@/layouts/default.vue";

export default [
  {
    path: '/',
    name: 'welcome',
    component: () => import('@/views/welcome.vue'),
    meta: { layout: layoutDefault }
  }
]
```

### 4. Layouts Disponibles

#### Layout Default (`layouts/default.vue`)

```vue
<template>
  <Header/>
  <div class="text-dark flex flex-col min-h-screen bg-[#f0f3f9]">
    <slot />
  </div>
  <AboutModal />
  <Footer/>
</template>

<script setup>
import Header from '@/components/header.vue'
import AboutModal from '@/components/AboutModal.vue';
import Footer from '@/components/footer.vue'
</script>
```

**Características:**
- ✅ Incluye el componente `Header` (barra de navegación con menú desplegable)
- ✅ Incluye el componente `Footer` (pie de página fijo con botón "Acerca de")
- ✅ Incluye el modal `AboutModal` (información del proyecto)
- ✅ Fondo gris claro (`#f0f3f9`)
- ✅ Altura mínima de pantalla completa
- ✅ Usa `<slot />` para insertar el contenido de las vistas

#### Layout Auth (`layouts/auth.vue`)

```vue
<template>
  <div class="text-dark flex flex-col min-h-screen bg-[#f0f3f9]">
    <slot />
  </div>
</template>
```

**Características:**
- ❌ **Sin header**: Ideal para páginas de login/registro
- ❌ **Sin footer**: Diseño limpio centrado en formularios
- ✅ Mismo estilo de fondo que el layout default
- ✅ Diseño minimalista centrado en el contenido

#### Layout Dashboard (`layouts/dashboard.vue`)

```vue
<template>
  <div class="text-dark flex flex-col min-h-screen bg-[#f0f3f9]">
    <slot />
  </div>
</template>
```

**Características:**
- Similar al layout auth
- Preparado para agregar sidebars, menús laterales, etc.
- Actualmente sin componentes adicionales (listo para personalización)
- Usado para la página de perfil de usuario

## 🎨 Sistema de Temas (Modo Oscuro/Claro)

### Composable `useTheme.js`

El sistema de temas utiliza el patrón Composable de Vue 3 para centralizar la lógica:

```javascript
import { ref, onMounted, watch } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  onMounted(() => {
    // Verificar preferencia guardada en localStorage
    const savedTheme = localStorage.getItem('theme')
    
    // Verificar preferencia del sistema operativo
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Prioridad: localStorage > preferencia del sistema
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      isDark.value = true
    } else {
      isDark.value = false
    }
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  // Watch reactivo que aplica los cambios al DOM
  watch(isDark, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  })

  return { isDark, toggleTheme }
}
```

**Características:**
- 🌙 Detección automática de preferencia del sistema (`prefers-color-scheme`)
- 💾 Persistencia en `localStorage`
- ⚡ Actualización reactiva con `watch`
- 🔄 Toggle simple entre modos

### Componente `btnTheme.vue`

Botón visual para cambiar entre modos:

```vue
<template>
  <button @click="toggleTheme" class="...">
    <!-- Icono Sol (modo claro) -->
    <svg v-if="!isDark">...</svg>
    <!-- Icono Luna (modo oscuro) -->
    <svg v-else>...</svg>
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme';
const { isDark, toggleTheme } = useTheme();
</script>
```

## 📦 Gestión de Estado con Pinia

### Store de Modales (`stores/modalStore.js`)

```javascript
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isAboutModalOpen = ref(false)

  const openAboutModal = () => {
    isAboutModalOpen.value = true
  }

  const closeAboutModal = () => {
    isAboutModalOpen.value = false
  }

  const toggleAboutModal = () => {
    isAboutModalOpen.value = !isAboutModalOpen.value
  }

  return {
    isAboutModalOpen,
    openAboutModal,
    closeAboutModal,
    toggleAboutModal
  }
})
```

**Uso:**
- El `Footer` abre el modal con `modalStore.openAboutModal`
- El `AboutModal` escucha el estado `isAboutModalOpen`
- Se cierra al hacer clic en el overlay o botón de cerrar

## 🖥️ Componentes Principales

### Header (`components/header.vue`)

Barra de navegación fija superior con las siguientes características:

**Funcionalidades:**
- 📍 **Posición fija**: Permanece en la parte superior al hacer scroll (`fixed top-0`)
- 🏠 **Botón de inicio**: Navega a la página principal (`/`)
- 🎨 **Botón de tema**: Toggle entre modo oscuro y claro
- 📋 **Menú desplegable**: Muestra todas las opciones de navegación
- 🔒 **Cierre automático**: El menú se cierra al hacer clic fuera
- ✨ **Efectos visuales**: Backdrop blur, sombras y transiciones suaves
- 🌓 **Soporte modo oscuro**: Colores adaptativos

**Opciones del menú:**
```javascript
const qrOptions = [
  { title: 'Profile', href: "/profile", icon: 'fas fa-user-circle' },
  { title: 'Login', href: "/login", icon: 'fas fa-sign-in-alt' },
  { title: 'Register', href: "/register", icon: 'fas fa-user-plus' },
  { title: 'Forgot Password', href: "/forgot-password", icon: 'fas fa-key' },
  { title: 'Reset Password', href: "/reset-password", icon: 'fas fa-lock' },
  { title: 'Confirm Password', href: "/confirm-password", icon: 'fas fa-check-circle' },
];
```

### Footer (`components/footer.vue`)

Pie de página fijo inferior:

**Características:**
- 📍 **Posición fija**: Permanece en la parte inferior (`fixed bottom-0`)
- ©️ **Copyright**: Texto "Todos los derechos reservados"
- ℹ️ **Botón "Acerca de"**: Abre el modal informativo (animación bounce)
- 🌓 **Soporte modo oscuro**: Colores adaptativos
- ✨ **Efectos glass**: Backdrop blur y transparencias

### AboutModal (`components/AboutModal.vue`)

Modal informativo con animaciones de transición:

**Características:**
- 📊 **Información del proyecto**: Descripción y estadísticas
- 🛠️ **Tecnologías utilizadas**: Lista visual de tecnologías
- 👤 **Información del desarrollador**: Avatar y redes sociales
- 🎬 **Animaciones**: Fade para overlay, scale para el contenido
- ✨ **Diseño moderno**: Degradados, bordes, sombras

## 🗺️ Rutas Disponibles

| Ruta | Vista | Layout | Descripción |
|------|-------|--------|-------------|
| `/` | `welcome.vue` | Default | Página de inicio |
| `/login` | `auth/login.vue` | Auth | Inicio de sesión |
| `/register` | `auth/register.vue` | Auth | Registro de usuario |
| `/forgot-password` | `auth/forgot-password.vue` | Auth | Recuperar contraseña |
| `/reset-password` | `auth/reset-password.vue` | Auth | Restablecer contraseña |
| `/confirm-password` | `auth/confirm-password.vue` | Auth | Confirmar contraseña |
| `/profile` | `profile/index.vue` | Dashboard | Perfil de usuario |

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Vue 3** | ^3.5.26 | Framework JavaScript progresivo |
| **Vue Router** | ^4.6.4 | Enrutamiento SPA |
| **Pinia** | ^3.0.4 | Gestión de estado |
| **Tailwind CSS** | ^4.1.18 | Framework CSS utility-first |
| **Vite** | ^7.3.0 | Build tool y dev server |
| **Font Awesome** | - | Iconos SVG |
| **Node.js** | ^20.19.0 o >=22.12.0 | Entorno de ejecución |

## 📦 Instalación y Configuración

### Requisitos Previos

- Node.js versión 20.19.0 o superior (o versión 22.12.0+)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio** (si aplica):
```bash
git clone <url-del-repositorio>
cd multiples_layouts_vue
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**:
```bash
npm run dev
```

4. **Compilar para producción**:
```bash
npm run build
```

5. **Previsualizar build de producción**:
```bash
npm run preview
```

6. **Formatear código**:
```bash
npm run format
```

## 🎨 Configuración de Vite

El archivo `vite.config.js` incluye:

```javascript
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),                  // Plugin de Vue 3
    vueDevTools(),          // Herramientas de desarrollo
    tailwindcss(),          // Integración de Tailwind CSS v4
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))  // Alias @ para imports
    },
  },
})
```

**Características:**
- **Alias `@`**: Permite importar con `@/components/...` en lugar de rutas relativas
- **Vue DevTools**: Herramientas de debugging integradas
- **Tailwind CSS v4**: Plugin nativo de Vite para Tailwind

## 📝 Cómo Agregar un Nuevo Layout

### Paso 1: Crear el archivo del layout

Crea un nuevo archivo en `src/layouts/`, por ejemplo `admin.vue`:

```vue
<template>
  <div class="admin-layout">
    <Sidebar />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<style scoped>
.admin-layout {
  display: flex;
}
.content {
  flex: 1;
}
</style>
```

### Paso 2: Crear un módulo de rutas

Crea `src/router/admin.js`:

```javascript
import layoutAdmin from "@/layouts/admin.vue"

export default [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/dashboard.vue'),
    meta: {
      layout: layoutAdmin
    }
  }
]
```

### Paso 3: Importar en el router principal

Edita `src/router/index.js`:

```javascript
import admin from '@/router/admin'

let routes = [...user, ...welcome, ...profile, ...admin];  // Agregar el nuevo módulo
```

## 🔍 Flujo de Renderizado

```
┌─────────────────────────────────────────────────────────────────┐
│                    Usuario navega a /login                      │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│              Vue Router busca la ruta coincidente               │
│                     path: '/login'                              │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│          Lee meta.layout de la configuración de la ruta        │
│                   meta: { layout: layoutAuth }                  │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│     App.vue recibe el componente layout desde $route.meta      │
│           <component :is="$route.meta.layout">                  │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│         Renderiza el layout Auth (sin header/footer)            │
│                       <slot /> recibe...                        │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│              La vista login.vue se muestra dentro               │
│                    del layout correspondiente                   │
└─────────────────────────────────────────────────────────────────┘
```

## 🎓 Conceptos Clave

### Dynamic Components

Vue permite renderizar componentes dinámicamente usando:
```vue
<component :is="componentName"></component>
```

Esto es fundamental para el sistema de layouts, ya que permite cambiar el layout según la ruta.

### Route Meta Fields

Los metadatos de rutas permiten adjuntar información personalizada:
```javascript
{
  path: '/login',
  meta: { layout: LayoutAuth, requiresAuth: false }
}
```

### Lazy Loading

Las vistas se cargan bajo demanda usando imports dinámicos:
```javascript
component: () => import('@/views/login.vue')
```

Esto mejora el rendimiento inicial de la aplicación.

### Slots

Los slots permiten que los componentes padres (layouts) definan dónde se insertará el contenido hijo (vistas):
```vue
<template>
  <div class="layout">
    <slot />  <!-- Aquí se inserta el contenido de la vista -->
  </div>
</template>
```

### Composables

Funciones reutilizables que encapsulan lógica con la Composition API:
```javascript
export function useTheme() {
  const isDark = ref(false)
  const toggleTheme = () => { isDark.value = !isDark.value }
  return { isDark, toggleTheme }
}
```

## 🛠️ Herramientas de Desarrollo Recomendadas

### IDE

- **VS Code** con la extensión [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- Desactivar Vetur si está instalado

### Extensiones de Navegador

**Chrome/Edge/Brave:**
- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Activar Custom Object Formatter](http://bit.ly/object-formatters)

**Firefox:**
- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Activar Custom Object Formatter](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 📚 Recursos Adicionales

- [Documentación de Vue 3](https://vuejs.org/)
- [Documentación de Vue Router](https://router.vuejs.org/)
- [Documentación de Pinia](https://pinia.vuejs.org/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Documentación de Vite](https://vite.dev/)

## 🤝 Contribuciones

Este proyecto es un ejemplo educativo del sistema de múltiples layouts en Vue 3. Siéntete libre de usarlo como base para tus propios proyectos.

## 📄 Licencia

Este proyecto está disponible para uso educativo y de aprendizaje.

---

**Desarrollado con ❤️ usando Vue 3 + Vite + Tailwind CSS + Pinia**
