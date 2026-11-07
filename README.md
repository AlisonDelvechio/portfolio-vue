
# Meu Portfólio — Vue 3 + TypeScript + Vite 🚀

Bem-vindo ao repositório do meu portfólio pessoal!  
Este projeto foi desenvolvido com Vue 3 e TypeScript, utilizando Vite como bundler, com foco em performance, boas práticas e uma interface moderna e responsiva.

## 🎯 Sobre o Projeto

Este portfólio tem como objetivo apresentar meus principais projetos, habilidades e trajetória como desenvolvedor front-end.  
Além disso, conta com animações, modo escuro/claro, responsividade e efeitos visuais modernos.

Você pode acessar o portfólio online aqui: **[https://alison-delvechio-portfolio.netlify.app/]**

## 🛠️ Tecnologias Utilizadas

- Vue 3 (`<script setup>`) + TypeScript
- Vite 8
- Vue Router (uma rota por projeto: `/projects/<slug>`)
- SCSS + variáveis CSS para os temas claro e escuro (`src/styles/_theme.scss`)
- Iconify com ícones locais (sem requisições externas)
- IBM Plex Sans e Roboto Mono (Google Fonts)

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   ├── logos/            # Logos das empresas (WebP)
│   ├── projects/<slug>/  # cover.webp (card) e 01.webp, 02.webp... (galeria)
│   └── bg-dark.png, bg-light.png  # Padrão de losangos suave do fundo
├── components/           # Seções da Home e componentes (CodeMonitor = monitor do Hero)
├── composables/          # useTheme
├── data/                 # projects.ts, experiences.ts e o código digitado no monitor
├── directives/reveal.ts  # v-reveal: entrada única das seções
├── icons/icons.json      # Ícones usados (gerado por npm run icons)
├── router/               # Rotas
├── styles/               # _variables (escala, medidas, tempos) e _theme (cores)
└── views/                # Home e página de projeto
public/
├── _redirects            # Rotas da SPA ao recarregar na Netlify
├── curriculo-alison-delvechio.pdf
├── theme-init.js         # Aplica o tema antes da primeira pintura
└── og-image.png          # Imagem de compartilhamento
```

## ✏️ Como atualizar o conteúdo

- **Projeto novo:** crie `src/assets/projects/<slug>/` com `cover.webp` (cerca de 800px de largura) e as capturas `01.webp`, `02.webp`... (até 1600px), e adicione o projeto em `src/data/projects.ts`. `featured: true` coloca o projeto em destaque; sem isso, ele vai para a grade de estudos com o rótulo de `kind`.
- **Experiência:** `src/data/experiences.ts` é organizado em fases, cada uma com as empresas daquele período. A duração da fase atual é calculada pelo ano corrente.
- **Monitor do Hero:** digita `src/data/atom-button.tsx.txt`. Troque o arquivo para mostrar outro componente.
- **Cores e tema:** os componentes usam variáveis CSS (`var(--color-fg)`, `var(--color-accent)`...) definidas em `src/styles/_theme.scss`, com um bloco para cada tema. Todos os pares de texto e fundo passam no WCAG AA.
- **Animações:** as seções usam `v-reveal` (`v-reveal="120"` atrasa a entrada em 120 ms). Os tempos ficam em `src/styles/_variables.scss`, e tudo respeita a opção de reduzir movimento.
- **Ícone novo:** adicione o nome em `scripts/build-icons.mjs` e rode `npm run icons`.

## 💻 Como rodar localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/AlisonDelvechio/portfolio-vue.git
```

2. **Acesse o diretório:**

```bash
cd portfolio-vue
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute o projeto:**

```bash
npm run dev
```

5. **Acesse no navegador:**  
http://localhost:5173

## 📦 Build para produção

```bash
npm run build
```

## 📝 Licença

Este projeto está sob a licença MIT.  
Sinta-se à vontade para utilizar como base para o seu portfólio!

## 📬 Contato

- LinkedIn: https://www.linkedin.com/in/alison-delvechio-64094b172/
- GitHub: https://github.com/AlisonDelvechio
- E-mail: alisondelvechio@outlook.com

---

✨ Obrigado por visitar meu portfólio!  
Fique à vontade para deixar um ⭐️ no repositório e contribuir com sugestões!