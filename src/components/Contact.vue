<template>
  <section id="contato" class="contact" ref="contactSection">
    <h2 :class="{ 'fade-up': animate }">Contato</h2>
    <p :class="['fade-up', 'delay-1', { 'fade-up': animate }]">
      Quer conversar ou colaborar? Me mande um e-mail ou me encontre nas redes:
    </p>

    <div :class="['contact-links', 'fade-up', 'delay-2', { 'fade-up': animate }]">
      <a href="mailto:alison.dev@email.com" class="contact-link">
        <Icon icon="mdi:email-outline" width="24" />
        <span>Email</span>
      </a>

      <a href="#" target="_blank" class="contact-link">
        <Icon icon="mdi:github" width="24" />
        <span>GitHub</span>
      </a>

      <a href="#" target="_blank" class="contact-link">
        <Icon icon="mdi:linkedin" width="24" />
        <span>LinkedIn</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const contactSection = ref<HTMLElement | null>(null)
const animate = ref(false)

onMounted(() => {
  if (!contactSection.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animate.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )

  observer.observe(contactSection.value)
})
</script>

<style scoped lang="scss">
.contact {
  position: relative;
  padding: 4rem 2rem;
  text-align: center;
  background-image:
    url('@/assets/diagmonds-dark.png'),
    linear-gradient(to right, rgba(18, 18, 18, 0.85), rgba(18, 18, 18, 0.6));
  background-repeat: repeat, no-repeat;
  background-size: 150px 150px, cover;
  background-position: center center, center;
  background-blend-mode: overlay;

  body.light & {
    background-image:
      url('@/assets/diagmonds-light.png'),
      linear-gradient(to bottom, rgba(220,220,220,1) 0%, rgba(220,220,220,0.4) 70%, rgba(220,220,220,0) 100%);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 500px;
    margin: 0 auto 2rem;

    body.dark & {
      color: #aaa;
    }
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
      color: #333;
      text-decoration: none;
      transition: color 0.3s, transform 0.3s;

      body.dark & {
        color: #eee;
      }

      &:hover {
        color: #007bff;
        transform: translateY(-3px);
      }
    }
  }
}

.fade-up {
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeLeftToCenter 1s ease forwards;
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
@media (max-width: 640px) {
  .contact-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>