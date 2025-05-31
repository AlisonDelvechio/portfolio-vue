<template>
  <div id="app">
    <div class="mouse-follower">
      <div class="mouse-dot"></div>
    </div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { onMounted, onBeforeUnmount } from 'vue';

let follower: HTMLElement | null = null;

function handleMouseMove(e: MouseEvent) {
  if (follower) {
    const offsetX = e.clientX - follower.offsetWidth / 2;
    const offsetY = e.clientY - follower.offsetHeight / 2;
    follower.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    // Detecta se está sobre elemento com cursor: pointer
    const target = e.target as HTMLElement;
    if (getComputedStyle(target).cursor === 'pointer') {
      follower.classList.add('active');
    } else {
      follower.classList.remove('active');
    }
  }
}

onMounted(() => {
  follower = document.querySelector('.mouse-follower');
  window.addEventListener('mousemove', handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style lang="scss">
.mouse-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 24px;  
  height: 24px;
  border: 2px solid rgba(59, 130, 246, 0.5);  
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.08s ease-out, width 0.2s ease, height 0.2s ease, border-color 0.2s ease;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  .mouse-dot {
    width: 6px;   
    height: 6px;
    background-color: $accent-color;
    border-radius: 50%;
    transition: transform 0.08s ease-out;
  }

  &.active {
    width: 32px;   
    height: 32px;
    border-color: rgba(59, 130, 246, 0.8);

    .mouse-dot {
      transform: scale(2);  
    }
  }
}
</style>