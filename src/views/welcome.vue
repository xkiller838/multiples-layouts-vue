<template>
    <div class="relative top-14 
    min-h-[calc(100vh-56px)] 
    bg-white text-gray-900 
    dark:bg-gray-800 dark:text-gray-100 
    transition-colors duration-300">
        <button @click="toggleTheme" class="
      flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300
      cursor-pointer
      bg-gray-200 text-gray-800 hover:bg-gray-300
      dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600
    " aria-label="Alternar tema">
            <span>{{ icon }}</span>
            <span>{{ isDark ? 'Modo Oscuro' : 'Modo Claro' }}</span>
        </button>
    </div>
</template>

<script setup>
import { useTheme } from '../composables/useTheme';
import { computed } from 'vue';

// Importamos la lógica
const { isDark, toggleTheme } = useTheme();

// Iconos simples usando texto o podrías usar SVGs
const icon = computed(() => isDark.value ? '🌙' : '☀️');
</script>

<style lang="scss" scoped></style>