<template>
  <div
    ref="cardRef"
    :class="['project-card', { visible: isVisible }]"
    :style="{ transitionDelay: `${delay}ms` }"
    role="button"
    tabindex="0"
    :aria-label="`Abrir detalhes do projeto ${title}`"
    @click="goToProject"
    @keydown.enter.prevent="goToProject"
    @keydown.space.prevent="goToProject"
  >
    <div class="image-container">
      <img :src="image" :alt="`Imagem do projeto ${title}`" class="project-image" />
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const props = defineProps<{
  title: string
  description: string
  image: string
  delay: number
}>()

const router = useRouter()

function goToProject() {
  router.push({ name: 'Projects', query: { project: props.title } })
}

const cardRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(cardRef, () => {
  isVisible.value = true
}, 0.1)
</script>

<style scoped lang="scss">
@use '@/styles/variables' as vars;

.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: 
    transform 0.6s ease,
    opacity 0.6s ease;

  background-color: vars.$secondary-color-light; 
  border: 1px solid #e0e0e0;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-8px);
    transition: transform 0.2s ease;

    .project-image {
      transform: scale(1.10);
    }
  }

  .image-container {
    overflow: hidden;

    .project-image {
      width: 100%;
      height: 15rem;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }

  .project-info {
    padding: 1rem;
    border-top: 1px solid #ccc;

    .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: vars.$primary-color-light;
    }

    .project-description {
      font-size: 1rem;
      color: vars.$text-color-light;
    }
  }

  // DARK MODE
  body.dark & {
    background-color: vars.$secondary-color-dark;
    border: 1px solid #333;

    .project-info {
      border-top: 1px solid #444;

      .project-title {
        color: vars.$primary-color-dark;
      }

      .project-description {
        color: vars.$text-color-dark;
      }
    }
  }
}
</style>