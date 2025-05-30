<template>
  <div class="timeline">
    <transition-group name="fade-slide" tag="div">
      <div
        v-for="(exp, index) in experiences"
        :key="index"
        class="timeline-item"
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
              <span
                v-for="(tech, i) in exp.technologies"
                :key="i"
                class="tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <img :src="exp.logo" alt="logo" class="logo" />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

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
</script>

<style scoped lang="scss">
.timeline {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: flex-start;

  .timeline-item {
    border-left: 3px solid #3b82f6;
    padding-left: 1.5rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: -0.7rem;
      top: -0.8rem;
      width: 1rem;
      height: 1rem;
      background: #3b82f6;
      border: 2px solid #fff;
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
      }

      .date {
        font-size: 0.9rem;
        color: #777;
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
        }

        .description {
          color: #555;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          .tag {
            background: #3b82f6;
            color: #fff;
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
}

/* Transition Animations */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>