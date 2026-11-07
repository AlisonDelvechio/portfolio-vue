<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <MouseFollower />
  <Header />
  <main id="conteudo" tabindex="-1">
    <router-view />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MouseFollower from '@/components/MouseFollower.vue'
</script>

<style lang="scss">
main {
  flex: 1;
  outline: none;
}

.skip-link {
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 10001;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: $accent-color;
  color: #fff !important;
  font-weight: 600;
  transform: translateY(-200%);
  transition: transform 0.2s ease;

  &:focus {
    transform: translateY(0);
  }
}
</style>
