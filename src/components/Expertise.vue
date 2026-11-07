<template>
  <section class="expertise" id="expertise">
    <h2 class="expertise-title">Minha expertise</h2>

    <div class="expertise-grid">
      <div class="expertise-item">
        <div class="icon-title">
          <Icon icon="mdi:code-tags" width="32" height="32" />
          <span>Software Development</span>
        </div>
        <h3 class="code-description">
          | Desenvolvimento de aplicações web modernas, tipadas e testadas, utilizando paradigmas de <strong>POO</strong>. |
        </h3>
        <div class="specialties">
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Supabase</span>
        </div>
      </div>

      <div class="expertise-item">
        <div class="icon-title">
          <Icon icon="iconoir:component" width="32" height="32" />
          <span>Design System</span>
        </div>
        <h3 class="code-description">
          | Desenvolvimento de <strong>Design Systems</strong> escaláveis e acessíveis. Integração entre times de design e desenvolvimento |
        </h3>
        <div class="specialties">
          <span>Stencil</span>
          <span>Storybook</span>
          <span>Zeroheight</span>
          <span>Figma</span>
        </div>
      </div>

      <div class="expertise-item">
        <div class="icon-title">
          <Icon icon="mdi:monitor-cellphone" width="32" height="32" />
          <span>Front-end Engineering</span>
        </div>
        <h3 class="code-description">
          | Apaixonado por UI/UX. Mais de <strong>{{ years }} anos</strong> de experiência em desenvolvimento com frameworks. |
        </h3>
        <div class="specialties">
          <span>HTML</span>
          <span>CSS/Sass</span>
          <span>Vue.js</span>
          <span>Angular</span>
          <span>Ionic</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { CAREER_START_YEAR } from '@/data/experiences'

const years = new Date().getFullYear() - CAREER_START_YEAR
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as vars;

.expertise {
  padding: 0.1rem clamp(1rem, 6vw, 10rem);
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: var(--color-fg);
    margin-bottom: 3rem;
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .expertise-item {
    position: relative;
    border: 1px solid var(--color-fg);
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

    // Linha à esquerda
    &::before {
      content: "";
      position: absolute;
      left: 6px;
      top: 8px;
      width: 4px;
      height: 90%;
      background-color: var(--color-accent);
    }

    .icon-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.2rem;
      color: var(--color-fg);
      font-weight: bold;
      margin-bottom: 1rem;

      svg {
        fill: var(--color-fg);
        width: 32px;
        height: 32px;
      }
    }

    p {
      color: var(--color-text);
      font-size: 1rem;
      text-align: center;
    }
  }

  .code-description {
    font-family: vars.$font-code;
    font-size: 1rem;
    background-color: var(--color-code-bg);
    color: var(--color-code-fg);
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    white-space: pre-wrap; 
    position: relative;

    strong {
      color: var(--color-code-highlight);
    }
  }

  .specialties {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
    flex-wrap: wrap;

    span {
      background-color: var(--color-chip-bg);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-fg);
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

    .expertise-title {
      font-size: 2rem;
    }

    .expertise-grid {
      padding: 1rem;
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