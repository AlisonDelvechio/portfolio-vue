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
section {
  background: linear-gradient(
    to bottom,
    #121212 0%,
    #1f1f1f 30%,
    #1c365e 60%,   // azul mais escuro
    #121212 100%
  );
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .hero-content {
    max-width: 800px;
  }

  h1 {
    color: $primary-color;
    font-size: 6rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    white-space: pre-wrap;
    letter-spacing: 0.1em;
  }

  p {
    font-size: 1.5rem;
    color: $primary-color;
    margin-top: 1rem;
    white-space: pre-wrap;
    letter-spacing: 0.05em;
  }

  span {
    display: inline-block;
    animation: jump 0.5s ease forwards;
    opacity: 0; // inicia invisível
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