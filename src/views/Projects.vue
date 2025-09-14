<template>
  <section class="project-page" :class="{ 'enter-active': isVisible }">
    <div class="project-header">
      <Icon
        icon="mdi:arrow-left"
        class="back-icon"
        @click="goBack"
        role="button"
        tabindex="0"
        aria-label="Voltar para a página anterior"
        @keyup.enter="goBack"
      />
      <h1>{{ project.title }}</h1>
    </div>

    <p class="description">{{ project.description }}</p>

    <div class="meta">
      <Icon icon="mdi:calendar" class="icon" />
      <span>{{ project.date }}</span>
    </div>

    <div class="tags">
      <span v-for="(tag, index) in project.tags" :key="index" class="tag">{{ tag }}</span>
    </div>

    <a
      :href="project.repo"
      target="_blank"
      rel="noopener noreferrer"
      class="repo-btn"
      :aria-label="`Ver repositório do projeto ${project.title} no GitHub (abre em nova aba)`"
      title="Abrir repositório no GitHub"
    >
      <Icon icon="mdi:github" class="icon" />
      Ver repositório
    </a>

    <div class="images">
      <img
        v-for="(image, index) in project.images"
        :key="index"
        :src="image"
        :alt="`${project.title} - imagem ${index + 1}`"
      />
    </div>

    <div class="nav-buttons">
      <button @click="prevProject" :disabled="currentIndex === 0" aria-label="Projeto anterior">
        <Icon icon="mdi:arrow-left-bold" /> Anterior
      </button>
      <button
        @click="nextProject"
        :disabled="currentIndex === projects.length - 1"
        aria-label="Próximo projeto"
      >
        Próximo <Icon icon="mdi:arrow-right-bold" />
      </button>
    </div>
  </section>
  <ScrollTopButton />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import ScrollTopButton from '../components/ScrollTopButton.vue'

// Imagens
import Project1_1 from '@/assets/projects/Project-1/Screenshot_1.png'
import Project1_2 from '@/assets/projects/Project-1/Screenshot_2.png'
import Project1_3 from '@/assets/projects/Project-1/Screenshot_3.png'
import Project1_4 from '@/assets/projects/Project-1/Screenshot_4.png'
import Project1_5 from '@/assets/projects/Project-1/Screenshot_5.png'

import Project2_1 from '@/assets/projects/Project-2/Screenshot_1.png'
import Project2_2 from '@/assets/projects/Project-2/Screenshot_2.png'

import Project3_1 from '@/assets/projects/Project-3/Screenshot_1.png'
import Project3_2 from '@/assets/projects/Project-3/Screenshot_2.png'
import Project3_3 from '@/assets/projects/Project-3/Screenshot_3.png'

import Project4_1 from '@/assets/projects/Project-4/Screenshot_1.png'
import Project4_2 from '@/assets/projects/Project-4/Screenshot_2.png'
import Project4_3 from '@/assets/projects/Project-4/Screenshot_3.png'
import Project4_4 from '@/assets/projects/Project-4/Screenshot_4.png'

import Project5_1 from '@/assets/projects/Project-5/Screenshot_1.png'
import Project5_2 from '@/assets/projects/Project-5/Screenshot_2.png'
import Project5_3 from '@/assets/projects/Project-5/Screenshot_3.png'
import Project5_4 from '@/assets/projects/Project-5/Screenshot_4.png'
import Project5_5 from '@/assets/projects/Project-5/Screenshot_5.png'
import Project5_6 from '@/assets/projects/Project-5/Screenshot_6.png'

import Project6_1 from '@/assets/projects/Project-6/Screenshot_1.png'
import Project6_2 from '@/assets/projects/Project-6/Screenshot_2.png'
import Project6_3 from '@/assets/projects/Project-6/Screenshot_3.png'
import Project6_4 from '@/assets/projects/Project-6/Screenshot_4.png'
import Project6_5 from '@/assets/projects/Project-6/Screenshot_5.png'

const router = useRouter()
const route = useRoute()

function normalize(s: string) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

type FullProject = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  repo: string
  images: string[]
}

const projects: FullProject[] = [
  {
    slug: 'star-blaster-game',
    title: 'Star Blaster Game',
    description: "Um jogo de nave no estilo shoot'em up, desenvolvido para rodar diretamente no navegador utilizando apenas HTML, CSS e JavaScript puro. O principal desafio foi criar a mecânica de movimentação fluida, colisões e efeitos gráficos utilizando a API Canvas.",
    date: '27/09/2024',
    tags: ['JavaScript', 'Game', 'Canvas'],
    repo: 'https://github.com/AlisonDelvechio/star-blaster-game',
    images: [Project1_1, Project1_2, Project1_3, Project1_4, Project1_5],
  },
  {
    slug: 'league-login',
    title: 'Tela de Login League of Legends',
    description: 'Recriação fiel da icônica tela de login do League of Legends, com foco em animações e responsividade. O projeto explora a manipulação do DOM e estilização avançada com CSS para simular a interface original.',
    date: '21/01/2023',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/AlisonDelvechio/league-of-legends-login-screen',
    images: [Project2_1, Project2_2],
  },
  {
    slug: 'pokedex',
    title: 'Pokédex',
    description: 'Aplicação web que consome a PokéAPI para listar e pesquisar Pokémon, utilizando JavaScript para manipulação dinâmica dos dados e renderização das informações. O projeto reforça o consumo de APIs REST e manipulação de elementos via JavaScript.',
    date: '07/01/2023',
    tags: ['CSS', 'JavaScript', 'API'],
    repo: 'https://github.com/AlisonDelvechio/simple-pokedex',
    images: [Project3_1, Project3_2, Project3_3],
  },
  {
    slug: 'inventectcc',
    title: 'InventecTCC',
    description: 'Sistema web completo para gerenciamento de inventário e controle de estoque, desenvolvido como Trabalho de Conclusão de Curso (TCC). Utiliza PHP com integração ao banco de dados MySQL, além de recursos dinâmicos com jQuery e Ajax para melhor experiência do usuário.',
    date: '15/05/2021',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'JavaScript', 'jQuery', 'Ajax'],
    repo: 'https://github.com/AlisonDelvechio/InventecTCC',
    images: [Project4_1, Project4_2, Project4_3, Project4_4],
  },
  {
    slug: 'first-portfolio',
    title: 'Primeiro Portfólio',
    description: 'Meu primeiro portfólio desenvolvido para apresentar projetos e habilidades. Estruturado com HTML, CSS e JavaScript, com foco em boas práticas de responsividade e design. Esse projeto marcou minha introdução no desenvolvimento web e na criação de interfaces visuais.',
    date: '02/07/2021',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/AlisonDelvechio/Portfolio',
    images: [Project5_1, Project5_2, Project5_3, Project5_4, Project5_5, Project5_6],
  },
  {
    slug: 'atom-ui',
    title: 'Atom UI',
    description: 'Biblioteca de Web Components criada com Stencil.js e SCSS, com foco em modularidade, responsividade e integração com frameworks modernos como Angular. Inclui componentes como alertas customizáveis e menu accordion, utilizando Shadow DOM, suporte a props e slots, variáveis globais com SCSS e integração via monorepo.',
    date: '11/06/2025',
    tags: ['Stencil.js', 'Web Components', 'SCSS', 'Angular 19'],
    repo: 'https://github.com/AlisonDelvechio/atom-ui-labs',
    images: [Project6_1, Project6_2, Project6_3, Project6_4, Project6_5],
  },
]

const currentIndex = ref(0)
const isVisible = ref(false)

onMounted(() => {
  const q = route.query.project
  const projectQuery = typeof q === 'string' ? q : Array.isArray(q) ? q[0] : ''

  // 1) tenta resolver por slug
  let index = projects.findIndex((p) => p.slug === projectQuery)

  // 2) fallback por título normalizado (compatibilidade com links antigos)
  if (index === -1 && projectQuery) {
    index = projects.findIndex((p) => normalize(p.title) === normalize(projectQuery))
  }

  if (index !== -1) currentIndex.value = index

  window.scrollTo({ top: 0, behavior: 'smooth' })
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const project = computed(() => projects[currentIndex.value])

function nextProject() {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
function prevProject() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
function goBack() {
  router.back()
}
</script>

<style scoped lang="scss">
@use '@/styles/variables' as vars;

.project-page {
  padding: 10rem 1rem;
  max-width: 800px;
  margin: auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  &.enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  .project-header {
    display: flex;
    align-items: center;
    gap: 1rem;

    .back-icon {
      cursor: pointer;
      font-size: 2rem;
      padding: 0.4rem;
      border-radius: 50%;
      border: 1px solid vars.$primary-color-light;
      color: vars.$primary-color-light;
      transition: background 0.3s ease, transform 0.3s ease;

      &:hover {
        background: vars.$primary-color-light;
        color: vars.$primary-color-dark;
        transform: scale(1.1);
      }

      body.dark & {
        border-color: vars.$primary-color-dark;
        color: vars.$primary-color-dark;
      }
    }

    h1 {
      font-size: 2rem;
      color: vars.$text-color-light;

      body.dark & {
        color: vars.$text-color-dark;
      }
    }
  }

  .description {
    margin: 1rem 0;
    color: vars.$text-color-light;

    body.dark & {
      color: vars.$text-color-dark;
    }
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: vars.$text-color-light;

    .icon {
      font-size: 1.2rem;
    }

    body.dark & {
      color: vars.$text-color-dark;
    }
  }

  .tags {
    margin-bottom: 1rem;

    .tag {
      display: inline-block;
      background: vars.$tag-bg-light;
      border: 1px solid vars.$tag-border-light;
      border-radius: 20px;
      padding: 0.3rem 0.8rem;
      font-size: 0.8rem;
      margin-right: 0.5rem;
      color: vars.$text-color-light;

      body.dark & {
        background: vars.$tag-bg-dark;
        border-color: vars.$tag-border-dark;
        color: vars.$text-color-dark;
      }
    }
  }

  .repo-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: vars.$primary-color-light;
    color: vars.$primary-color-dark;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    text-decoration: none;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: vars.$primary-color-light;
      transform: translateY(-2px);
    }
  }

  .images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;

    img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 2px 6px vars.$shadow-light;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .nav-buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 8px;
      background: vars.$primary-color-light;
      color: vars.$primary-color-dark;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        background: vars.$primary-color-light;
        transform: translateY(-2px);
        box-shadow: 0 4px 6px vars.$shadow-light;
      }
    }
  }
}
</style>