<template>
  <section class="expertise">
    <h2 class="expertise-title">Minha expertise</h2>

    <div class="expertise-grid">
      <div class="expertise-item">
        <div class="icon-title">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M4 5h16v10H4z"></path>
            <path d="M2 19h20v2H2z"></path>
          </svg>
          <span>Software Development</span>
        </div>
        <p>Desenvolvimento de aplicações web modernas e eficientes.</p>
      </div>

      <div class="expertise-item">
        <div class="icon-title">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
            <path d="M8 12h8"></path>
            <path d="M12 8v8"></path>
          </svg>
          <span>UI/UX Design</span>
        </div>
        <p>Criação de interfaces intuitivas e experiência do usuário otimizada.</p>
      </div>

      <div class="expertise-item">
        <div class="icon-title">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M16 3v2H8V3H5v18h14V3zM8 7h8v2H8V7zm0 4h8v2H8v-2z"></path>
          </svg>
          <span>Front-end Engineering</span>
        </div>
        <p>Desenvolvimento front-end com foco em performance e manutenibilidade.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as vars;

.expertise {
  padding: 4rem 10rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: vars.$primary-color-dark;

    body.light & {
      color: vars.$primary-color-light;
    }

    margin-bottom: 3rem;
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
    background-color: vars.$secondary-color-dark;

    body.light & {
      background-color: vars.$secondary-color-light;
    }
  }

  .expertise-item {
    border: 1px solid vars.$primary-color-dark;

    body.light & {
      border-color: vars.$primary-color-light;
    }

    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;

    opacity: 0;
    transform: translateY(-30px);
    animation: fall-in 0.8s ease forwards;

    &:nth-child(1) {
      animation-delay: 0.2s;
    }
    &:nth-child(2) {
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }

    .icon-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.2rem;
      color: vars.$primary-color-dark;

      body.light & {
        color: vars.$primary-color-light;
      }

      margin-bottom: 1rem;

      svg {
        fill: vars.$primary-color-dark;

        body.light & {
          fill: vars.$primary-color-light;
        }

        width: 32px;
        height: 32px;
      }
    }

    p {
      color: vars.$text-color-dark;

      body.light & {
        color: vars.$text-color-light;
      }

      font-size: 1rem;
      text-align: center;
    }
  }

  .expertise-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease forwards;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;

    .expertise-grid {
      grid-template-columns: 1fr;
    }
  }

  @keyframes fall-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>