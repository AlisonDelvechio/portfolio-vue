<template>
  <section id="experiencia" class="experience-section">
    <h2 class="section-title">Experiência <br /> Profissional</h2>

    <Experience :experiences="experiences" />
  </section>
</template>

<script setup lang="ts">
import Experience from './Experience.vue'
import { experiences } from '@/data/experiences'
</script>

<style scoped lang="scss">
.experience-section {
  padding: 4rem clamp(1rem, 6vw, 10rem);
  text-align: center;

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    line-height: 1.2;
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 2rem 1rem;

    .section-title {
      font-size: 2rem;
    }
  }
}
</style>