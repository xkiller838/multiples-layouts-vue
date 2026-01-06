<template>
  <div class="bg-gray-100 dark:bg-gray-950 min-h-screen flex flex-col items-center justify-center px-4 py-8 transition-colors duration-300">

    <div class="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-soft-green border border-transparent dark:border-gray-800 overflow-hidden z-10 transition-colors duration-300">
      <div class="px-6 sm:px-8 py-6 sm:py-8">
        
        <div class="text-center mb-6">
          <div class="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">¡Contraseña Restablecida!</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Tu contraseña ha sido actualizada exitosamente</p>
        </div>

        <div class="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 rounded-xl p-4 mb-6 transition-colors">
          <div class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 class="text-sm font-semibold text-green-800 dark:text-green-400 mb-1">Contraseña actualizada</h3>
              <p class="text-xs text-green-700 dark:text-gray-300">
                Tu contraseña ha sido restablecida correctamente. Ahora puedes iniciar sesión con tu nueva contraseña.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 rounded-xl p-4 mb-6 transition-colors">
          <div class="flex items-start">
            <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 class="text-sm font-semibold text-blue-800 dark:text-blue-400 mb-1">Consejos de seguridad</h3>
              <ul class="text-xs text-blue-700 dark:text-gray-300 space-y-1">
                <li>• No compartas tu contraseña con nadie</li>
                <li>• Usa una contraseña única para cada servicio</li>
                <li>• Cambia tu contraseña regularmente</li>
              </ul>
            </div>
          </div>
        </div>

        <button @click="$router.push('/login')" type="button"
          class="group w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Ir a Iniciar Sesión
        </button>

        <div class="text-center mt-6">
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            ¿Necesitas ayuda?
            <a href="#" @click.prevent="$router.push('/')"
              class="font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:underline ml-1 transition duration-300">
              Contacta soporte
            </a>
          </p>
        </div>
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
</style>
