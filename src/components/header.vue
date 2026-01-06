<template>
    <nav class="w-full fixed top-0 left-0 z-50">
        <div class="relative">
            <!-- Barra de navegación principal -->
            <div
                class="relative backdrop-blur-sm dark:bg-gray-900/90 border-b border-white/10 shadow-[0_0.5vmin_1vmin_rgba(0,0,0,0.2)]">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center h-14">
                        <!-- Logo o marca a la izquierda -->
                        <div class="flex items-center space-x-2">
                            <div @click="$router.push('/')" class="w-8 h-8 cursor-pointer flex items-center justify-center rounded-full backdrop-blur-sm bg-gray-200 dark:bg-gray-800 border border-white/30 transition-colors">
                                <i class="fas fa-home text-black dark:text-white text-sm"></i>
                            </div>
                        </div>

                        <!-- Botón a la derecha -->
                        <div class="flex items-center space-x-3">
                            <!-- Botón menú -->
                            <button @click="toggleMobileMenu" class="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg backdrop-blur-sm bg-gray-200 dark:bg-gray-800 border border-white/30 dark:border-gray-700 text-black dark:text-white transition-colors">
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Menú desplegable -->
                <div v-show="mobileMenuOpen" class="absolute top-full right-1.5 w-48 mt-2 rounded-2xl bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-40 shadow-lg transition-colors duration-300">
                    <div class="container mx-auto px-2 py-2">
                        <ul class="space-y-1">
                            <li v-for="option in qrOptions" :key="option.href">
                                <a 
                                    @click="handleNavigate(option.href)"
                                    class="block cursor-pointer text-[10px] xs:text-xs sm:text-sm px-2 py-2 rounded-lg transition-colors duration-200
                                          text-gray-700 hover:bg-gray-200 
                                          dark:text-gray-200 dark:hover:bg-gray-700">
                                    <i :class="option.icon" class="mr-2"></i>
                                    {{ option.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mobileMenuOpen = ref(false)

const qrOptions = [
    { title: 'Profile', href: "/profile", icon: 'fas fa-user-circle' },
    { title: 'Login', href: "/login", icon: 'fas fa-sign-in-alt' },
    { title: 'Register', href: "/register", icon: 'fas fa-user-plus' },
    { title: 'Forgot Password', href: "/forgot-password", icon: 'fas fa-key' },
    { title: 'Reset Password', href: "/reset-password", icon: 'fas fa-lock' },
    { title: 'Confirm Password', href: "/confirm-password", icon: 'fas fa-check-circle' },
];

// Toggle menú móvil
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Cerrar menú móvil
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Navegar y cerrar menú
const handleNavigate = (href) => {
    router.push(href);
    closeMobileMenu();
}

// Cerrar al hacer click fuera
const handleClickOutside = (event) => {
  if (!event.target.closest('nav')) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="css" scoped>
 [v-cloak] {
  display: none;
 }
</style>