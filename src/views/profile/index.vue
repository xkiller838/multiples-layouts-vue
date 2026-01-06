<template>
  <div class="bg-gray-100 dark:bg-gray-950 min-h-screen flex flex-col items-center justify-center px-4 py-8 transition-colors duration-300">

    <div class="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-soft-green border border-transparent dark:border-gray-800 overflow-hidden z-10 transition-colors duration-300">
      <div class="px-6 sm:px-8 py-6 sm:py-8">
        
        <div class="text-center mb-8">
          <div class="relative inline-block">
            <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg mb-4">
              JD
            </div>
            <button class="absolute bottom-3 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md hover:bg-green-600 transition-all duration-300 border-2 border-white dark:border-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Mi Perfil</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Gestiona tu información personal</p>
        </div>

        <form id="profileForm" class="space-y-6">
          
          <div class="border-b border-gray-100 dark:border-gray-800 pb-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Información Personal
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Nombre</label>
                <input type="text" value="Juan"
                  class="input-field w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Apellido</label>
                <input type="text" value="Pérez"
                  class="input-field w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20">
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Correo Electrónico</label>
                <input type="email" value="juan.perez@example.com"
                  class="input-field w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20">
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Teléfono</label>
                <input type="tel" value="+1 234 567 8900"
                  class="input-field w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20">
              </div>
            </div>
          </div>

          <div class="border-b border-gray-100 dark:border-gray-800 pb-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Dirección
            </h3>

            <div class="space-y-4">
              <div class="space-y-2">
                <label class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Calle y Número</label>
                <input type="text" value="Calle Principal 123"
                  class="input-field w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20">
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Ciudad</label>
                  <input type="text" value="Madrid"
                    class="input-field w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20">
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Código Postal</label>
                  <input type="text" value="28001"
                    class="input-field w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20">
                </div>
              </div>
            </div>
          </div>

          <div class="pb-2">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Seguridad
            </h3>
            <button type="button" @click="$router.push('/reset-password')"
              class="w-full sm:w-auto px-6 py-2.5 border border-green-500 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 font-medium flex items-center justify-center">
              Cambiar Contraseña
            </button>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 pt-4">
            <button type="submit"
              class="flex-1 cursor-pointer flex justify-center items-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Guardar Cambios
            </button>
            <button type="button" @click="$router.push('/')"
              class="flex-1 sm:flex-initial cursor-pointer px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
/* Definición de sombras verdes personalizadas */
.shadow-soft-green {
  box-shadow: 0 10px 40px -10px rgba(74, 222, 128, 0.5);
  /* Verde suave */
}

.shadow-soft-green-hover {
  box-shadow: 0 15px 45px -10px rgba(34, 197, 94, 0.6);
  /* Verde más intenso al hover */
}

/* Estilo para inputs con focus suave */
.input-field:focus {
  outline: none;
  border-color: #22c55e;
  /* Green-500 */
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.1);
}
</style>
