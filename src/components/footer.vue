<template>
    <footer class="w-full fixed bottom-0 left-0 z-10">
        <div class="relative">
            <!-- Footer principal con efecto glass -->
            <div
                class="relative backdrop-blur-sm bg-white/20 dark:bg-gray-900/90 border border-white/10 dark:border-white/5 shadow-[0_0.5vmin_1vmin_rgba(0,0,0,0.4)] overflow-hidden transition-colors duration-300">
                <div class="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
                    <!-- Contenido interno del footer -->
                    <div class="flex justify-between items-center relative z-10">
                        <!-- Lado izquierdo - Derechos reservados -->
                        <div class="flex items-center text-black dark:text-gray-200 flex-shrink-0 transition-colors duration-300">
                            <i
                                class="fas fa-copyright text-[10px] xs:text-xs mr-1.5 sm:mr-2 opacity-80 text-shadow-lg"></i>
                            <span
                                class="text-[10px] sm:text-sm text-shadow-lg tracking-wide sm:tracking-wider truncate max-w-[120px] xs:max-w-[140px] sm:truncate-none sm:max-w-none">
                                Todos los derechos reservados
                            </span>
                        </div>

                        <!-- Lado derecho - Botón Acerca de RESPONSIVE -->
                        <div class="flex-shrink-0 ml-2">
                            <button @click="modalStore.openAboutModal"
                                class="relative animate-bounce backdrop-blur-sm 
                                           bg-white/25 dark:bg-gray-700/50 
                                           border border-gray-300 dark:border-gray-600 
                                           text-black dark:text-white 
                                           rounded-full flex items-center justify-center tracking-wide 
                                           transition-all duration-300 
                                           hover:bg-white/35 dark:hover:bg-gray-600 
                                           hover:shadow-[0_0_0.5vmin_#fff] dark:hover:shadow-[0_0_0.5vmin_rgba(255,255,255,0.2)] 
                                           hover:scale-[1.02] px-2 min-h-[2rem] cursor-pointer">
                                <i class="fas fa-info-circle text-xs mr-1.5"></i>
                                <span class="text-xs whitespace-nowrap text-shadow-lg">Acerca de</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useModalStore } from '@/stores/modalStore'

const modalStore = useModalStore()
</script>

<style lang="scss" scoped></style>