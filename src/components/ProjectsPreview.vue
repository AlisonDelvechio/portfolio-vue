<template>
  <section class="projects-preview">
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
.projects-preview {
  padding: 4rem 10rem;
  text-align: center;
  margin: 4rem 0;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 colunas fixas no desktop
    gap: 2rem;
    padding: 0 2rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr); // 2 colunas em tablet
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr; // 1 coluna no mobile
    }
  }
}
</style>