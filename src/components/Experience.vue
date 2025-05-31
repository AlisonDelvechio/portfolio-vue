<template>
  <div class="timeline">
    <div
      v-for="(exp, index) in experiences"
      :key="index"
      ref="timelineItems"
      :class="['timeline-item', { visible: visibleItems[index] }]"
      :style="{ transitionDelay: `${index * 150}ms` }"
    >
      <div class="timeline-header">
        <h3 class="role">{{ exp.role }}</h3>
        <span class="date">{{ exp.date }}</span>
      </div>
      <div class="timeline-content">
        <div class="info">
          <div class="location">
            <Icon :icon="exp.icon" />
            <span>{{ exp.location }}</span>
          </div>
          <p class="description">{{ exp.description }}</p>
          <div class="tech-tags">
            <span v-for="(tech, i) in exp.technologies" :key="i" class="tag">
              {{ tech }}
            </span>
          </div>
        </div>
        <img :src="exp.logo" alt="logo" class="logo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'

interface Experience {
  role: string
  date: string
  location: string
  icon: string
  description: string
  logo: string
  technologies: string[]
}

defineProps<{
  experiences: Experience[]
}>()

const timelineItems = ref<(HTMLElement | null)[]>([])
const visibleItems = ref<boolean[]>([])

onMounted(() => {
  timelineItems.value.forEach((el, index) => {
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visibleItems.value[index] = true
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
  })
})
</script>

<style scoped lang="scss">
@use '@/styles/variables' as vars;

.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-item {
  border-left: 3px solid vars.$accent-color;
  padding-left: 1.5rem;
  position: relative;
  max-width: 600px; 

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    left: -0.6rem;
    top: -0.8rem;
    width: 1rem;
    height: 1rem;
    background: vars.$accent-color;
    border: 2px solid vars.$primary-color-dark;
    border-radius: 50%;
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    .role {
      font-weight: 600;
      font-size: 1.25rem;
      color: vars.$text-color-light;

      body.dark & {
        color: vars.$text-color-dark;
      }
    }

    .date {
      font-size: 1.1rem; 
      color: vars.$primary-color-dark;

      body.light & {
        color: vars.$primary-color-light;
      }
    }
  }

  .timeline-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    background: rgba(0, 0, 0, 0.05);
    padding: 1rem;
    border-radius: 12px;

    @media(min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .location {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        color: vars.$text-color-light;

        body.dark & {
          color: vars.$text-color-dark;
        }
      }

      .description {
        color: #555;
        text-align: left;

        body.dark & {
          color: #ccc;
        }
      }

      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tag {
          background: vars.$accent-color;
          color: vars.$primary-color-dark;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.75rem;
        }
      }
    }

    .logo {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
  }
}

@media (max-width: 768px) {
  .timeline-content {
    .logo {
      display: none; 
    }
  }
}
</style>