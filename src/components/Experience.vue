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
            <Icon icon="mdi:office-building" aria-hidden="true" />
            <span>{{ exp.location }}</span>
          </div>

          <p class="description">{{ exp.description }}</p>

          <div class="tech-tags">
            <span
              v-for="(tech, i) in exp.technologies"
              :key="i"
              class="tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="logos">
          <img
            v-for="(logo, i) in exp.logos"
            :key="i"
            :src="logo.src"
            :alt="logo.alt"
            class="logo"
            loading="lazy"
            width="50"
            height="50"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Experience } from '@/data/experiences'

defineProps<{
  experiences: Experience[]
}>()

const timelineItems = ref<(HTMLElement | null)[]>([])
const visibleItems = ref<boolean[]>([])

let observer: IntersectionObserver | null = null

onMounted(() => {
  // Um único observer para todos os itens da linha do tempo.
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const index = timelineItems.value.indexOf(entry.target as HTMLElement)
        if (index !== -1) visibleItems.value[index] = true
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.1 }
  )
  timelineItems.value.forEach((el) => el && observer?.observe(el))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped lang="scss">
.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-item {
  border-left: 3px solid var(--color-accent);
  padding-left: 1.5rem;
  position: relative;
  width: 100%;
  max-width: 760px;
  padding-bottom: 2.5rem;

  &:last-child {
    padding-bottom: 0;
  }

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
    background: var(--color-accent);
    border: 2px solid var(--color-on-accent);
    border-radius: 50%;
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    margin-left: 1rem;

    .role {
      font-weight: 600;
      font-size: 1.25rem;
      color: var(--color-text);
    }

    .date {
      font-size: 1.1rem;
      color: var(--color-fg);
    }
  }

  .timeline-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    background: var(--color-surface-subtle);
    padding: 1rem;
    border-radius: 12px;

    @media(min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .info {
      flex: 1;
      min-width: 0;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .location {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        color: var(--color-text);
      }

      .description {
        color: var(--color-text-soft);
        text-align: left;
      }

      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tag {
          background: var(--color-accent);
          color: var(--color-on-accent);
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.75rem;
        }
      }
    }

    // Logos em "fichas" do mesmo tamanho, que não encolhem nem saem do card.
    .logos {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .logo {
        width: 52px;
        height: 52px;
        padding: 6px;
        object-fit: contain;
        background: #fff;
        border: 1px solid var(--color-card-border);
        border-radius: 10px;
      }
    }
  }
}

@media (max-width: 768px) {
  .timeline-item {
    .timeline-header {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 0;
    }

    .timeline-content .logos .logo {
      width: 44px;
      height: 44px;
    }
  }
}
</style>