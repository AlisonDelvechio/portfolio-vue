<template>
  <section class="projects-preview" id="projects">
    <h2>Projetos</h2>
    <p>Uma coleção de projetos nos quais trabalhei</p>
    <div class="grid">
      <ProjectCard
        v-for="(project, index) in orderedProjects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :alt="`Imagem do projeto ${project.title}`"
        :delay="index * 100"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import Project1 from '@/assets/projects/Project_1.png';
import Project2 from '@/assets/projects/Project_2.png';
import Project3 from '@/assets/projects/Project_3.png';
import Project4 from '@/assets/projects/Project_4.png';
import Project5 from '@/assets/projects/Project_5.png';

const projects = [
  {
    order: 1,
    title: 'Star Blaster Game',
    description: `Um jogo de navegador estilo Shoot'em up usando apenas tecnologias básicas`,
    image: Project1
  },
  {
    order: 2,
    title: 'League of Legends login screen',
    description: 'Uma recriação da tela de login do League of Legends',
    image: Project2
  },
  {
    order: 3,
    title: 'Pokedex',
    description: 'Uma pokédex com funções de busca e listagem consumindo uma API.',
    image: Project3
  },
  {
    order: 4,
    title: 'InventecTCC',
    description: 'Programa de gerenciamento de patrimônio realizada para conclusão de curso e entregue à instituição',
    image: Project4
  },
  {
    order: 5,
    title: 'First Portfolio',
    description: 'Meu primeiro portfólio, feito sem usar frameworks, apenas em javascript, CSS e HTML',
    image: Project5
  }
];

const orderedProjects = projects.slice().sort((a, b) => a.order - b.order);
</script>

<style scoped lang="scss">
@use '@/styles/variables' as vars;

.projects-preview {
  padding: 4rem 10rem;
  text-align: center;
  margin: 4rem 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1) 0%,
    transparent 60%
  );

  body.dark & {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5) 0%,
      transparent 60%
    );
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
    gap: 2rem; // mantém espaçamento entre os cards

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>