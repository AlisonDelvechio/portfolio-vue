import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      // Voltar para posição salva
      return savedPosition;
    } else if (to.hash) {
      // Se URL tem hash, tenta fazer scroll para o id correspondente
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      // Scroll para topo da página
      return { top: 0 };
    }
  }
});

export default router;