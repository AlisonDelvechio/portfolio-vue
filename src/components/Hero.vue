<template>
  <section id="home">
    <div class="hero-content">
      <h1>Olá, sou Alison</h1>
      <p>Desenvolvedor Front-end especializado em Vue, Sass e TypeScript.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 4rem 2rem;
  text-align: center;
  // background-color: $secondary-color;

  .hero-content {
    max-width: 800px; 
  }

  h1 {
    color: $primary-color;
    font-size: 6rem;
    margin-bottom: 1rem;
    text-decoration: "uppercase";
  }

  p {
    font-size: 1.5rem; 
    color: $primary-color; 
  }
}
</style>