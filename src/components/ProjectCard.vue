<template>
  <article class="card" :class="variant">
    <img
      :src="project.cover"
      alt=""
      class="thumb"
      loading="lazy"
      decoding="async"
      width="800"
      height="450"
    />
    <div class="content">
      <div class="head">
        <h3>
          <!-- O link do título cobre o card inteiro (::after); "Código" fica acima dele. -->
          <router-link :to="{ name: 'Project', params: { slug: project.slug } }" class="main-link">
            {{ variant === 'study' ? (project.shortTitle ?? project.title) : project.title }}
          </router-link>
        </h3>
        <span class="year label">{{ projectYear(project) }}</span>
      </div>
      <p>{{ project.summary }}</p>

      <ul v-if="variant === 'featured'" class="tag-list" aria-label="Tecnologias">
        <li v-for="tag in project.tags.slice(0, 4)" :key="tag" class="tag">{{ tag }}</li>
      </ul>
      <span v-else-if="project.kind" class="kind label">{{ project.kind }}</span>

      <div v-if="variant === 'featured'" class="links">
        <span class="text-link primary" aria-hidden="true">Detalhes</span>
        <a :href="project.repo" target="_blank" rel="noopener noreferrer" class="text-link code-link">
          Código<span class="sr-only"> de {{ project.title }} no GitHub (abre em nova aba)</span>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { projectYear, type Project } from '@/data/projects'

defineProps<{
  project: Project
  variant: 'featured' | 'study'
}>()
</script>

<style scoped lang="scss">
.card {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  border-radius: $radius;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
  // Mantém o atraso escalonado da entrada (v-reveal) junto com o hover.
  transition:
    border-color $t-fast ease,
    opacity $t-enter ease-out var(--reveal-delay, 0ms),
    transform $t-enter ease-out var(--reveal-delay, 0ms);

  &:hover,
  &:focus-within {
    border-color: var(--color-accent);
  }

  &.is-visible:hover {
    transform: translateY(-2px);
    transition-delay: 0ms;
    transition-duration: $t-fast;
  }
}

.thumb {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  object-fit: cover;
  object-position: top;
  border-bottom: 1px solid var(--color-line);
  background: var(--color-line);
}

.content {
  display: grid;
  gap: 0.625rem;
  align-content: start;
  padding: 1rem 1.125rem 1.125rem;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;

  h3 {
    min-width: 0;
    font-size: 1.05rem;
    font-weight: 600;
  }
}

.main-link {
  color: var(--color-fg);
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  &:focus-visible {
    outline: none;
  }
}

.card:has(.main-link:focus-visible) {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

.year {
  color: var(--color-text-muted);
  flex: none;
}

p {
  font-size: 0.925rem;
}

.links {
  display: flex;
  gap: 1.25rem;
  font-size: $fs-small;
  padding-top: 0.25rem;
}

.code-link {
  position: relative;
  z-index: 1;
}

.kind {
  justify-self: start;
  padding: 0 0.375rem;
  border-radius: 4px;
  border: 1px solid var(--color-line);
  color: var(--color-text-muted);
}

.card.study {
  .content {
    padding: 0.75rem 0.875rem 0.875rem;
    gap: 0.375rem;
  }

  .head h3 {
    font-size: 0.95rem;
  }

  p {
    font-size: 0.85rem;
  }
}
</style>
