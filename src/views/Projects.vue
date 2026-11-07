<template>
  <article v-if="project" :key="project.slug" v-reveal class="project-page container">
    <div class="project-header">
      <router-link
        :to="{ path: '/', hash: '#projects' }"
        class="back-link"
        aria-label="Voltar para a lista de projetos"
      >
        <Icon icon="mdi:arrow-left" class="back-icon" aria-hidden="true" />
      </router-link>
      <h1>{{ project.title }}</h1>
    </div>

    <p class="description">{{ project.description }}</p>

    <div class="meta">
      <Icon icon="mdi:calendar" class="icon" aria-hidden="true" />
      <time :datetime="project.date">{{ formatProjectDate(project.date) }}</time>
    </div>

    <ul class="tag-list" aria-label="Tecnologias">
      <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
    </ul>

    <div class="links">
      <a :href="project.repo" target="_blank" rel="noopener noreferrer" class="btn primary">
        <Icon icon="mdi:github" class="icon" aria-hidden="true" />
        Ver repositório
        <span class="sr-only">(abre em nova aba)</span>
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="btn"
      >
        <Icon icon="mdi:open-in-new" class="icon" aria-hidden="true" />
        Ver site
        <span class="sr-only">(abre em nova aba)</span>
      </a>
    </div>

    <div class="images">
      <img
        v-for="(image, index) in project.images"
        :key="image"
        :src="image"
        :alt="`${project.title}: captura de tela ${index + 1} de ${project.images.length}`"
        :loading="index === 0 ? 'eager' : 'lazy'"
        decoding="async"
      />
    </div>

    <nav class="nav-buttons" aria-label="Outros projetos">
      <router-link
        v-if="prev"
        :to="{ name: 'Project', params: { slug: prev.slug } }"
        class="nav-btn"
        :aria-label="`Projeto anterior: ${prev.title}`"
      >
        <Icon icon="mdi:arrow-left-bold" aria-hidden="true" /> Anterior
      </router-link>
      <span v-else></span>
      <router-link
        v-if="next"
        :to="{ name: 'Project', params: { slug: next.slug } }"
        class="nav-btn"
        :aria-label="`Próximo projeto: ${next.title}`"
      >
        Próximo <Icon icon="mdi:arrow-right-bold" aria-hidden="true" />
      </router-link>
    </nav>
  </article>
  <ScrollTopButton />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import ScrollTopButton from '@/components/ScrollTopButton.vue'
import { projects, findProjectIndex, formatProjectDate } from '@/data/projects'

const route = useRoute()

// O slug vem da URL (/projects/:slug), então cada projeto tem um link próprio.
const index = computed(() => findProjectIndex(String(route.params.slug)))
const project = computed(() => projects[index.value])
const prev = computed(() => projects[index.value - 1])
const next = computed(() => projects[index.value + 1])
</script>

<style scoped lang="scss">
.project-page {
  max-width: 860px;
  padding-top: calc(#{$header-height} + 3rem);
  padding-bottom: 5rem;
  display: grid;
  gap: 1.25rem;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: $fs-h2;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
}

.back-link {
  display: inline-flex;
  flex-shrink: 0;
  border-radius: 50%;
}

.back-icon {
  font-size: 2.25rem;
  padding: 0.45rem;
  border-radius: 50%;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  color: var(--color-fg);
  transition: border-color $t-fast ease;

  &:hover {
    border-color: var(--color-accent);
  }
}

.description {
  max-width: 68ch;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: $font-code;
  font-size: $fs-small;
  color: var(--color-text-muted);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.25rem;
}

// Botões no estilo do atom-button: principal preenchido, secundário com borda.
.btn,
.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  border-radius: $radius-sm;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  color: var(--color-fg);
  font-weight: 600;
  font-size: $fs-small;
  text-decoration: none;
  transition: border-color $t-fast ease, opacity $t-fast ease;

  &:hover {
    border-color: var(--color-accent);
  }
}

.btn.primary {
  background: var(--color-accent-fill);
  border-color: var(--color-accent-fill);
  color: var(--color-on-accent);

  &:hover {
    opacity: 0.88;
  }
}

.images {
  display: grid;
  justify-items: center;
  gap: 1.25rem;
  margin-top: 1rem;

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    border-radius: $radius;
    border: 1px solid var(--color-line);
    box-shadow: var(--shadow-card);
  }
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
