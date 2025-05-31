<template>
  <section class="project-page" :class="{ 'enter-active': isVisible }">
    <div class="project-header">
      <Icon icon="mdi:arrow-left" class="back-icon" @click="goBack" />
      <h1>{{ project.title }}</h1>
    </div>
    
    <p class="description">{{ project.description }}</p>
    
    <div class="meta">
      <Icon icon="mdi:calendar" class="icon" />
      <span>{{ project.date }}</span>
    </div>
    
    <div class="tags">
      <span v-for="(tag, index) in project.tags" :key="index" class="tag">{{ tag }}</span>
    </div>

    <a :href="project.repo" target="_blank" class="repo-btn">
      <Icon icon="mdi:github" class="icon" />
      Ver repositório
    </a>

    <div class="images">
      <img 
        v-for="(image, index) in project.images" 
        :key="index" 
        :src="image" 
        :alt="`Imagem ${index + 1}`" 
      />
    </div>

    <div class="nav-buttons">
      <button @click="prevProject" :disabled="currentIndex === 0">
        <Icon icon="mdi:arrow-left-bold" /> Anterior
      </button>
      <button @click="nextProject" :disabled="currentIndex === projects.length - 1">
        Próximo <Icon icon="mdi:arrow-right-bold" />
      </button>
    </div>
  </section>
  <ScrollTopButton />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import ScrollTopButton from '../components/ScrollTopButton.vue';

import Project1_1 from '@/assets/projects/Screenshot_1.png';
import Project1_2 from '@/assets/projects/Screenshot_2.png';
import Project1_3 from '@/assets/projects/Screenshot_3.png';

import Project2_1 from '@/assets/projects/Screenshot_3.png';
import Project2_2 from '@/assets/projects/Screenshot_3.png';

import Project3_1 from '@/assets/projects/Screenshot_4.png';
import Project3_2 from '@/assets/projects/Screenshot_4.png';
import Project3_3 from '@/assets/projects/Screenshot_4.png';

const router = useRouter();
const route = useRoute();

const projects = [
  {
    title: 'Star Blaster Game',
    description: 'A Shoot\'em up style browser game using only basic technologies.',
    date: '2025-05-30',
    tags: ['JavaScript', 'Game', 'Canvas'],
    repo: 'https://github.com/seuuser/star-blaster',
    images: [Project1_1, Project1_2, Project1_3]
  },
  {
    title: 'League of Legends Login',
    description: 'A recreation of the League of Legends login screen.',
    date: '2025-05-20',
    tags: ['Vue', 'CSS'],
    repo: 'https://github.com/seuuser/league-login',
    images: [Project2_1, Project2_2]
  },
  {
    title: 'Pokedex',
    description: 'A Pokedex app with search and listing functions consuming an API.',
    date: '2025-05-15',
    tags: ['Vue', 'API', 'Pokedex'],
    repo: 'https://github.com/seuuser/pokedex',
    images: [Project3_1, Project3_2, Project3_3]
  }
];

const currentIndex = ref(0);
const isVisible = ref(false);

onMounted(() => {
  const projectTitle = route.query.project;
  const index = projects.findIndex(p => p.title === projectTitle);
  if (index !== -1) currentIndex.value = index;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});

const project = computed(() => projects[currentIndex.value]);

function nextProject() {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function prevProject() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goBack() {
  router.back();
}
</script>

<style scoped lang="scss">
@use '@/styles/variables' as vars;

.project-page {
  padding: 10rem 1rem;
  max-width: 800px;
  margin: auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  &.enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  .project-header {
    display: flex;
    align-items: center;
    gap: 1rem;

    .back-icon {
      cursor: pointer;
      font-size: 2rem;
      padding: 0.4rem;
      border-radius: 50%;
      border: 1px solid vars.$primary-color-light;
      color: vars.$primary-color-light;
      transition: background 0.3s ease, transform 0.3s ease;

      &:hover {
        background: vars.$primary-color-light;
        color: $primary-color-dark;
        transform: scale(1.1);
      }

      body.dark & {
        border-color: vars.$primary-color-dark; 
        color: vars.$primary-color-dark; 
      }
    }

    h1 {
      font-size: 2rem;
      color: vars.$text-color-light;

      body.dark & {
        color: vars.$text-color-dark;
      }
    }
  }

  .description {
    margin: 1rem 0;
    color: vars.$text-color-light;

    body.dark & {
      color: vars.$text-color-dark;
    }
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: vars.$text-color-light;

    .icon {
      font-size: 1.2rem;
    }

    body.dark & {
      color: vars.$text-color-dark;
    }
  }

  .tags {
    margin-bottom: 1rem;

    .tag {
      display: inline-block;
      background: rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      padding: 0.3rem 0.8rem;
      font-size: 0.8rem;
      margin-right: 0.5rem;
      color: vars.$text-color-light;

      body.dark & {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);
        color: vars.$text-color-dark;
      }
    }
  }

  .repo-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: vars.$primary-color-light;
    color: $primary-color-dark;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    text-decoration: none;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: vars.$primary-color-light; 
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
      width: 100%;
      max-width: 600px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
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

    button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 8px;
      background: vars.$primary-color-light;
      color: $primary-color-dark;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        background: vars.$primary-color-light;
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>