<template>
  <section id="projects">
    <h2>Projetos</h2>
    <div class="projects-grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';

const projects = [
  {
    image: '/assets/projetos/projeto1.png',
    title: 'Projeto 1',
    description: 'Descrição do Projeto 1',
    codeLink: 'https://github.com/seuusuario/projeto1',
    liveLink: 'https://projeto1.vercel.app'
  },
  {
    image: '/assets/projetos/projeto2.png',
    title: 'Projeto 2',
    description: 'Descrição do Projeto 2',
    codeLink: 'https://github.com/seuusuario/projeto2',
    liveLink: 'https://projeto2.vercel.app'
  }
];
</script>

<style lang="scss" scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
</style>