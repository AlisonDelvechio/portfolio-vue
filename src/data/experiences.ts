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

/** Um contrato dentro de uma fase (empresa ou consultoria, cargo e período). */
export interface Stint {
  company: string
  role: string
  period: string
  summary: string
  logos: Logo[]
  current?: boolean
}

/** Uma fase da carreira: o tipo de trabalho muda de uma fase para outra. */
export interface Phase {
  startYear: number
  /** Ano de saída; ausente na fase atual. */
  endYear?: number
  org: string
  title: string
  team: string
  summary: string
  technologies: string[]
  stints: Stint[]
}

const bradesco: Logo = { src: LogoBradesco, alt: 'Bradesco Seguros' }
const bsn: Logo = { src: LogoBSN, alt: 'BSN Tecnologia' }


export const phases: Phase[] = [
  {
    startYear: 2025,
    org: 'Bradesco Seguros',
    title: 'Biblioteca de componentes',
    team: 'time de TI',
    summary: 'Componentes em Stencil para aplicações Angular e Ionic, documentados no Storybook.',
    technologies: ['Stencil', 'Angular', 'Ionic', 'TypeScript', 'Sass', 'Storybook'],
    stints: [
      {
        company: 'GFT Technologies',
        role: 'Desenvolvedor Front-end',
        period: '2026 – atual',
        summary: 'Evolução e manutenção dos componentes da biblioteca.',
        logos: [bradesco, { src: LogoGFT, alt: 'GFT Technologies' }],
        current: true,
      },
      {
        company: 'Stefanini',
        role: 'Desenvolvedor Front-end',
        period: '2025 – 2026',
        summary: 'Entrada no time de TI e na biblioteca de componentes.',
        logos: [bradesco, { src: LogoStefanini, alt: 'Stefanini' }],
      },
    ],
  },
  {
    startYear: 2021,
    endYear: 2025,
    org: 'Bradesco Seguros',
    title: 'Sites e produtos digitais',
    team: 'time de negócios',
    summary: 'Sites, páginas e componentes para várias frentes digitais, seguindo o Design System da empresa.',
    technologies: ['Vue.js', 'Web Components', 'Storybook', 'Zeroheight', 'Figma', 'Acessibilidade'],
    stints: [
      {
        company: 'The Bridge Social / QiBit',
        role: 'Desenvolvedor Front-end',
        period: '2023 – 2025',
        summary: 'Storybook integrado ao Zeroheight, plugins para o Figma e acessibilidade.',
        logos: [bradesco, { src: LogoQiBit, alt: 'QiBit' }],
      },
      {
        company: 'Sabion Digital',
        role: 'Desenvolvedor Front-end',
        period: '2021 – 2023',
        summary: 'Sites, páginas e templates com Vue.js, Web Components e Firebase.',
        logos: [bradesco, { src: LogoSabion, alt: 'Sabion Digital' }],
      },
    ],
  },
  {
    startYear: 2019,
    endYear: 2021,
    org: 'BSN Tecnologia',
    title: 'Onde comecei',
    team: 'do QA ao full stack',
    summary: 'Primeiro testando software, depois desenvolvendo aplicações web e mobile.',
    technologies: ['Angular', 'Ionic', 'PHP', 'Laravel', 'MySQL', 'QA'],
    stints: [
      {
        company: 'BSN Tecnologia',
        role: 'Desenvolvedor Full Stack',
        period: '2020 – 2021',
        summary: 'Apps web e mobile com Angular, Ionic, Laravel e MySQL.',
        logos: [bsn],
      },
      {
        company: 'BSN Tecnologia',
        role: 'Software QA Tester',
        period: '2019 – 2020',
        summary: 'Planos de teste, documentação e caça a bugs.',
        logos: [bsn],
      },
    ],
  },
]

export function phasePeriod(phase: Phase) {
  return `${phase.startYear} – ${phase.endYear ?? 'hoje'}`
}

/** "1 ano", "4 anos"; a fase atual conta até o ano corrente. */
export function phaseDuration(phase: Phase, now = new Date().getFullYear()) {
  const years = Math.max(1, (phase.endYear ?? now) - phase.startYear)
  return years === 1 ? '1 ano' : `${years} anos`
}
