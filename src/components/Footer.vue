<template>
  <footer class="footer theme-transition">
    <div class="container inner">
      <p>&copy; {{ year }} Alison Delvechio</p>
      <p class="label">Feito com Vue e TypeScript</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped lang="scss">
.footer {
  background: var(--color-footer-bg);
  border-top: 1px solid var(--color-line);
  font-size: $fs-small;
  color: var(--color-text-muted);
}

.inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  padding-block: 1.5rem;
}
</style>
