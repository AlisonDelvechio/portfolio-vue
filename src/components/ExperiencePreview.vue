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
    role: 'Analista de Desenvolvimento Front-End',
    date: '2025 – Atual',
    location: 'Bradesco Seguros - Stefanini IT Solutions',
    icon: 'mdi:office-building',
    description: 'Faço parte do time de Design System e colaboro na construção de uma biblioteca de componentes reutilizáveis.',
    logo: LogoBradesco,
    technologies: ['Angular', 'Ionic', 'Figma', 'Acessibilidade', 'Stencil']
  },
  {
    role: 'Desenvolvedor Front-End',
    date: '2023 – 2025',
    location: 'Bradesco Seguros - The Bridge Social',
    icon: 'mdi:office-building',
    description: 'Contribuí para o desenvolvimento de bibliotecas e integrações entre Zeroheight e Storybook, impulsionando a padronização do Design System. Implementei recursos de acessibilidade e ofereci suporte técnico às equipes de design e desenvolvimento, colaborando na construção de aplicações escaláveis.',
    logo: LogoBradesco,
    technologies: ['Vue.js', 'Figma', 'Zeroheight', 'Acessibilidade', 'Storybook']
  },
  {
    role: 'Desenvolvedor Front-End',
    date: '2021 – 2023',
    location: 'Bradesco Seguros - Sabion Digital',
    icon: 'mdi:office-building',
    description: 'Desenvolvi componentes reutilizáveis com base no Design System, garantindo consistência entre produtos. Estruturei uma biblioteca de componentes, criei templates utilizados por outros canais e colaborei na correção e melhoria de projetos, aprimorando a qualidade e a eficiência das entregas.',
    logo: LogoBradesco,
    technologies: ['Vue.js', 'Firebase', 'Web Components', 'Templates']
  },
  {
    role: 'Desenvolvedor Full Stack',
    date: '2020 – 2021',
    location: 'BSN Tecnologia',
    icon: 'mdi:office-building',
    description: 'Desenvolvi e dei suporte a aplicações web e mobile, atuando na implementação de funcionalidades e administração de bancos de dados.',
    logo: LogoBSN,
    technologies: ['Angular', 'Ionic', 'PHP', 'Laravel', 'MySQL']
  },
  {
    role: 'Software QA Tester',
    date: '2019 – 2020',
    location: 'BSN Tecnologia',
    icon: 'mdi:office-building',
    description: 'Elaborei e executei planos de teste, documentei processos e identifiquei falhas para garantir a qualidade dos softwares. Também apoiei no desenvolvimento quando possível.',
    logo: LogoBSN,
    technologies: ['Testes de Software', 'Documentação', 'QA', 'Git', 'Revisão de Código']
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