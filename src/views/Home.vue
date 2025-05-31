<template>
  <section class="hero-expertise-wrapper">
    <Hero />
    <Expertise />
  </section>
  <div class="section-divider"></div>
  <MyWork />
  <ProjectsPreview />
  <ExperiencePreview />
  <Contact />
  <ScrollTopButton />
</template>

<script setup lang="ts">
import ScrollTopButton from '@/components/ScrollTopButton.vue';
import Hero from '@/components/Hero.vue';
import Expertise from '@/components/Expertise.vue';
import MyWork from '@/components/MyWork.vue';
import ProjectsPreview from '@/components/ProjectsPreview.vue';
import ExperiencePreview from '@/components/ExperiencePreview.vue'
import Contact from '@/components/Contact.vue';
</script>

<style scoped lang="scss">
.section-divider {
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.05);
  margin: 3rem 0;
}

.hero-expertise-wrapper {
  background-image:
    url('@/assets/diagmonds-dark.png'),
    linear-gradient(
      to bottom, 
      rgba(31,31,31,1) 0%, 
      rgba(31,31,31,0.4) 70%, 
      rgba(31,31,31,0) 
    100%);
  background-repeat: repeat, no-repeat;
  background-size: 150px 150px, cover;
  background-position: center top, center;
  background-blend-mode: overlay;
  padding-bottom: 4rem;

  // Modo light
  body.light & {
    background-image:
      url('@/assets/diagmonds-light.png'),
      linear-gradient(
        to bottom, 
        rgba(220,220,220,1) 0%, 
        rgba(220,220,220,0.4) 70%, 
        rgba(220,220,220,0) 
      100%);
  }
}

.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: $accent-color;
  color: $primary-color-dark;
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