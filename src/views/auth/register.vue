<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">

    <div class="w-full max-w-lg bg-white rounded-2xl shadow-soft-green overflow-hidden z-10">
      <div class="px-4 sm:px-8 py-4 sm:py-8">
        <!-- Encabezado del Formulario -->
        <div class="text-center mb-6">
          <div @click="$router.push('/')"
            class="inline-flex items-center justify-center cursor-pointer w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 text-green-600 mb-4 shadow-md hover:shadow-lg transition-all duration-300">
            <!-- Icono de usuario nuevo -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800">¡Crea tu cuenta!</h2>
        </div>

        <form id="registerForm" class="space-y-4">
          <!-- Nombre y Apellido en una fila (responsive) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Nombre -->
            <div class="space-y-2">
              <label for="firstname" class="text-sm font-medium text-gray-600 ml-1">Nombre</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input type="text" id="firstname"
                  class="input-field w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                  placeholder="Juan" required>
              </div>
            </div>

            <!-- Apellido -->
            <div class="space-y-2">
              <label for="lastname" class="text-sm font-medium text-gray-600 ml-1">Apellido</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input type="text" id="lastname"
                  class="input-field w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                  placeholder="Pérez" required>
              </div>
            </div>
          </div>

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
                class="input-field w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
                placeholder="ejemplo@correo.com" required>
            </div>
          </div>

          <!-- Contraseña y Confirmar Contraseña en una fila (responsive) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Contraseña -->
            <div class="space-y-2">
              <label for="password" class="text-sm font-medium text-gray-600 ml-1">Contraseña</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input type="password" id="password"
                  class="input-field w-full pl-10 pr-12 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
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
              <label for="confirmPassword" class="text-sm font-medium text-gray-600 ml-1">Confirmar Contraseña</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <input type="password" id="confirmPassword"
                  class="input-field w-full pl-10 pr-12 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none"
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
              class="h-4 w-4 mt-1 text-green-500 focus:ring-green-400 border-gray-300 rounded" required>
            <label for="terms" class="ml-2 block text-sm text-gray-700">
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
            <p class="text-sm sm:text-base text-gray-600">
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
              <span class="px-4 bg-white text-gray-500">O regístrate con</span>
            </div>
          </div>

          <!-- Botones de redes sociales -->
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <button type="button"
              class="flex items-center cursor-pointer justify-center py-2.5 px-2 border border-green-300 rounded-lg bg-white hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              <svg class="h-5 w-5 text-green-500 mr-1 sm:mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span class="text-gray-700 font-medium text-sm sm:text-base">Google</span>
            </button>

            <button type="button"
              class="flex items-center cursor-pointer justify-center py-2.5 px-2 border border-green-300 rounded-lg bg-white hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              <svg class="h-5 w-5 text-green-500 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span class="text-gray-700 font-medium text-sm sm:text-base">Facebook</span>
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