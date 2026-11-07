<template>
  <section id="home">
    <div class="hero-content">
      <h1>
        <span class="sr-only">{{ title }}</span>
        <span aria-hidden="true">
          <span v-for="(word, w) in titleWords" :key="w" class="word">
            <span
              v-for="(char, c) in word.chars"
              :key="c"
              class="char"
              :style="{ animationDelay: `${(word.offset + c) * 0.05}s` }"
              >{{ char }}</span
            >
          </span>
        </span>
      </h1>

      <p>
        <span class="sr-only">{{ description }}</span>
        <span aria-hidden="true">
          <span v-for="(word, w) in descriptionWords" :key="w" class="word">
            <span
              v-for="(char, c) in word.chars"
              :key="c"
              class="char"
              :style="{ animationDelay: `${(word.offset + c) * 0.03}s` }"
              >{{ char }}</span
            >
          </span>
        </span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const title = 'Olá, sou Alison'
const description = 'Desenvolvedor Front-end focado em Design Systems, Web Components e acessibilidade'

// Agrupa as letras por palavra: a animação continua letra a letra, mas a quebra
// de linha só acontece entre palavras (antes quebrava no meio, ex.: "TypeS cript").
function splitWords(text: string) {
  let offset = 0
  return text.split(' ').map((word) => {
    const entry = { chars: [...word], offset }
    offset += word.length + 1
    return entry
  })
}

const titleWords = splitWords(title)
const descriptionWords = splitWords(description)
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

  h1 {
    color: vars.$primary-color-dark;

    body.light & {
      color: vars.$primary-color-light;
    }

    font-size: 6rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1.15;

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
    letter-spacing: 0.05em;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .word {
    display: inline-block;
    white-space: nowrap;
    margin-right: 0.3em;

    &:last-child {
      margin-right: 0;
    }
  }

  .char {
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