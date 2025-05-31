<template>
  <button 
    class="scroll-top" 
    v-show="showScrollTop" 
    @click="scrollToTop"
    aria-label="Voltar ao topo"
  >
    <Icon :icon="'mdi:arrow-up'" width="24" height="24" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Icon } from '@iconify/vue';

const showScrollTop = ref(false);

function handleScroll() {
  showScrollTop.value = window.scrollY > 100;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 10000;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
}
</style>