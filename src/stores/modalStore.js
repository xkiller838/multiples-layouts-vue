import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {

  const isAboutModalOpen = ref(false) //store abrir modal sobre

  // Funções para abrir, fechar e alternar o estado do modal sobre
  const openAboutModal = () => {
    isAboutModalOpen.value = true
  }

  // Cerrar modal sobre
  const closeAboutModal = () => {
    isAboutModalOpen.value = false
  }

  // Alternar estado do modal sobre
  const toggleAboutModal = () => {
    isAboutModalOpen.value = !isAboutModalOpen.value
  }

  return {
    isAboutModalOpen,
    openAboutModal,
    closeAboutModal,
    toggleAboutModal
  }
})