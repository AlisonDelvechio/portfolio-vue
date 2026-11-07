import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import { projects, findProjectIndex, resolveLegacyProject } from '@/data/projects'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/projects/:slug',
    name: 'Project',
    component: () => import('@/views/Projects.vue'),
    beforeEnter: (to) => {
      if (findProjectIndex(String(to.params.slug)) === -1) return { name: 'Home', hash: '#projects' }
    },
  },
  {
    // Compatibilidade com links antigos: /projects?project=<slug ou título>
    path: '/projects',
    redirect: (to) => {
      const q = to.query.project
      const query = typeof q === 'string' ? q : Array.isArray(q) ? (q[0] ?? '') : ''
      const slug = (query && resolveLegacyProject(query)) || projects[0].slug
      return { name: 'Project', params: { slug }, query: {} }
    },
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

// Altura do header fixo, para a âncora não ficar escondida atrás dele.
const HEADER_OFFSET = 96

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: HEADER_OFFSET, behavior: 'smooth' }
    // Trocar de projeto mantém a página de detalhes; sobe com suavidade.
    if (to.name === 'Project' && from.name === 'Project') return { top: 0, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const project = to.name === 'Project' ? projects[findProjectIndex(String(to.params.slug))] : null
  document.title = project
    ? `${project.title} · Alison Delvechio`
    : 'Alison Delvechio · Desenvolvedor Front-end'
})

export default router
