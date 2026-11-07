<template>
  <section class="my-work" ref="myWorkSection" aria-labelledby="my-work-title">
    <div class="text-content">
      <h2 id="my-work-title">Meu trabalho</h2>
      <p>
        Ao longo da minha carreira, atuei em diversos projetos que me permitiram desenvolver soluções práticas e escaláveis, sempre com foco na qualidade e na experiência do usuário. Trabalhei em equipes multidisciplinares, entregando desde funcionalidades específicas até integrações complexas, sempre buscando alinhar tecnologia e necessidades reais dos clientes.
        <br><br>
        Essa trajetória me proporcionou uma visão ampla sobre o desenvolvimento front-end e suas aplicações, além da habilidade de adaptar rapidamente a diferentes contextos e desafios. Cada projeto foi uma oportunidade de aprendizado e crescimento, reforçando minha paixão por criar interfaces eficientes e funcionais.
      </p>
    </div>
    <div class="visual-effect" aria-hidden="true">
      <div class="monitor" :class="{ animate: inView }">
        <div class="screen">
          <!-- O texto completo, invisível, reserva o tamanho final da tela:
               ela não cresce nem rola enquanto o texto é digitado. -->
          <pre class="ghost"><code v-html="fullText"></code></pre>
          <pre v-if="inView" class="typed"><code v-html="displayedText"></code><span class="cursor">|</span></pre>
        </div>
        <div class="stand"></div>
        <div class="base"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const myWorkSection = ref<HTMLElement | null>(null)
const inView = ref(false)

const rawText = `<h4 class="title">Contribuições no Mundo Tech</h4>
<p class="text">Entrego soluções que facilitam o dia a dia das equipes de tecnologia e elevam a qualidade dos produtos.</p>
<ul class="list">
  <li>Colaboração efetiva entre times multidisciplinares</li>
  <li>Foco em usabilidade e experiência do usuário</li>
  <li>Adaptação rápida às mudanças e desafios</li>
</ul>`

function escapeHtml(text: string) {
  return text.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
}

function syntaxHighlight(text: string) {
  let escaped = escapeHtml(text)

  escaped = escaped.replace(/(\bclass\b)(=)("[^"]*")/g, (_, attr, eq, val) => {
    return `<span class="attr">${attr}</span>${eq}<span class="value">${val}</span>`
  })

  escaped = escaped.replace(/(&lt;\/?[\w-]+[^&]*?&gt;)/g, match => {
    return `<span class="tag">${match}</span>`
  })

  return escaped
}

const fullText = syntaxHighlight(rawText)
const displayedText = ref('')
let index = 0
let interval: number | undefined

function startTyping() {
  // Com redução de movimento, mostra o texto pronto em vez de digitar.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    displayedText.value = fullText
    return
  }
  displayedText.value = ''
  index = 0

  interval = window.setInterval(() => {
    index++
    displayedText.value = syntaxHighlight(rawText.slice(0, index))
    if (index >= rawText.length) clearInterval(interval)
  }, 25)
}

onBeforeUnmount(() => clearInterval(interval))

useIntersectionObserver(myWorkSection, () => {
  if (!inView.value) {
    inView.value = true
    startTyping()
  }
}, 0.3)
</script>

<style scoped lang="scss">
.my-work {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
  padding: 4rem clamp(1rem, 6vw, 8rem);
  max-width: 1400px;
  margin: 0 auto;

  .text-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-fg);
  }

  .text-content p {
    line-height: 1.6;
  }
}

.visual-effect {
  display: flex;
  justify-content: center;
}

.monitor {
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(16px) scale(0.97);
  transition: opacity 0.8s ease, transform 0.8s ease;

  &.animate {
    opacity: 1;
    transform: none;
  }
}

.screen {
  width: 100%;
  display: grid;
  padding: 1.25rem 1.5rem;
  border: 6px solid var(--color-accent);
  border-radius: 20px;
  background: var(--color-terminal-bg);
  color: var(--color-terminal-fg);
  font-family: $font-code;
  font-size: 0.95rem;
  line-height: 1.55;

  pre {
    grid-area: 1 / 1;
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    font: inherit;
  }

  .ghost {
    visibility: hidden;
  }

  .cursor {
    margin-left: 2px;
    color: var(--color-accent);
    animation: blink 1s steps(2, start) infinite;
    font-weight: bold;
  }

  :deep(.tag) {
    color: var(--color-syntax-tag);
    font-weight: bold;
  }

  :deep(.attr) {
    color: var(--color-syntax-attr);
    font-weight: 600;
  }

  :deep(.value) {
    color: var(--color-syntax-value);
  }
}

.stand {
  width: 18%;
  height: 22px;
  background: var(--color-accent);
  opacity: 0.85;
}

.base {
  width: 34%;
  height: 8px;
  border-radius: 8px 8px 2px 2px;
  background: var(--color-accent);
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media (max-width: 1100px) {
  .my-work {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;

    .text-content {
      margin: 0 1rem;

      h2 {
        font-size: 2rem;
      }
    }
  }

  .screen {
    font-size: 0.85rem;
    padding: 1rem 1.25rem;
    border-width: 5px;
  }
}
</style>
