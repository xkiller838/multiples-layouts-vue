// ../composables/useTheme.js
import { ref, onMounted, watch } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  // 1. Inicializar al montar
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Establecemos el valor inicial
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      isDark.value = true;
    } else {
      isDark.value = false;
    }
  });

  // 2. Esta función ahora SOLO cambia la variable reactive
  const toggleTheme = () => {
    isDark.value = !isDark.value;
    // Nota: No llamamos a updateTheme aquí, el watch lo hará
  };

  // 3. El Watch vigila cambios en 'isDark' y ejecuta los efectos secundarios
  watch(isDark, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });

  return { isDark, toggleTheme };
}