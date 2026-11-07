import { createApp } from 'vue'
import { addCollection, type IconifyJSON } from '@iconify/vue'
import App from './App.vue'
import router from './router'
import icons from './icons/icons.json'
import './styles/main.scss'

// Ícones locais (gerados por scripts/build-icons.mjs): sem requisições à API do Iconify.
for (const collection of icons as unknown as IconifyJSON[]) addCollection(collection)

createApp(App).use(router).mount('#app')
