<template>
  <section class="my-work" ref="myWorkSection">
    <div class="text-content">
      <h2>Meu trabalho</h2>
      <p>
        Ao longo da minha carreira, atuei em diversos projetos que me permitiram desenvolver soluções práticas e escaláveis, sempre com foco na qualidade e na experiência do usuário. Trabalhei em equipes multidisciplinares, entregando desde funcionalidades específicas até integrações complexas, sempre buscando alinhar tecnologia e necessidades reais dos clientes.
        <br><br>
        Essa trajetória me proporcionou uma visão ampla sobre o desenvolvimento front-end e suas aplicações, além da habilidade de adaptar rapidamente a diferentes contextos e desafios. Cada projeto foi uma oportunidade de aprendizado e crescimento, reforçando minha paixão por criar interfaces eficientes e funcionais.
      </p>
    </div>
    <div class="visual-effect">
      <div class="pc-frame" :class="{ animate: inView }">
        <svg viewBox="0 0 64 48">
          <rect x="2" y="2" width="60" height="40" rx="4" ry="4" />
          <rect x="24" y="44" width="16" height="2" />
        </svg>
        <div class="typing" v-if="inView">
          <pre><code v-html="displayedText"></code><span class="cursor">|</span></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const myWorkSection = ref<HTMLElement | null>(null);
const inView = ref(false);

const rawText = `<h4 class="title">Contribuições no Mundo Tech</h4>
<p class="text">Entrego soluções que facilitam o dia a dia das equipes de tecnologia e elevam a qualidade dos produtos.</p>
<ul class="list">
  <li>Colaboração efetiva entre times multidisciplinares</li>
  <li>Foco em usabilidade e experiência do usuário</li>
  <li>Adaptação rápida às mudanças e desafios</li>
</ul>`;

function escapeHtml(text: string) {
  return text.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;');
}

function syntaxHighlight(text: string) {
  let escaped = escapeHtml(text);

  // Destaca atributos e valores
  escaped = escaped.replace(/(\bclass\b)(=)("[^"]*")/g, (_, attr, eq, val) => {
    return `<span class="attr">${attr}</span>${eq}<span class="value">${val}</span>`;
  });

  // Destaca outras tags
  escaped = escaped.replace(/(&lt;\/?[\w-]+[^&]*?&gt;)/g, match => {
    return `<span class="tag">${match}</span>`;
  });

  return escaped;
}

const displayedText = ref('');
let index = 0;
let interval: number | undefined;

function startTyping() {
  displayedText.value = '';
  index = 0;

  interval = window.setInterval(() => {
    index++;
    displayedText.value = syntaxHighlight(rawText.slice(0, index));
    if (index >= rawText.length) clearInterval(interval);
  }, 25);
}

function handleIntersection(entries: IntersectionObserverEntry[]) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !inView.value) {
      inView.value = true;
      startTyping();
    }
  });
}

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });
  if (myWorkSection.value) observer.observe(myWorkSection.value);
});
</script>

<style scoped lang="scss">
.my-work {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 2rem;
  padding: 4rem 12rem;
  justify-items: center;

  .text-content {
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  }

  .visual-effect {
    display: flex;
    justify-content: center;
    align-items: center;

    .pc-frame {
      position: relative;
      width: 500px;
      height: 350px;

      svg {
        width: 100%;
        height: auto;
        stroke: $accent-color;
        stroke-width: 2;
        fill: none;
        stroke-dasharray: 400;
        stroke-dashoffset: 400;
        transition: stroke-dashoffset 6s ease;
      }

      &.animate svg {
        stroke-dashoffset: 0;
      }

      .typing {
        position: absolute;
        top: 7%;
        left: 5%;
        width: 90%;
        height: 84%;
        font-family: monospace;
        font-size: 0.9rem;
        color: #f0f0f0;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 25px;
        padding: 1rem;
        overflow-y: auto;
        overflow-x: hidden;
        white-space: pre-wrap;
        box-sizing: border-box;

        pre {
          margin: 0;
          display: block;
          white-space: pre-wrap;
          word-break: break-word;
        }

        code {
          display: inline;
          white-space: pre-wrap;
        }

        .cursor {
          display: inline;
          margin-left: 2px;
          color: $accent-color;
          animation: blink 1s steps(2, start) infinite;
          user-select: none;
          font-weight: bold;
        }

        :deep(.tag) {
          color: $accent-color;
          font-weight: bold;
        }

        :deep(.attr) {
          color: #c792ea;
          font-weight: 600;
        }

        :deep(.value) {
          color: #89ddff;
        }
      }
    }
  }
}

body.dark {
  .my-work {
    .visual-effect {
      .pc-frame {
        .typing {
          background: rgba(20, 20, 20, 0.8);
        }
      }
    }
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Responsividade */
@media (max-width: 768px) {
  .my-work {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    align-items: center;

    .text-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1.5rem;

      h2 {
        font-size: 2rem;
      }
    }

    .visual-effect {
      .pc-frame {
        width: 100%;
        max-width: 350px; 
        height: 250px;

        .typing {
          top: 6%;
          left: 5%;
          width: 90%;
          height: 70%;
          font-size: 0.8rem;
          border-radius: 15px;
          padding: 0.75rem;
        }
      }
    }
  }
}

</style>