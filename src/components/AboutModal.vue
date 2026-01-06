<template>
      <Transition name="fade">
    <div
      v-if="modalStore.isAboutModalOpen"
      class="fixed inset-0 backdrop-blur-sm bg-gray-900/80 dark:bg-gray-900/90 z-[100] flex items-center justify-center p-4"
      @click="modalStore.closeAboutModal"
    >
      <!-- Modal container -->
      <Transition name="scale">
        <div
          v-if="modalStore.isAboutModalOpen"
          class="relative transform overflow-y-auto max-h-[97vh] rounded-xl bg-white dark:bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 dark:outline-gray-700/50 sm:my-8 sm:w-full sm:max-w-2xl scrollbar-custom dark:scrollbar-custom-dark"
          @click.stop
        >
          <!-- Header -->
          <div class="bg-gradient-to-r from-blue-600 to-blue-500/90 dark:from-blue-700 dark:to-blue-600/90 p-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white/20 dark:bg-gray-800/30 flex items-center justify-center text-shadow-lg mr-3">
                  <i class="fas fa-user-circle text-white text-lg"></i>
                </div>
                <div>
                  <h2 class="text-lg font-bold text-white text-shadow-lg">Acerca del Desarrollador</h2>
                  <p class="text-white/80 dark:text-white/90 text-xs text-shadow-lg">Creador del Sistema de Layouts</p>
                </div>
              </div>
              <button 
                @click="modalStore.closeAboutModal"
                class="w-8 h-8 rounded-full bg-white/20 dark:bg-gray-800/30 text-white text-shadow-lg text-lg cursor-pointer transition-all duration-300 hover:bg-white/30 dark:hover:bg-gray-800/50 hover:scale-110 flex items-center justify-center">
                &times;
              </button>
            </div>
          </div>

          <!-- Cuerpo del modal -->
          <div class="p-5 bg-white dark:bg-gray-800">
            <!-- Sección superior: Avatar e información básica -->
            <div class="flex flex-col md:flex-row gap-5 mb-6">
              <!-- Avatar y contacto -->
              <div class="md:w-2/5 flex flex-col items-center">
                <div
                  class="w-20 h-20 rounded-full animate-bounce bg-gradient-to-br from-blue-600 to-purple-500 dark:from-blue-700 dark:to-purple-600 flex justify-center items-center text-white text-2xl shadow-lg mb-3">
                  <i class="fas fa-code"></i>
                </div>

                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1 text-shadow-lg">Desarrollador</h3>
                <div class="bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold px-3 py-1 rounded-full text-sm mb-3 text-shadow-lg">
                  <i class="fas fa-laptop-code mr-1 text-shadow-lg"></i> Desarrollador Full Stack
                </div>

                <div class="space-y-2 text-center">
                  <div class="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm">
                    <i class="fas fa-envelope text-blue-600 dark:text-blue-400 mr-2"></i>
                    <span class="text-shadow-lg dark:text-shadow-lg-dark">tu-email@ejemplo.com</span>
                  </div>
                  <div class="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm">
                    <i class="fas fa-map-marker-alt text-blue-600 dark:text-blue-400 mr-2"></i>
                    <span class="text-shadow-lg dark:text-shadow-lg-dark">Ubicación</span>
                  </div>
                </div>

                <!-- Redes sociales compactas -->
                <div class="flex gap-2 mt-3">
                  <a href="#" target="_blank"
                    class="w-8 h-8 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:scale-110">
                    <i class="fab fa-github text-sm"></i>
                  </a>
                  <a href="#" target="_blank"
                    class="w-8 h-8 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:scale-110">
                    <i class="fab fa-linkedin-in text-sm"></i>
                  </a>
                  <a href="#" target="_blank"
                    class="w-8 h-8 rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-400 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white hover:scale-110">
                    <i class="fab fa-youtube text-sm"></i>
                  </a>
                </div>
              </div>

              <!-- Información del proyecto -->
              <div class="md:w-3/5">
                <div class="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-4">
                  <h4 class="text-gray-900 dark:text-white text-shadow-lg dark:text-shadow-lg-dark font-bold text-lg mb-2 flex items-center">
                    <i class="fas fa-layer-group text-blue-600 dark:text-blue-400 mr-2"></i>
                    Sobre el Proyecto
                  </h4>
                  <p class="text-gray-700 dark:text-gray-300 text-shadow-lg dark:text-shadow-lg-dark text-sm leading-relaxed mb-3">
                    Sistema de múltiples layouts en Vue 3 que permite diferentes plantillas de diseño
                    para distintas secciones de la aplicación, proporcionando flexibilidad y modularidad.
                  </p>

                  <!-- Estadísticas visuales compactas -->
                  <div class="grid grid-cols-2 gap-3">
                    <div class="bg-white dark:bg-gray-800 rounded p-3 text-center border border-gray-300 dark:border-gray-600">
                      <div class="text-lg font-bold text-blue-600 dark:text-blue-400 text-shadow-lg">3+</div>
                      <div class="text-xs text-gray-600 dark:text-gray-300 text-shadow-lg dark:text-shadow-lg-dark">Layouts</div>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded p-3 text-center border border-gray-300 dark:border-gray-600">
                      <div class="text-lg font-bold text-purple-600 dark:text-purple-400 text-shadow-lg">Vue 3</div>
                      <div class="text-xs text-gray-600 dark:text-gray-300 text-shadow-lg dark:text-shadow-lg-dark">Tecnología</div>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded p-3 text-center border border-gray-300 dark:border-gray-600">
                      <div class="text-lg font-bold text-green-600 dark:text-green-400 text-shadow-lg">✓</div>
                      <div class="text-xs text-gray-600 dark:text-gray-300 text-shadow-lg dark:text-shadow-lg-dark">Modular</div>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded p-3 text-center border border-gray-300 dark:border-gray-600">
                      <div class="text-lg font-bold text-gray-900 dark:text-gray-100 text-shadow-lg">100%</div>
                      <div class="text-xs text-gray-600 dark:text-gray-300 text-shadow-lg dark:text-shadow-lg-dark">Configurable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tecnologías -->
            <div class="mb-6">
              <h4 class="text-gray-900 dark:text-white font-bold text-lg mb-3 text-shadow-lg dark:text-shadow-lg-dark flex items-center">
                <i class="fas fa-tools text-blue-600 dark:text-blue-400 mr-2"></i>
                Tecnologías Utilizadas
              </h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full text-shadow-lg dark:text-shadow-lg-dark">
                  Vue 3
                </span>
                <span class="px-3 py-1.5 bg-green-600/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full text-shadow-lg dark:text-shadow-lg-dark">
                  Vue Router
                </span>
                <span class="px-3 py-1.5 bg-purple-600/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-full text-shadow-lg dark:text-shadow-lg-dark">
                  Pinia
                </span>
                <span class="px-3 py-1.5 bg-cyan-600/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold rounded-full text-shadow-lg dark:text-shadow-lg-dark">
                  Tailwind CSS
                </span>
                <span class="px-3 py-1.5 bg-yellow-600/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-semibold rounded-full text-shadow-lg dark:text-shadow-lg-dark">
                  Vite
                </span>
                <span class="px-3 py-1.5 bg-red-600/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold rounded-full text-shadow-lg dark:text-shadow-lg-dark">
                  JavaScript ES6+
                </span>
              </div>
            </div>

            <!-- Características -->
            <div class="mb-4">
              <h4 class="text-gray-900 dark:text-white font-bold text-sm mb-2 text-shadow-lg dark:text-shadow-lg-dark">Características principales:</h4>
              <div class="grid grid-cols-2 gap-2">
                <div class="flex items-center text-shadow-lg dark:text-shadow-lg-dark">
                  <i class="fas fa-check-circle text-blue-600 dark:text-blue-400 text-xs mr-2"></i>
                  <span class="text-gray-700 dark:text-gray-300 text-xs">Múltiples layouts dinámicos</span>
                </div>
                <div class="flex items-center text-shadow-lg dark:text-shadow-lg-dark">
                  <i class="fas fa-check-circle text-blue-600 dark:text-blue-400 text-xs mr-2"></i>
                  <span class="text-gray-700 dark:text-gray-300 text-xs">Routing modular</span>
                </div>
                <div class="flex items-center text-shadow-lg dark:text-shadow-lg-dark">
                  <i class="fas fa-check-circle text-blue-600 dark:text-blue-400 text-xs mr-2"></i>
                  <span class="text-gray-700 dark:text-gray-300 text-xs">Gestión de estado con Pinia</span>
                </div>
                <div class="flex items-center text-shadow-lg dark:text-shadow-lg-dark">
                  <i class="fas fa-check-circle text-blue-600 dark:text-blue-400 text-xs mr-2"></i>
                  <span class="text-gray-700 dark:text-gray-300 text-xs">Diseño responsive</span>
                </div>
                <div class="flex items-center text-shadow-lg dark:text-shadow-lg-dark">
                  <i class="fas fa-check-circle text-blue-600 dark:text-blue-400 text-xs mr-2"></i>
                  <span class="text-gray-700 dark:text-gray-300 text-xs">Lazy loading de rutas</span>
                </div>
                <div class="flex items-center text-shadow-lg dark:text-shadow-lg-dark">
                  <i class="fas fa-check-circle text-blue-600 dark:text-blue-400 text-xs mr-2"></i>
                  <span class="text-gray-700 dark:text-gray-300 text-xs">Configuración escalable</span>
                </div>
              </div>
            </div>

            <!-- Footer de la modal -->
            <div class="pt-4 border-t border-gray-300 dark:border-gray-700">
              <div class="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
                <div class="mb-2 sm:mb-0">
                  <p class="text-sm font-bold text-gray-900 dark:text-white text-shadow-lg dark:text-shadow-lg-dark">Sistema de Múltiples Layouts</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400 text-shadow-lg dark:text-shadow-lg-dark">Arquitectura flexible para aplicaciones Vue 3</p>
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-400">
                  <p><i class="far fa-copyright text-shadow-lg dark:text-shadow-lg-dark"></i> 2025 Todos los derechos reservados</p>
                  <p class="text-blue-600 dark:text-blue-400 font-semibold text-shadow-lg dark:text-shadow-lg-dark">Versión 1.0.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { useModalStore } from '@/stores/modalStore'
const modalStore = useModalStore()
</script>

<style scoped>
/* Animaciones de transición */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
    transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

/* Personalización del scroll */
.scrollbar-custom {
    scrollbar-width: thin;
    /* Para Firefox */
    scrollbar-color: #3b82f6 #f1f5f9;
    /* Azul y gris claro para Firefox */
}

/* Para navegadores WebKit (Chrome, Safari, Edge) */
.scrollbar-custom::-webkit-scrollbar {
    width: 6px;
    /* Más delgado */
}

.scrollbar-custom::-webkit-scrollbar-track {
    background: #f1f5f9;
    /* Color de fondo del track */
    border-radius: 4px;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
    background: #3b82f6;
    /* Color azul */
    border-radius: 4px;
    transition: all 0.3s ease;
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
    background: #2563eb;
    /* Azul más oscuro al hover */
}
</style>