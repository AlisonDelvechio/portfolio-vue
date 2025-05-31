<template>
  <section class="projects-preview" id="projects">
    <h2>Projetos</h2>
    <p>A collection of projects I've worked on.</p>
    <div class="grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :delay="index * 100"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import Project1 from '@/assets/projects/Screenshot_2.png';
import Project2 from '@/assets/projects/Screenshot_3.png';
import Project3 from '@/assets/projects/Screenshot_4.png';
import Project4 from '@/assets/projects/Screenshot_5.png';

const projects = [
  {
    title: 'Star Blaster Game',
    description: `A Shoot'em up style browser game using only basic technologies`,
    image: Project1
  },
  {
    title: 'League of Legends login screen',
    description: 'A recreation of the league of legends login screen',
    image: Project2
  },
  {
    title: 'Pokedex',
    description: 'The project is about creating a pokedex with search and listing functions consuming an API.',
    image: Project3
  },
  {
    title: 'Pokedex',
    description: 'The project is about creating a pokedex with search and listing functions consuming an API.',
    image: Project4
  }
];
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
    color: #666;

    body.dark & {
      color: #aaa;
    }
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 2rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
}

</style>