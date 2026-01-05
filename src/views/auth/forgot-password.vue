<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">

    <div class="w-full max-w-md bg-white rounded-2xl shadow-soft-green overflow-hidden z-10">
      <div class="px-6 sm:px-8 py-6 sm:py-8">
        <!-- Encabezado del Formulario -->
        <div class="text-center mb-6">
          <div @click="$router.push('/')"
            class="inline-flex items-center justify-center cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 text-green-600 mb-4 shadow-md hover:shadow-lg transition-all duration-300">
            <!-- Icono de llave -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800">¿Olvidaste tu contraseña?</h2>
          <p class="text-sm text-gray-500 mt-2">No te preocupes, te ayudaremos a recuperarla</p>
        </div>

        <form id="forgotPasswordForm" class="space-y-5">
          <!-- Correo electrónico -->
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-gray-600 ml-1">Correo Electrónico</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input type="email" id="email"
                class="input-field w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                placeholder="ejemplo@correo.com" required>
            </div>
            <p class="text-xs text-gray-500 ml-1">Te enviaremos un enlace para restablecer tu contraseña</p>
          </div>

          <!-- Botón de enviar -->
          <button type="submit"
            class="group w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-soft-green hover:shadow-soft-green-hover transform hover:-translate-y-0.5 transition-all duration-300">
            Enviar Enlace de Recuperación
          </button>

          <!-- Link a login -->
          <div class="text-center mt-4">
            <p class="text-sm sm:text-base text-gray-600">
              ¿Recordaste tu contraseña?
              <a href="#" @click.prevent="$router.push('/login')"
                class="font-medium text-green-600 hover:text-green-800 hover:underline ml-1 transition duration-300">
                Inicia sesión aquí
              </a>
            </p>
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
