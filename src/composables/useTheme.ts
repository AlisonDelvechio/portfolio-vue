import { ref, watch } from 'vue'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

// public/theme-init.js já aplicou a classe no <body> antes do Vue montar
// (evita o "flash" do tema errado); aqui só lemos o estado inicial.
function initialTheme(): Theme {
  return document.body.classList.contains('light') ? 'light' : 'dark'
}

const theme = ref<Theme>(initialTheme())

watch(theme, (value) => {
  document.body.classList.toggle('dark', value === 'dark')
  document.body.classList.toggle('light', value === 'light')
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Armazenamento indisponível (ex.: modo privado): o tema só não fica salvo.
  }
})

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggleTheme }
}
