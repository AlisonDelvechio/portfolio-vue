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
  background: var(--color-divider);
  margin: 3rem 0;
}

.hero-expertise-wrapper {
  background-image: var(--bg-pattern), var(--bg-hero);
  background-repeat: repeat, no-repeat;
  background-size: 150px 150px, cover;
  background-position: center top, center;
  background-blend-mode: overlay;
  padding-bottom: 4rem;
}
</style>
