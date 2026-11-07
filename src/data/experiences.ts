import LogoBradesco from '@/assets/logos/Bradesco-Seguros_logo.webp'
import LogoGFT from '@/assets/logos/GFT_Technologies_logo.webp'
import LogoStefanini from '@/assets/logos/Stefanini_Brasil_logo.webp'
import LogoQiBit from '@/assets/logos/QiBit_logo.webp'
import LogoSabion from '@/assets/logos/Sabion_Digital_logo.webp'
import LogoBSN from '@/assets/logos/BSN_logo.webp'

export interface Logo {
  src: string
  alt: string
}

export interface Experience {
  role: string
  date: string
  location: string
  description: string
  logos: Logo[]
  technologies: string[]
}

const bradesco: Logo = { src: LogoBradesco, alt: 'Logo da Bradesco Seguros' }
const bsn: Logo = { src: LogoBSN, alt: 'Logo da BSN Tecnologia' }

/** Ano em que comecei a trabalhar com desenvolvimento (base do "mais de N anos"). */
export const CAREER_START_YEAR = 2020

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Front-End',
    date: '2026 – Atual',
    location: 'Bradesco Seguros · GFT Technologies',
    description:
      'Atuo no desenvolvimento e evolução do Design System, criando componentes reutilizáveis e contribuindo para a padronização e escalabilidade das aplicações.',
    logos: [bradesco, { src: LogoGFT, alt: 'Logo da GFT Technologies' }],
    technologies: ['Angular', 'Ionic', 'Stencil', 'Figma', 'Acessibilidade'],
  },
  {
    role: 'Desenvolvedor Front-End',
    date: '2025 – 2026',
    location: 'Bradesco Seguros · Stefanini',
    description:
      'Desenvolvi bibliotecas de componentes modulares com Stencil, Ionic, Angular, TypeScript e Sass, com documentação integrada ao processo de desenvolvimento por meio do Storybook, com foco em escalabilidade, reutilização e consistência do Design System.',
    logos: [bradesco, { src: LogoStefanini, alt: 'Logo da Stefanini' }],
    technologies: ['Stencil', 'Angular', 'Ionic', 'TypeScript', 'Sass', 'Storybook'],
  },
  {
    role: 'Desenvolvedor Front-End',
    date: '2023 – 2025',
    location: 'Bradesco Seguros · The Bridge Social / QiBit',
    description:
      'Desenvolvi bibliotecas e integrações entre Zeroheight e Storybook, criei plugins para o Figma e implementei recursos de acessibilidade, oferecendo suporte técnico aos times de design e desenvolvimento ligados ao Design System.',
    logos: [bradesco, { src: LogoQiBit, alt: 'Logo da QiBit' }],
    technologies: ['Vue.js', 'Figma', 'Zeroheight', 'Storybook', 'Acessibilidade'],
  },
  {
    role: 'Desenvolvedor Front-End',
    date: '2021 – 2023',
    location: 'Bradesco Seguros · Sabion Digital',
    description:
      'Criei componentes e páginas seguindo o Design System, estruturei uma biblioteca de componentes e templates usados por outros canais e participei da construção do site oficial do evento Design Conf.',
    logos: [bradesco, { src: LogoSabion, alt: 'Logo da Sabion Digital' }],
    technologies: ['Vue.js', 'Web Components', 'Storybook', 'Firebase'],
  },
  {
    role: 'Desenvolvedor Full Stack',
    date: '2020 – 2021',
    location: 'BSN Tecnologia',
    description:
      'Desenvolvi e dei suporte a aplicações web e mobile, atuando na implementação de funcionalidades e administração de bancos de dados.',
    logos: [bsn],
    technologies: ['Angular', 'Ionic', 'PHP', 'Laravel', 'MySQL'],
  },
  {
    role: 'Software QA Tester',
    date: '2019 – 2020',
    location: 'BSN Tecnologia',
    description:
      'Elaborei e executei planos de teste, documentei processos e sistemas e identifiquei falhas para garantir a qualidade dos softwares, apoiando também o desenvolvimento.',
    logos: [bsn],
    technologies: ['Testes de Software', 'QA', 'Documentação', 'Git', 'Revisão de Código'],
  },
]
