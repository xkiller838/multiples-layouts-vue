<template>
  <div class="bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col items-center justify-center px-4 py-8">

    <div class="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-soft-green border border-transparent dark:border-gray-800 overflow-hidden z-10 transition-colors duration-300">
      <div class="px-4 sm:px-8 py-4 sm:py-8">
        <!-- Encabezado del Formulario -->
        <div class="text-center mb-6">
          <div @click="$router.push('/')"
            class="inline-flex items-center justify-center cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 mb-4 shadow-md hover:shadow-lg transition-all duration-300">
            <!-- Icono de usuario nuevo -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">¡Crea tu cuenta!</h2>
        </div>

        <form id="registerForm" class="space-y-4">
          <!-- Nombre y Apellido en una fila (responsive) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Nombre -->
            <div class="space-y-2">
              <label for="firstname" class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Nombre</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input type="text" id="firstname"
                  class="input-field w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                  placeholder="Juan" required>
              </div>
            </div>

            <!-- Apellido -->
            <div class="space-y-2">
              <label for="lastname" class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Apellido</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input type="text" id="lastname"
                  class="input-field w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                  placeholder="Pérez" required>
              </div>
            </div>
          </div>

          <!-- Correo electrónico -->
          <div class="space-y-2">
            <label for="email" class="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Correo Electrónico</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input type="email" id="email"
                class="input-field w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                placeholder="ejemplo@correo.com" required>
            </div>
          </div>

          <!-- Contraseña y Confirmar Contraseña en una fila (responsive) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Contraseña -->
            <div class="space-y-2">
              <label for="password" class="text-sm font-medium text-gray-600 dark:text-gray-200 ml-1">Contraseña</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input type="password" id="password"
                  class="input-field w-full pl-10 pr-12 py-2 rounded-xl border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                  placeholder="••••••••" required>
                <button type="button" id="togglePassword" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Confirmar contraseña -->
            <div class="space-y-2">
              <label for="confirmPassword" class="text-sm font-medium text-gray-600 dark:text-gray-200 ml-1">Confirmar Contraseña</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <input type="password" id="confirmPassword"
                  class="input-field w-full pl-10 pr-12 py-2 rounded-xl border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:text-gray-400 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                  placeholder="••••••••" required>
                <button type="button" id="toggleConfirmPassword" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-green-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Términos y condiciones -->
          <div class="flex items-start">
            <input type="checkbox" id="terms"
              class="h-4 w-4 mt-1 text-green-500 focus:ring-green-400 border-gray-300 rounded dark:bg-gray-800 dark:border-gray-700" required>
            <label for="terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-400">
              Acepto los 
              <a href="#" class="font-medium text-green-600 hover:text-green-800 hover:underline transition duration-300">
                términos y condiciones
              </a>
              y la
              <a href="#" class="font-medium text-green-600 hover:text-green-800 hover:underline transition duration-300">
                política de privacidad
              </a>
            </label>
          </div>

          <!-- Botón de registro -->
          <button type="submit"
            class="group w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-soft-green hover:shadow-soft-green-hover transform hover:-translate-y-0.5 transition-all duration-300">
            Crear Cuenta
          </button>

          <!-- Link a login -->
          <div class="text-center mt-2">
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-200 dark:border-gray-200">
              ¿Ya tienes una cuenta?
              <a href="#"
                class="font-medium text-green-600 hover:text-green-800 hover:underline ml-1 transition duration-300">
                Inicia sesión aquí
              </a>
            </p>
          </div>

          <!-- Divisor -->
          <div class="relative my-3">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">O regístrate con</span>
            </div>
          </div>

          <!-- Botones de redes sociales -->
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <button type="button" class="flex items-center justify-center cursor-pointer py-2.5 border border-green-300 dark:border-green-800 rounded-lg bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-all">
              <i class="fab fa-google text-green-500 mr-2"></i> Google
            </button>
            <button type="button" class="flex items-center justify-center cursor-pointer py-2.5 border border-green-300 dark:border-green-800 rounded-lg bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-all">
              <i class="fab fa-facebook text-green-500 mr-2"></i> Facebook
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