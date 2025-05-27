<template>
  <section class="projects">
    <h2>My Work</h2>
    <p>A collection of projects I've worked on.</p>
    <div class="grid">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="index"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

const projects = [
  {
    title: 'Domposer',
    description: 'Website builder with drag & drop interface.',
    image: 'https://via.placeholder.com/400x200',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Bay.js',
    description: 'Lightweight library for web-components.',
    image: 'https://via.placeholder.com/400x200',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Cookiemunch',
    description: 'Customizable cookie consent plugin.',
    image: 'https://via.placeholder.com/400x200',
    liveUrl: '#',
    repoUrl: '#'
  }
]
</script>

<style scoped lang="scss">
.projects {
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

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
  }
}
</style>