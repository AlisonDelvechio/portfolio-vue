<template>
  <section id="contato" class="section container contact" aria-labelledby="contato-title">
    <div v-reveal class="inner">
      <h2 id="contato-title" class="section-title">Contato</h2>
      <p>
        Gosto de trocar ideia sobre front-end, componentes e design systems. Se quiser conversar, o melhor
        caminho é o e-mail.
      </p>
      <a href="mailto:alisondelvechio@outlook.com" class="email">alisondelvechio@outlook.com</a>
      <ul class="links">
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
        <li>
          <a href="/curriculo-alison-delvechio.pdf" class="text-link" target="_blank" rel="noopener">
            Currículo (PDF)<span class="sr-only"> (abre em nova aba)</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.inner {
  display: grid;
  gap: 1rem;
  justify-items: start;
  max-width: 40rem;

  .section-title {
    margin-bottom: 0;
  }
}

.email {
  font-family: $font-code;
  font-size: clamp(1rem, 0.8rem + 1vw, 1.35rem);
  color: var(--color-fg);
  text-decoration: underline;
  text-decoration-color: var(--color-accent);
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
  overflow-wrap: anywhere;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  list-style: none;
  font-size: $fs-small;
}
</style>
