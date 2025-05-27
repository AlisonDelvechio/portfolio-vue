<template>
  <nav>
    <a href="#home">Início</a>
    <a href="#projects">Projetos</a>
    <a href="#contact">Contato</a>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background: $primary-color;
  padding: 1rem;
  display: flex;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>