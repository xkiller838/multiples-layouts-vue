<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">

    <div class="w-full max-w-md bg-white rounded-2xl shadow-soft-green overflow-hidden z-10">
      <div class="px-8 py-4">
        <!-- Encabezado del Formulario -->
        <div class="text-center mb-4">
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 shadow-sm">
            <!-- Icono de hoja/usuario -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-800">¡Bienvenido de nuevo!</h2>
        </div>

        <form id="loginForm" class="space-y-5">
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
                class="input-field w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400"
                placeholder="ejemplo@correo.com" required>
            </div>
          </div>

          <div>
            <label for="password" class="block text-gray-600 font-medium mb-2">Contraseña</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-lock text-green-500"></i>
              </div>
              <input type="password" id="password"
                class="input-field w-full pl-10 pr-12 py-3 border border-gray-200 bg-gray-50 rounded-lg input-focus focus:outline-none transition duration-300"
                placeholder="••••••••" required>
              <button type="button" id="togglePassword" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <i class="fas fa-eye text-gray-400 hover:text-green-500"></i>
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" id="remember"
                class="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded">
              <label for="remember" class="ml-2 block text-sm text-gray-700">Recordar sesión</label>
            </div>

            <a href="#"
              class="text-sm font-medium text-green-600 hover:text-green-800 hover:underline transition duration-300">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button type="submit"
            class="group w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-soft-green hover:shadow-soft-green-hover transform hover:-translate-y-0.5 transition-all duration-300">
            Iniciar Sesión
          </button>

          <div class="text-center mt-2">
            <p class="text-gray-600">
              ¿No tienes una cuenta?
              <a href="#"
                class="font-medium text-green-600 hover:text-green-800 hover:underline ml-1 transition duration-300">
                Regístrate aquí
              </a>
            </p>
          </div>

          <div class="relative my-3">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white text-gray-500">O continúa con</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <button type="button"
              class="flex items-center cursor-pointer justify-center py-3 border border-green-300 rounded-lg bg-white hover:bg-green-50 transition-all duration-300 shadow-green hover:shadow-green-hover transform hover:-translate-y-0.5">
              <i class="fab fa-google text-green-500 mr-2"></i>
              <span class="text-gray-700 font-medium">Google</span>
            </button>

            <button type="button"
              class="flex items-center cursor-pointer justify-center py-3 border border-green-300 rounded-lg bg-white hover:bg-green-50 transition-all duration-300 shadow-green hover:shadow-green-hover transform hover:-translate-y-0.5">
              <i class="fab fa-facebook text-green-500 mr-2"></i>
              <span class="text-gray-700 font-medium">Facebook</span>
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