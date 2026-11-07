<template>
  <div ref="root" class="monitor">
    <div class="screen theme-transition">
      <div class="tab" aria-hidden="true">
        <span><b>atom-button.tsx</b> · atom-ui</span>
      </div>
      <div class="body">
        <!-- O código é decorativo; o conteúdo útil para leitores de tela é o link do preview. -->
        <pre ref="codeEl" class="code" aria-hidden="true"><code v-html="html"></code><span class="cursor">|</span></pre>
        <div class="preview" :class="{ waiting: !done }">
          <span class="preview-label" aria-hidden="true">PREVIEW</span>
          <router-link :to="{ path: '/', hash: '#projects' }" class="atom-button">Ver projetos</router-link>
        </div>
      </div>
    </div>
    <div class="stand" aria-hidden="true"></div>
    <div class="base" aria-hidden="true"></div>
  </div>
</template>

<script lang="ts">
// Fora do setup: vale para a visita inteira. Voltar de uma página de projeto
// mostra o código pronto, sem digitar de novo.
let hasPlayed = false
</script>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import source from '@/data/atom-button.tsx.txt?raw'

// O monitor digita o atom-button.tsx do Atom UI (sem alterações) quando o Hero
// aparece. No fim, o botão do preview surge: o código digitado vira a ação da página.

const TYPING_MS = 6000

type Token = [cls: string, text: string]

const rules: [string, RegExp][] = [
  ['tok-comment', /^\/\*\*[\s\S]*?\*\//],
  ['tok-string', /^'[^']*'|^`[^`]*`/],
  ['tok-decorator', /^@\w+/],
  ['tok-keyword', /^\b(?:import|from|export|class|private|return|this)\b/],
  ['tok-tag', /^<\/?[a-z][\w-]*|^\/?>/],
]

function tokenize(code: string): Token[] {
  const tokens: Token[] = []
  let rest = code
  while (rest) {
    let hit: Token | null = null
    for (const [cls, re] of rules) {
      const m = rest.match(re)
      if (m) {
        hit = [cls, m[0]]
        break
      }
    }
    if (!hit) hit = ['', rest.match(/^[A-Za-z_]\w*/)?.[0] ?? rest[0]]
    tokens.push(hit)
    rest = rest.slice(hit[1].length)
  }
  return tokens
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const code = source.trimEnd()
const tokens = tokenize(code)
const total = code.length

const typed = ref(total)
const done = computed(() => typed.value >= total)

// Só monta o HTML até o caractere digitado; cada pedaço já vem escapado.
const html = computed(() => {
  let left = typed.value
  let out = ''
  for (const [cls, text] of tokens) {
    if (left <= 0) break
    const part = escapeHtml(text.slice(0, left))
    left -= text.length
    out += cls ? `<span class="${cls}">${part}</span>` : part
  }
  return out
})

const root = ref<HTMLElement | null>(null)
const codeEl = ref<HTMLElement | null>(null)
let frame = 0
let observer: IntersectionObserver | null = null

function scrollToEnd() {
  nextTick(() => {
    if (codeEl.value) codeEl.value.scrollTop = codeEl.value.scrollHeight
  })
}

function type() {
  const start = performance.now()
  typed.value = 0
  const step = (now: number) => {
    typed.value = Math.min(total, Math.round(((now - start) / TYPING_MS) * total))
    scrollToEnd()
    if (typed.value < total) frame = requestAnimationFrame(step)
  }
  frame = requestAnimationFrame(step)
}

onMounted(() => {
  scrollToEnd()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (hasPlayed || reduce || !root.value || !('IntersectionObserver' in window)) return
  hasPlayed = true
  // Começa com a tela vazia e digita quando o monitor aparece, uma vez.
  typed.value = 0
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return
      observer?.disconnect()
      type()
    },
    { threshold: 0.4 },
  )
  observer.observe(root.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>

<style scoped lang="scss">
.monitor {
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.screen {
  width: 100%;
  aspect-ratio: 16 / 10;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 6px solid var(--color-accent);
  border-radius: 18px;
  background: var(--editor-bg);
}

.tab {
  flex: none;
  padding: 0.4rem 0.875rem;
  background: var(--editor-tab);
  border-bottom: 1px solid var(--editor-line);
  font-family: $font-code;
  font-size: 0.7rem;
  color: var(--editor-muted);

  b {
    color: var(--editor-fg);
    font-weight: 500;
  }
}

.body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.code {
  flex: 1;
  min-height: 0;
  margin: 0;
  padding: 0.75rem 0.875rem;
  overflow: hidden;
  white-space: pre;
  font-family: $font-code;
  font-size: 0.72rem;
  line-height: 1.6;
  color: var(--editor-fg);

  :deep(.tok-comment) {
    color: var(--syntax-comment);
    font-style: italic;
  }
  :deep(.tok-string) {
    color: var(--syntax-string);
  }
  :deep(.tok-keyword) {
    color: var(--syntax-keyword);
  }
  :deep(.tok-decorator) {
    color: var(--syntax-decorator);
  }
  :deep(.tok-tag) {
    color: var(--syntax-tag);
  }
}

.cursor {
  color: var(--color-accent);
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.preview {
  flex: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.875rem;
  background: var(--editor-preview);
  border-top: 1px solid var(--editor-line);
}

.preview-label {
  font-family: $font-code;
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  color: var(--editor-muted);
}

// Mesmas medidas e cores do atom-button.scss (primary).
.atom-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: #2563eb;
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  transition:
    opacity 300ms ease,
    transform 300ms ease;

  &:hover {
    opacity: 0.85;
  }
}

// Enquanto o código é digitado, o botão espera escondido (mas continua acessível pelo teclado).
.preview.waiting .atom-button:not(:focus-visible) {
  opacity: 0;
  transform: translateY(4px);
}

.stand {
  width: 16%;
  height: 18px;
  background: var(--color-accent);
  opacity: 0.85;
}

.base {
  width: 32%;
  height: 7px;
  border-radius: 8px 8px 2px 2px;
  background: var(--color-accent);
}

@media (max-width: $bp-sm) {
  .code {
    font-size: 0.64rem;
  }

  .screen {
    border-width: 5px;
  }
}
</style>
