// Fonte única dos projetos: usada pela listagem da Home e pela página de detalhes.
// As imagens ficam em src/assets/projects/<slug>/: cover.webp (card) e 01.webp, 02.webp... (galeria).

export interface Project {
  slug: string
  title: string
  /** Título menor para o card da grade de estudos, quando o completo é longo. */
  shortTitle?: string
  /** Projetos em destaque aparecem grandes na Home; os outros, na grade de estudos. */
  featured?: boolean
  /** Rótulo da grade de estudos. */
  kind?: 'estudo' | 'TCC'
  /** Texto curto para o card da Home. */
  summary: string
  /** Texto completo para a página do projeto. */
  description: string
  /** Data de referência (AAAA-MM-DD). */
  date: string
  tags: string[]
  repo: string
  /** Link do site publicado, quando existir. */
  demo?: string
  cover: string
  images: string[]
}

const imageModules = import.meta.glob<string>('@/assets/projects/*/*.webp', {
  eager: true,
  import: 'default',
})

function imagesFor(slug: string) {
  const entries = Object.entries(imageModules)
    .filter(([path]) => path.includes(`/projects/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
  const cover = entries.find(([path]) => path.endsWith('/cover.webp'))?.[1]
  if (!cover) throw new Error(`Projeto sem cover.webp: ${slug}`)
  return {
    cover,
    images: entries.filter(([path]) => !path.endsWith('/cover.webp')).map(([, url]) => url),
  }
}

type ProjectData = Omit<Project, 'cover' | 'images'>

// A ordem deste array é a ordem de exibição.
const data: ProjectData[] = [
  {
    slug: 'semana-em-jogo',
    title: 'Semana em Jogo',
    featured: true,
    summary:
      'Checklist semanal de treino, alimentação e hábitos. Funciona só no navegador ou sincronizado entre aparelhos pelo Supabase.',
    description:
      'Aplicação web para acompanhar metas semanais de alimentação, treino e outros hábitos, com registro diário, calendário mensal, análise de progresso, relatórios em CSV e PDF e backup. Funciona apenas no navegador (modo local) ou sincronizada entre dispositivos com Supabase, usando autenticação, Row Level Security e funções Postgres que gravam cada edição em uma única transação, além de detecção de conflitos entre dispositivos. As regras de negócio são cobertas por testes com Vitest, inclusive as migrações do banco executadas em um Postgres em memória (PGlite), e um pipeline de CI roda lint, testes, type-check e build a cada pull request.',
    date: '2026-09-26',
    tags: ['Vue 3', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vitest', 'SCSS'],
    repo: 'https://github.com/AlisonDelvechio/semana-em-jogo',
  },
  {
    slug: 'atom-ui',
    title: 'Atom UI',
    featured: true,
    summary:
      'Biblioteca de Web Components em Stencil, consumida por um app Angular 19 num monorepo. Um laboratório do que faço no trabalho.',
    description:
      'Biblioteca de Web Components criada com Stencil.js e SCSS, com foco em modularidade, responsividade e integração com frameworks modernos como Angular. Inclui componentes como alertas customizáveis e menu accordion, utilizando Shadow DOM, suporte a props e slots, variáveis globais com SCSS e integração via monorepo.',
    date: '2025-06-11',
    tags: ['Stencil.js', 'Web Components', 'SCSS', 'Angular 19'],
    repo: 'https://github.com/AlisonDelvechio/atom-ui-labs',
  },
  {
    slug: 'star-blaster-game',
    title: 'Star Blaster Game',
    shortTitle: 'Star Blaster',
    kind: 'estudo',
    summary: "Shoot'em up em Canvas, sem bibliotecas.",
    description:
      "Um jogo de nave no estilo shoot'em up, desenvolvido para rodar diretamente no navegador utilizando apenas HTML, CSS e JavaScript puro. O principal desafio foi criar a mecânica de movimentação fluida, colisões e efeitos gráficos utilizando a API Canvas.",
    date: '2024-09-27',
    tags: ['JavaScript', 'Game', 'Canvas'],
    repo: 'https://github.com/AlisonDelvechio/star-blaster-game',
  },
  {
    slug: 'league-login',
    title: 'Tela de login do League of Legends',
    shortTitle: 'Login do LoL',
    kind: 'estudo',
    summary: 'Recriação para treinar CSS e animação.',
    description:
      'Recriação fiel da icônica tela de login do League of Legends, com foco em animações e responsividade. O projeto explora a manipulação do DOM e estilização avançada com CSS para simular a interface original.',
    date: '2023-01-21',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/AlisonDelvechio/league-of-legends-login-screen',
  },
  {
    slug: 'pokedex',
    title: 'Pokédex',
    kind: 'estudo',
    summary: 'Busca e listagem com a PokéAPI.',
    description:
      'Aplicação web que consome a PokéAPI para listar e pesquisar Pokémon, utilizando JavaScript para manipulação dinâmica dos dados e renderização das informações. O projeto reforça o consumo de APIs REST e manipulação de elementos via JavaScript.',
    date: '2023-01-07',
    tags: ['CSS', 'JavaScript', 'API'],
    repo: 'https://github.com/AlisonDelvechio/simple-pokedex',
  },
  {
    slug: 'first-portfolio',
    title: 'Primeiro portfólio',
    kind: 'estudo',
    summary: 'Onde comecei. HTML, CSS e JavaScript.',
    description:
      'Meu primeiro portfólio desenvolvido para apresentar projetos e habilidades. Estruturado com HTML, CSS e JavaScript, com foco em boas práticas de responsividade e design. Esse projeto marcou minha introdução no desenvolvimento web e na criação de interfaces visuais.',
    date: '2021-07-02',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/AlisonDelvechio/Portfolio',
  },
  {
    slug: 'inventectcc',
    title: 'InventecTCC',
    kind: 'TCC',
    summary: 'Controle de patrimônio entregue à instituição.',
    description:
      'Sistema web completo para gerenciamento de inventário e controle de estoque, desenvolvido como Trabalho de Conclusão de Curso (TCC). Utiliza PHP com integração ao banco de dados MySQL, além de recursos dinâmicos com jQuery e Ajax para melhor experiência do usuário.',
    date: '2021-05-15',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'JavaScript', 'jQuery', 'Ajax'],
    repo: 'https://github.com/AlisonDelvechio/InventecTCC',
  },
]

export const projects: Project[] = data.map((project) => ({ ...project, ...imagesFor(project.slug) }))

export const featuredProjects = projects.filter((project) => project.featured)
export const studyProjects = projects.filter((project) => !project.featured)

export function projectYear(project: Project) {
  return project.date.slice(0, 4)
}

export function findProjectIndex(slug: string) {
  return projects.findIndex((project) => project.slug === slug)
}

function normalize(text: string) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

// Links antigos usavam /projects?project=<slug ou título>, inclusive títulos que mudaram.
const legacyTitles: Record<string, string> = {
  'league of legends login screen': 'league-login',
  'tela de login league of legends': 'league-login',
  'first portfolio': 'first-portfolio',
}

export function resolveLegacyProject(query: string) {
  if (findProjectIndex(query) !== -1) return query
  const key = normalize(query)
  return (
    legacyTitles[key] ?? projects.find((project) => normalize(project.title) === key)?.slug
  )
}

export function formatProjectDate(date: string) {
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}
