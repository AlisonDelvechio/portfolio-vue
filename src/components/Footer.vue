<template>
  <footer class="footer">
    <p>&copy; 2025 Alison Delvechio. Todos os direitos reservados.</p>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as vars;

.footer {
  background: rgba(vars.$background-dark, 0.9);
  color: vars.$text-color-dark;
  text-align: center;
  padding: 1.5rem 2rem;
  font-size: 0.9rem;

  body.light & {
    background: rgba(vars.$background-light, 0.9);
    color: vars.$text-color-light;
  }
}
</style>