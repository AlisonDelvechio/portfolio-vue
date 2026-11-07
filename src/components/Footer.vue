<template>
  <footer class="footer">
    <p>&copy; {{ year }} Alison Delvechio. Todos os direitos reservados.</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
  background: var(--color-footer-bg);
  color: var(--color-text);
  text-align: center;
  padding: 1.5rem 2rem;
  font-size: 0.9rem;
}
</style>
