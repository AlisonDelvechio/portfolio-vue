<template>
  <section id="home">
    <div class="hero-content">
      <h1>
        <span v-for="(char, index) in greeting" :key="index" :style="{ animationDelay: `${index * 0.05}s` }">
          {{ char === ' ' ? '\u00A0' : char }}
        </span>
        <span>
          <span v-for="(char, index) in name" :key="`name-${index}`" :style="{ animationDelay: `${(index + greeting.length) * 0.05}s` }">
            {{ char === ' ' ? '\u00A0' : char }}
          </span>
        </span>
      </h1>

      <p>
        <span v-for="(char, index) in description" :key="index" :style="{ animationDelay: `${index * 0.03}s` }">
          {{ char }}
        </span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const greeting = 'Olá, sou'.split('');
const name = ' Alison'.split('');

const description = 'Desenvolvedor Front-end especializado em Vue, Sass e TypeScript'.split('');
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as vars;

section {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;

  .hero-content {
    max-width: 800px;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    margin-top: 5rem;
    min-height: 40vh;
  }

  @media (max-width: 768px) {
    margin-top: 5rem;
    min-height: 40vh;
  }

  h1 {
    color: vars.$primary-color-dark;

    body.light & {
      color: vars.$primary-color-light;
    }

    font-size: 6rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    white-space: pre-wrap;
    letter-spacing: 0.1em;

    @media (max-width: 768px) {
      font-size: 4rem;
    }

    @media (max-width: 480px) {
      font-size: 2.5rem;
      letter-spacing: 0.05em;
    }
  }

  p {
    font-size: 1.5rem;
    color: vars.$primary-color-dark;

    body.light & {
      color: vars.$primary-color-light;
    }

    margin-top: 1rem;
    white-space: pre-wrap;
    letter-spacing: 0.05em;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  span {
    display: inline-block;
    animation: jump 0.5s ease forwards;
    opacity: 0;
    transform: translateY(10px);
  }

  @keyframes jump {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>