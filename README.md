
# Meu Portfólio — Vue 3 + TypeScript + Vite 🚀

Bem-vindo ao repositório do meu portfólio pessoal!  
Este projeto foi desenvolvido com Vue 3 e TypeScript, utilizando Vite como bundler, com foco em performance, boas práticas e uma interface moderna e responsiva.

## 🎯 Sobre o Projeto

Este portfólio tem como objetivo apresentar meus principais projetos, habilidades e trajetória como desenvolvedor front-end.  
Além disso, conta com animações, modo escuro/claro, responsividade e efeitos visuais modernos.

Você pode acessar o portfólio online aqui: **[https://alison-delvechio-portfolio.netlify.app/]**

## 🛠️ Tecnologias Utilizadas

- Vue 3 (`<script setup>`) + TypeScript
- Vite
- Vue Router (uma rota por projeto: `/projects/<slug>`)
- SCSS (com variáveis)
- Iconify com ícones locais (sem requisições externas)
- Modo dark/light salvo no navegador, seguindo a preferência do sistema na primeira visita

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   ├── logos/          # Logos das empresas (WebP)
│   └── projects/<slug>/ # cover.webp (card) e 01.webp, 02.webp... (galeria)
├── components/         # Componentes reutilizáveis
├── composables/        # useTheme, useIntersectionObserver
├── data/               # projects.ts e experiences.ts: o conteúdo do site
├── icons/icons.json    # Ícones usados (gerado por npm run icons)
├── router/             # Rotas
├── styles/             # SCSS global
├── views/              # Home e página de projeto
├── App.vue
└── main.ts
public/
├── _redirects          # Faz as rotas da SPA funcionarem ao recarregar na Netlify
├── theme-init.js       # Aplica o tema antes da primeira pintura
└── og-image.png        # Imagem de compartilhamento (LinkedIn, WhatsApp...)
```

## ✏️ Como atualizar o conteúdo

- **Novo projeto:** crie `src/assets/projects/<slug>/` com `cover.webp` (cerca de 800px de largura) e as capturas `01.webp`, `02.webp`... (até 1600px), e adicione o projeto em `src/data/projects.ts`. A ordem do array é a ordem de exibição; `demo` é opcional e mostra o botão "Ver site".
- **Experiência:** edite `src/data/experiences.ts`. O "mais de N anos" da seção de expertise é calculado a partir de `CAREER_START_YEAR`.
- **Novo ícone:** adicione o nome em `scripts/build-icons.mjs` e rode `npm run icons`.

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