<template>
  <router-link
    ref="cardRef"
    :to="{ name: 'Project', params: { slug } }"
    :class="['project-card', { visible: isVisible }]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <div class="image-container">
      <img
        :src="image"
        alt=""
        class="project-image"
        loading="lazy"
        decoding="async"
        width="800"
        height="390"
      />
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

defineProps<{
  slug: string
  title: string
  description: string
  image: string
  delay: number
}>()

const cardRef = ref<ComponentPublicInstance | null>(null)
const cardEl = computed(() => (cardRef.value?.$el as HTMLElement | undefined) ?? null)
const isVisible = ref(false)
useIntersectionObserver(cardEl, () => {
  isVisible.value = true
}, 0.1)
</script>

<style scoped lang="scss">
.project-card {
  display: flex;
  text-decoration: none;
  text-align: left;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-card);
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: transform 0.6s ease, opacity 0.6s ease;

  background-color: var(--color-card-bg);
  border: 1px solid var(--color-card-border);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-6px);
    transition: transform 0.2s ease;

    .project-image {
      transform: scale(1.1);
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
    border-top: 1px solid var(--color-card-divider);

    .project-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--color-fg);
    }

    .project-description {
      font-size: 1rem;
      color: var(--color-text);
    }
  }
}
</style>