<template>
  <section id="contato" class="contact" ref="contactSection">
    <h2 :class="['fade-up', { visible: animate }]">Contato</h2>
    <p :class="['fade-up', 'delay-1', { visible: animate }]">
      Quer conversar ou colaborar? Me mande um e-mail ou me encontre nas redes:
    </p>

    <div :class="['contact-links', 'fade-up', 'delay-2', { visible: animate }]">
      <a href="mailto:alisondelvechio@outlook.com" class="contact-link">
        <Icon icon="mdi:email-outline" width="24" />
        <span>Email</span>
      </a>

      <a href="https://github.com/AlisonDelvechio" target="_blank" rel="noopener noreferrer" class="contact-link">
        <Icon icon="mdi:github" width="24" />
        <span>GitHub</span>
        <span class="sr-only">(abre em nova aba)</span>
      </a>

      <a href="https://www.linkedin.com/in/alison-delvechio-64094b172/" target="_blank" rel="noopener noreferrer" class="contact-link">
        <Icon icon="mdi:linkedin" width="24" />
        <span>LinkedIn</span>
        <span class="sr-only">(abre em nova aba)</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const contactSection = ref<HTMLElement | null>(null)
const animate = ref(false)

useIntersectionObserver(contactSection, () => {
  animate.value = true
}, 0.1)
</script>

<style scoped lang="scss">
.contact {
  position: relative;
  padding: 4rem 2rem;
  text-align: center;
  background-image: var(--bg-pattern), var(--bg-contact);
  background-repeat: repeat, no-repeat;
  background-size: 150px 150px, cover;
  background-position: center center, center;
  background-blend-mode: overlay;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  p {
    font-size: 1.1rem;
    color: var(--color-fg);
    max-width: 500px;
    margin: 0 auto 2rem;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    .contact-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      color: var(--color-fg);
      text-decoration: none;
      transition: color 0.3s, transform 0.3s;

      &:hover {
        color: var(--color-accent);
        transform: translateY(-3px);
      }
    }
  }
}

// A animação só começa quando a seção entra na tela (classe .visible).
.fade-up {
  opacity: 0;
  transform: translateX(-50px);

  &.visible {
    animation: fadeLeftToCenter 1s ease forwards;
  }
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }

@keyframes fadeLeftToCenter {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsivo */
@media (max-width: 768px) {
  .contact-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>