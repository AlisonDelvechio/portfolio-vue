<template>
  <section class="experience-section">
    <h2 class="section-title">Experiência <br /> Profissional</h2>
    <Experience :experiences="experiences" />
  </section>

</template>

<script setup lang="ts">
import Experience from './Experience.vue'
import LogoBradesco from '@/assets/Bradesco-Seguros_logo.png'
// import LogoQiBit from '@/assets/QiBit_logo.png'
import LogoBSN from '@/assets/BSN_logo.png'

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
    role: 'Desenvolvedor Front-End',
    date: '2023 – 2025',
    location: 'Bradesco Seguros - The Bridge Social',
    icon: 'mdi:office-building',
    description: 'Desenvolvimento de bibliotecas, plugins para Figma, integrações com Zeroheight e funcionalidades de acessibilidade para Design System.',
    logo: LogoBradesco,
    technologies: ['Vue.js', 'TypeScript', 'Figma', 'Zeroheight', 'Acessibilidade']
  },
  {
    role: 'Desenvolvedor Front-End',
    date: '2021 – 2023',
    location: 'Bradesco Seguros - Sabion Digital',
    icon: 'mdi:office-building',
    description: 'Criação e implementação de componentes e páginas seguindo o Design System. Atuei no desenvolvimento de uma biblioteca de componentes e participei da construção do site oficial do evento Design Conf.',
    logo: LogoBradesco,
    technologies: ['Vue.js', 'Storybook', 'Firebase', 'Web Components']
  },
  {
    role: 'Desenvolvedor Full Stack',
    date: '2020 – 2021',
    location: 'BSN Tecnologia',
    icon: 'mdi:office-building',
    description: 'Desenvolvimento e suporte para aplicações mobile e web, incluindo implementação e administração de bancos de dados.',
    logo: LogoBSN,
    technologies: ['Angular', 'Ionic', 'PHP', 'Laravel', 'MySQL']
  },
  {
    role: 'Software QA Tester',
    date: '2019 – 2020',
    location: 'BSN Tecnologia',
    icon: 'mdi:office-building',
    description: 'Elaboração e execução de planos de teste, documentação e avaliação da qualidade dos softwares.',
    logo: LogoBSN,
    technologies: ['Testes de Software', 'Documentação', 'QA']
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