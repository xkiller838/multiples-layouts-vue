<template>
  <div class="bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col items-center justify-center px-4 py-8 transition-colors duration-300">

    <div class="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-soft-green border border-transparent dark:border-gray-800 overflow-hidden z-10 transition-colors duration-300">
      <div class="px-6 sm:px-8 py-6 sm:py-8">
        
        <div class="text-center mb-6">
          <div @click="$router.push('/')"
            class="inline-flex items-center justify-center cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4 shadow-md hover:shadow-lg transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Restablecer Contraseña</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Ingresa tu nueva contraseña</p>
        </div>

        <form id="resetPasswordForm" class="space-y-5">
          <div class="space-y-2">
            <label for="password" class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Nueva Contraseña</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                <i class="fas fa-lock text-xs"></i>
              </span>
              <input type="password" id="password"
                class="input-field w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                placeholder="••••••••" required>
              <button type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <i class="fas fa-eye text-gray-400 hover:text-green-500"></i>
              </button>
            </div>
          </div>

          <div class="space-y-2">
            <label for="confirmPassword" class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Confirmar Nueva Contraseña</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                <i class="fas fa-check-double text-xs"></i>
              </span>
              <input type="password" id="confirmPassword"
                class="input-field w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                placeholder="••••••••" required>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 rounded-lg p-3 transition-colors">
            <p class="text-xs text-gray-600 dark:text-green-400 font-medium mb-2">La contraseña debe contener:</p>
            <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li class="flex items-center">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Mínimo 8 caracteres
              </li>
              <li class="flex items-center">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Al menos una letra mayúscula
              </li>
              <li class="flex items-center">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Al menos un número
              </li>
            </ul>
          </div>

          <button type="submit"
            class="group w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
            Restablecer Contraseña
          </button>

          <div class="text-center mt-4">
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <a href="#" @click.prevent="$router.push('/login')"
                class="font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 hover:underline transition duration-300">
                Volver al inicio de sesión
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
