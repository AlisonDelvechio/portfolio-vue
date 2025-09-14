<template>
  <section class="projects-preview" id="projects">
    <h2>Projetos</h2>
    <p>Uma coleção de projetos nos quais trabalhei</p>
    <div class="grid">
      <ProjectCard
        v-for="(project, index) in orderedProjects"
        :key="project.slug"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :slug="project.slug"
        :delay="index * 100"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import Project1 from '@/assets/projects/Project_1.png'
import Project2 from '@/assets/projects/Project_2.png'
import Project3 from '@/assets/projects/Project_3.png'
import Project4 from '@/assets/projects/Project_4.png'
import Project5 from '@/assets/projects/Project_5.png'
import Project6 from '@/assets/projects/Project_6.png'

type PreviewProject = {
  order: number
  slug: string
  title: string
  description: string
  image: string
}

const projects: PreviewProject[] = [
  {
    order: 1,
    slug: 'atom-ui',
    title: 'Atom UI',
    description: 'Uma biblioteca de Web Components desenvolvida com Stencil, pensada para ser utilizada de forma agnóstica em qualquer framework, incluindo Angular.',
    image: Project6,
  },
  {
    order: 2,
    slug: 'star-blaster-game',
    title: 'Star Blaster Game',
    description: `Um jogo de navegador estilo Shoot'em up usando apenas tecnologias básicas.`,
    image: Project1,
  },
  {
    order: 3,
    slug: 'league-login',
    title: 'League of Legends login screen',
    description: 'Uma recriação da tela de login do League of Legends.',
    image: Project2,
  },
  {
    order: 4,
    slug: 'pokedex',
    title: 'Pokedex',
    description: 'Uma pokédex com funções de busca e listagem consumindo uma API.',
    image: Project3,
  },
  {
    order: 5,
    slug: 'inventectcc',
    title: 'InventecTCC',
    description: 'Programa de gerenciamento de patrimônio realizada para conclusão de curso e entregue à instituição.',
    image: Project4,
  },
  {
    order: 6,
    slug: 'first-portfolio',
    title: 'First Portfolio',
    description: 'Meu primeiro portfólio, feito sem usar frameworks, apenas em javascript, CSS e HTML.',
    image: Project5,
  }
]

const orderedProjects = projects.slice().sort((a, b) => a.order - b.order)
</script>

<style scoped lang="scss">
@use '@/styles/variables' as vars;

.projects-preview {
  padding: 4rem 10rem;
  text-align: center;
  margin: 4rem 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, transparent 60%);

  body.dark & {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, transparent 60%);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: vars.$text-color-light;

    body.dark & {
      color: vars.$text-color-dark;
    }
  }

  p {
    font-size: 1rem;
    color: vars.$text-muted-light;
    margin-bottom: 2rem;

    body.dark & {
      color: vars.$text-muted-dark;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>