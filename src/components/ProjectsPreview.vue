<template>
  <section id="projects" class="section container" aria-labelledby="projetos-title">
    <h2 id="projetos-title" v-reveal class="section-title">Projetos</h2>

    <div class="group">
      <h3 v-reveal class="group-title label">Em destaque</h3>
      <div class="featured">
        <ProjectCard
          v-for="(project, i) in featuredProjects"
          :key="project.slug"
          v-reveal="i * 60"
          :project="project"
          variant="featured"
        />
      </div>
    </div>

    <div class="group">
      <h3 v-reveal class="group-title label">Estudos e primeiros projetos</h3>
      <div class="studies">
        <ProjectCard
          v-for="(project, i) in studyProjects"
          :key="project.slug"
          v-reveal="Math.min(i, 5) * 60"
          :project="project"
          variant="study"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { featuredProjects, studyProjects } from '@/data/projects'
</script>

<style scoped lang="scss">
.group {
  display: grid;
  gap: 1rem;

  & + & {
    margin-top: 2.5rem;
  }
}

.group-title {
  color: var(--color-text-muted);
  text-transform: uppercase;
  font-weight: 400;
}

.featured {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 1.25rem;
}

.studies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 170px), 1fr));
  gap: 1rem;
}
</style>
