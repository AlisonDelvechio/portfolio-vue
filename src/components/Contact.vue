<template>
  <section id="contato" class="contact">
    <h2 class="fade-up">Contato</h2>
    <p class="fade-up delay-1">
      Quer conversar ou colaborar? Me mande um e-mail ou me encontre nas redes:
    </p>

    <div class="contact-links fade-up delay-2">
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
import { Icon } from '@iconify/vue';
</script>

<style scoped lang="scss">
.contact {
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(to right, rgba(0,0,0,0.05) 0%, transparent 70%);
  border-radius: 1rem;

  body.dark & {
    background: linear-gradient(to right, rgba(255,255,255,0.05) 0%, transparent 70%);
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

/* Animations */
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s ease forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
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