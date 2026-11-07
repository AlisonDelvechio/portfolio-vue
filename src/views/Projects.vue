<template>
  <article v-if="project" :key="project.slug" class="project-page">
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

    <ul class="tags" aria-label="Tecnologias">
      <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
    </ul>

    <div class="links">
      <a :href="project.repo" target="_blank" rel="noopener noreferrer" class="repo-btn">
        <Icon icon="mdi:github" class="icon" aria-hidden="true" />
        Ver repositório
        <span class="sr-only">(abre em nova aba)</span>
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="repo-btn"
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
  padding: 10rem 1rem;
  max-width: 800px;
  margin: auto;
  animation: page-enter 0.8s ease both;

  .project-header {
    display: flex;
    align-items: center;
    gap: 1rem;

    .back-link {
      display: inline-flex;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .back-icon {
      cursor: pointer;
      font-size: 2rem;
      padding: 0.4rem;
      border-radius: 50%;
      border: 1px solid var(--color-fg);
      color: var(--color-fg);
      transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;

      &:hover {
        background: var(--color-button-bg);
        color: var(--color-button-fg);
        transform: scale(1.1);
      }
    }

    h1 {
      font-size: 2rem;
      color: var(--color-text);
    }
  }

  .description {
    margin: 1rem 0;
    color: var(--color-text);
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: var(--color-text);

    .icon {
      font-size: 1.2rem;
    }
  }

  .tags {
    margin-bottom: 1rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .tag {
      display: inline-block;
      background: var(--color-tag-bg);
      border: 1px solid var(--color-tag-border);
      border-radius: 20px;
      padding: 0.3rem 0.8rem;
      font-size: 0.8rem;
      color: var(--color-text);
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .repo-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--color-button-bg);
    color: var(--color-button-fg);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    text-decoration: none;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;

    img {
      width: auto;
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .nav-buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .nav-btn {
      display: inline-flex;
      text-decoration: none;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 8px;
      background: var(--color-button-bg);
      color: var(--color-button-fg);
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

@keyframes page-enter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
