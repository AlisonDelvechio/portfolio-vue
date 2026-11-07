<template>
  <div v-if="enabled" ref="follower" class="mouse-follower" :class="{ active }" aria-hidden="true">
    <div class="mouse-dot"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Só faz sentido com mouse de verdade e sem pedido de redução de movimento.
const enabled =
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const follower = ref<HTMLElement | null>(null)
const active = ref(false)
const INTERACTIVE = 'a, button, [role="button"], label, input, select, textarea, summary'

let frame = 0
let x = 0
let y = 0

function render() {
  frame = 0
  const el = follower.value
  if (el) el.style.transform = `translate(${x - el.offsetWidth / 2}px, ${y - el.offsetHeight / 2}px)`
}

function onMove(event: MouseEvent) {
  x = event.clientX
  y = event.clientY
  // Uma atualização por frame, em vez de uma por evento.
  if (!frame) frame = requestAnimationFrame(render)
}

function onOver(event: MouseEvent) {
  active.value = !!(event.target as Element | null)?.closest?.(INTERACTIVE)
}

onMounted(() => {
  if (!enabled) return
  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('mouseover', onOver, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseover', onOver)
  cancelAnimationFrame(frame)
})
</script>

<style scoped lang="scss">
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
  transform: translate(-100px, -100px);

  .mouse-dot {
    width: 6px;
    height: 6px;
    background-color: var(--color-accent);
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
