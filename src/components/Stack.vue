<template>
  <section id="stack" class="section container" aria-labelledby="stack-title">
    <h2 id="stack-title" v-reveal class="section-title">Stack</h2>

    <div class="grid">
      <article v-for="(area, i) in areas" :key="area.title" v-reveal="i * 60" class="area">
        <h3>{{ area.title }}</h3>
        <p>{{ area.text }}</p>
        <ul class="tag-list" aria-label="Tecnologias">
          <li v-for="tool in area.tools" :key="tool" class="tag">{{ tool }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const areas = [
  {
    title: 'Componentes',
    text: 'Stencil e Web Components, documentados no Storybook e no Zeroheight a partir do Figma.',
    tools: ['Stencil', 'Web Components', 'Storybook', 'Zeroheight', 'Figma'],
  },
  {
    title: 'Front-end',
    text: 'Angular, Vue e Ionic, com TypeScript e Sass. Prefiro componentes com API pequena e CSS fácil de manter.',
    tools: ['Angular', 'Vue.js', 'Ionic', 'TypeScript', 'Sass'],
  },
  {
    title: 'Acessibilidade e qualidade',
    text: 'Teclado e leitor de tela pensados desde o início. Do tempo de QA ficou o costume de testar o caminho que ninguém testa.',
    tools: ['Acessibilidade', 'Testes', 'Vitest', 'Git'],
  },
]
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 1.25rem;
}

.area {
  display: grid;
  gap: 0.75rem;
  align-content: start;
  padding: 1.25rem;
  border-radius: $radius;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>
