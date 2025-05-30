<template>
  <section class="experience-section">
    <h2 class="section-title">Professional <br /> Experience</h2>
    <Experience :experiences="experiences" />
  </section>
</template>

<script setup lang="ts">
import Experience from './Experience.vue'
import LogoBradesco from '@/assets/bradesco-seguros-rgb-red.png'
import LogoQiBit from '@/assets/QiBit.png'

interface Experience {
  role: string
  date: string
  location: string
  icon: string
  description: string
  logo: string
  technologies: string[]
}

const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Front-end',
    date: 'set de 2023 - o momento',
    location: 'Home Office',
    icon: 'mdi:computer',
    description: 'Atuação focada em desenvolvimento de interfaces modernas e responsivas.',
    logo: LogoQiBit,
    technologies: ['Vue.js', 'TypeScript', 'SCSS', 'Design System']
  },
  {
    role: 'Desenvolvedor Júnior',
    date: '2022 - 2024',
    location: 'Empresa Y',
    icon: 'mdi:office-building',
    description: 'Responsável por manutenção de sistemas legados e desenvolvimento de novas features.',
    logo: LogoBradesco,
    technologies: ['JavaScript', 'SASS', 'Jest']
  }
]
</script>

<style scoped lang="scss">
.experience-section {
  padding: 4rem 10rem;
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