import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Não embutir imagens em base64 no JS: elas viram arquivos com cache próprio
    // e não pesam no carregamento inicial do bundle.
    assetsInlineLimit: 0,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/index" as *;`,
      },
    },
  },
})
