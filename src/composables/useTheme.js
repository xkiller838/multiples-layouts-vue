// composables/useTheme.js
import { ref, onMounted } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  // Función para aplicar la clase al HTML
  const applyTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    isDark.value = dark;
  };

  // Alternar tema
  const toggleTheme = () => {
    const newTheme = !isDark.value;
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Inicializar al cargar
  onMounted(() => {
    const userPreference = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Si hay preferencia guardada úsala, si no, usa la del sistema
    const initDark = userPreference === 'dark' || (!userPreference && systemPreference);
    applyTheme(initDark);
  });

  return { isDark, toggleTheme };
}