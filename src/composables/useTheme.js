import { ref, onMounted, watch } from 'vue'

// ------------------------------------------------------------------
// 1. DEFINICIÓN DEL ESTADO
// ------------------------------------------------------------------
export function useTheme() {
  /**
   * Creamos una referencia reactiva llamada 'isDark'.
   * Inicializamos en 'false' (modo claro), pero este valor se actualizará
   * rápidamente en onMounted según la preferencia guardada o del sistema.
   */
  const isDark = ref(false)

  // 1. Inicializar al montar
  onMounted(() => {
    // Paso A: Verificamos si el usuario ya visitó la página y guardó una preferencia.
    const savedTheme = localStorage.getItem('theme')

    /**
     * Paso B: Si no hay preferencia guardada, verificamos la preferencia del sistema.
     * 'matches' será true si el sistema tiene el modo oscuro activado.
     */
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    /**
     * Paso 3: Decidir qué tema aplicar (en orden de prioridad):
     * Si hay una preferencia guardada en localStorage, la usamos.
     */
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      isDark.value = true
    } else {
      isDark.value = false
    }
  })

  /**
   * 2. Esta función ahora SOLO cambia la variable reactive 'isDark'.
   * Esta función se exporta para ser usada en el componente del botón.
   * Su única responsabilidad es cambiar el valor de la variable reactiva.
   * NOTA: No actualizamos el DOM aquí, el 'watch' de abajo se encargará de ello.
   */
  const toggleTheme = () => {
    // Invertimos el valor booleano (true pasa a false, y viceversa).
    isDark.value = !isDark.value
  }

  // 3. El Watch vigila cambios en 'isDark' y ejecuta los efectos secundarios
  watch(isDark, (newValue) => {
    if (newValue) {
      /** Agregamos la clase 'dark' a la etiqueta <html> del documento.
       * Esto es lo que le dice a Tailwind CSS que active las clases 'dark:xxx'
       */
      document.documentElement.classList.add('dark')

      // Guardamos la preferencia en el navegador para que la recuerde al recargar.
      localStorage.setItem('theme', 'dark')
    } else {
      /**Removemos la clase 'dark' de la etiqueta <html>.
       *Tailwind volverá a usar las clases por defecto (sin el prefijo dark:).*/
      document.documentElement.classList.remove('dark')

      // Guardamos la preferencia 'light' en el navegador.
      localStorage.setItem('theme', 'light')
    }
  })

  return { isDark, toggleTheme }
}
