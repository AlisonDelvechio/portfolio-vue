<template>
  <div
    ref="cardRef"
    :class="['project-card', { visible: isVisible }]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <div class="image-container">
      <img :src="image" :alt="title" class="project-image" />
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineProps<{
  title: string
  description: string
  image: string
  delay: number
}>();

const cardRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();  // Remove o observer depois
      }
    },
    { threshold: 0.1 }
  );

  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});
</script>

<style scoped lang="scss">
@use '@/styles/variables' as vars;

.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  background-color: vars.$secondary-color-light; 
  border: 1px solid #e0e0e0;
  cursor: pointer;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  

  &:hover {
    transform: translateY(-8px);

    .project-image {
      transform: scale(1.10);
      transition: transform 0.4s ease;
    }
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .image-container {
    overflow: hidden;
  }

  .project-image {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    transition: transform 0.3s ease;
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