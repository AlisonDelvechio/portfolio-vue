<template>
  <section id="home" class="hero container">
    <div class="text">
      <p class="hello">Olá, eu sou</p>
      <h1>Alison Delvechio</h1>
      <p class="intro">
        Desenvolvedor front-end. Hoje trabalho na biblioteca de componentes do Bradesco Seguros, com
        Stencil, Angular e Ionic.
      </p>
      <ul class="links">
        <li>
          <a href="/curriculo-alison-delvechio.pdf" class="text-link" target="_blank" rel="noopener">
            Currículo (PDF)<span class="sr-only"> (abre em nova aba)</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/AlisonDelvechio" class="text-link" target="_blank" rel="noopener noreferrer">
            GitHub<span class="sr-only"> (abre em nova aba)</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alison-delvechio-64094b172/"
            class="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn<span class="sr-only"> (abre em nova aba)</span>
          </a>
        </li>
      </ul>
    </div>

    <CodeMonitor />
  </section>
</template>

<script setup lang="ts">
import CodeMonitor from '@/components/CodeMonitor.vue'
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
  padding-top: calc(#{$header-height} + clamp(2.5rem, 6vw, 5rem));
  padding-bottom: clamp(1rem, 3vw, 2rem);
}

.text {
  display: grid;
  gap: 1.125rem;
}

.hello {
  color: var(--color-text-muted);
}

h1 {
  font-size: $fs-display;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.intro {
  max-width: 40ch;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  list-style: none;
  padding-top: 0.25rem;
}

@media (max-width: $bp-md) {
  .hero {
    grid-template-columns: 1fr;
  }
}
</style>
