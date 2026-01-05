<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">

    <div class="w-full max-w-2xl bg-white rounded-2xl shadow-soft-green overflow-hidden z-10">
      <div class="px-6 sm:px-8 py-6 sm:py-8">
        <!-- Encabezado del Perfil -->
        <div class="text-center mb-6">
          <div class="relative inline-block">
            <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg mb-4">
              JD
            </div>
            <!-- Botón de editar foto -->
            <button class="absolute bottom-3 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md hover:bg-green-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800">Mi Perfil</h2>
          <p class="text-sm text-gray-500 mt-1">Gestiona tu información personal</p>
        </div>

        <form id="profileForm" class="space-y-5">
          <!-- Información Personal -->
          <div class="border-b border-gray-200 pb-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Información Personal
            </h3>

            <!-- Nombre y Apellido en una fila -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <!-- Nombre -->
              <div class="space-y-2">
                <label for="firstname" class="text-sm font-medium text-gray-600 ml-1">Nombre</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input type="text" id="firstname" value="Juan"
                    class="input-field w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none">
                </div>
              </div>

              <!-- Apellido -->
              <div class="space-y-2">
                <label for="lastname" class="text-sm font-medium text-gray-600 ml-1">Apellido</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input type="text" id="lastname" value="Pérez"
                    class="input-field w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none">
                </div>
              </div>
            </div>

            <!-- Email y Teléfono en una fila -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Email -->
              <div class="space-y-2">
                <label for="email" class="text-sm font-medium text-gray-600 ml-1">Correo Electrónico</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input type="email" id="email" value="juan.perez@example.com"
                    class="input-field w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none">
                </div>
              </div>

              <!-- Teléfono -->
              <div class="space-y-2">
                <label for="phone" class="text-sm font-medium text-gray-600 ml-1">Teléfono</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <input type="tel" id="phone" value="+1 234 567 8900"
                    class="input-field w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none">
                </div>
              </div>
            </div>
          </div>

          <!-- Dirección -->
          <div class="border-b border-gray-200 pb-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Dirección
            </h3>

            <!-- Dirección completa -->
            <div class="space-y-2 mb-4">
              <label for="address" class="text-sm font-medium text-gray-600 ml-1">Calle y Número</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
                <input type="text" id="address" value="Calle Principal 123"
                  class="input-field w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none">
              </div>
            </div>

            <!-- Ciudad y Código Postal -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Ciudad -->
              <div class="space-y-2">
                <label for="city" class="text-sm font-medium text-gray-600 ml-1">Ciudad</label>
                <input type="text" id="city" value="Madrid"
                  class="input-field w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none">
              </div>

              <!-- Código Postal -->
              <div class="space-y-2">
                <label for="zipcode" class="text-sm font-medium text-gray-600 ml-1">Código Postal</label>
                <input type="text" id="zipcode" value="28001"
                  class="input-field w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 placeholder-gray-400 focus:outline-none">
              </div>
            </div>
          </div>

          <!-- Cambiar Contraseña -->
          <div class="border-b border-gray-200 pb-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Seguridad
            </h3>

            <button type="button" @click="$router.push('/reset-password')"
              class="w-full sm:w-auto px-6 py-2.5 border border-green-500 text-green-600 rounded-xl hover:bg-green-50 transition-all duration-300 font-medium flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              Cambiar Contraseña
            </button>
          </div>

          <!-- Botones de Acción -->
          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <button type="submit"
              class="flex-1 cursor-pointer flex justify-center items-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-soft-green hover:shadow-soft-green-hover transform hover:-translate-y-0.5 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Guardar Cambios
            </button>

            <button type="button" @click="$router.push('/')"
              class="flex-1 sm:flex-initial cursor-pointer px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold">
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
