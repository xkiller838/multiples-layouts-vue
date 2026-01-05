<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">

    <div class="w-full max-w-md bg-white rounded-2xl shadow-soft-green overflow-hidden z-10">
      <div class="px-6 sm:px-8 py-6 sm:py-8">
        <!-- Encabezado del Formulario -->
        <div class="text-center mb-6">
          <div class="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 text-green-600 mb-4 shadow-md">
            <!-- Icono de check en círculo -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800">¡Contraseña Restablecida!</h2>
          <p class="text-sm text-gray-500 mt-2">Tu contraseña ha sido actualizada exitosamente</p>
        </div>

        <!-- Mensaje de éxito -->
        <div class="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <div class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 class="text-sm font-semibold text-green-800 mb-1">Contraseña actualizada</h3>
              <p class="text-xs text-green-700">
                Tu contraseña ha sido restablecida correctamente. Ahora puedes iniciar sesión con tu nueva contraseña.
              </p>
            </div>
          </div>
        </div>

        <!-- Información adicional -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div class="flex items-start">
            <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 class="text-sm font-semibold text-blue-800 mb-1">Consejos de seguridad</h3>
              <ul class="text-xs text-blue-700 space-y-1">
                <li>• No compartas tu contraseña con nadie</li>
                <li>• Usa una contraseña única para cada servicio</li>
                <li>• Cambia tu contraseña regularmente</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Botón para ir al login -->
        <button @click="$router.push('/login')" type="button"
          class="group w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-soft-green hover:shadow-soft-green-hover transform hover:-translate-y-0.5 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Ir a Iniciar Sesión
        </button>

        <!-- Link alternativo -->
        <div class="text-center mt-6">
          <p class="text-sm sm:text-base text-gray-600">
            ¿Necesitas ayuda?
            <a href="#" @click.prevent="$router.push('/')"
              class="font-medium text-green-600 hover:text-green-800 hover:underline ml-1 transition duration-300">
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
