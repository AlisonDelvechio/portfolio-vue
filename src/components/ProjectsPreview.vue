<template>
  <section class="projects-preview" id="projects">
    <h2>Projetos</h2>
    <p>Uma coleção de projetos nos quais trabalhei</p>
    <div class="grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.slug"
        :slug="project.slug"
        :title="project.title"
        :description="project.summary"
        :image="project.cover"
        :delay="(index % 3) * 100"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'
</script>

<style scoped lang="scss">
.projects-preview {
  padding: 4rem clamp(1rem, 6vw, 10rem);
  text-align: center;
  margin: 4rem 0;
  background: var(--bg-projects);

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }

  p {
    font-size: 1rem;
    color: var(--color-text-muted);
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>