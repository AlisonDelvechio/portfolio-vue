<template>
  <section id="experiencia" class="section container" aria-labelledby="experiencia-title">
    <h2 id="experiencia-title" v-reveal class="section-title">Experiência</h2>

    <!-- Linha do tempo: cada fase é um marco; as empresas da fase são pontos menores. -->
    <ol class="timeline">
      <li v-for="(phase, i) in phases" :key="phase.startYear" class="phase" :class="{ current: !phase.endYear }">
        <div v-reveal class="when">
          <span class="period">{{ phasePeriod(phase) }}</span>
          <span class="duration label">{{ phaseDuration(phase) }}</span>
          <span class="org">{{ phase.org }}</span>
        </div>

        <div class="body">
          <div v-reveal="40">
            <h3>
              {{ phase.title }} <span class="team">· {{ phase.team }}</span>
            </h3>
            <p class="summary">{{ phase.summary }}</p>
            <ul class="tag-list" aria-label="Tecnologias">
              <li v-for="tech in phase.technologies" :key="tech" class="tag">{{ tech }}</li>
            </ul>
          </div>

          <ul class="stints" :aria-label="`Empresas na fase ${i + 1}`">
            <li v-for="(stint, j) in phase.stints" :key="stint.role + stint.period" v-reveal="80 + j * 60" class="stint">
              <div class="logos">
                <img
                  v-for="logo in stint.logos"
                  :key="logo.alt"
                  :src="logo.src"
                  :alt="logo.alt"
                  width="44"
                  height="44"
                  loading="lazy"
                />
              </div>
              <div class="stint-text">
                <b>{{ stint.company }}</b>
                <span class="role label">{{ stint.role }} · {{ stint.period }}</span>
                <span>{{ stint.summary }}</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { phases, phasePeriod, phaseDuration } from '@/data/experiences'
</script>

<style scoped lang="scss">
// Posição horizontal da linha: coluna das datas + metade do espaço entre colunas.
$col: 8.5rem;
$gap: 2.75rem;

.timeline {
  --x: calc(#{$col} + #{$gap} / 2);
  --stint-x: calc(#{$gap} / -2);
  position: relative;
  display: grid;
  list-style: none;

  // A linha é azul no trecho atual e esmaece no passado.
  &::before {
    content: '';
    position: absolute;
    left: var(--x);
    top: 0.75rem;
    bottom: 0.75rem;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(
      to bottom,
      var(--color-accent) 0%,
      var(--color-accent) 20%,
      var(--color-timeline-past) 32%,
      var(--color-timeline-past) 100%
    );
  }
}

.phase {
  position: relative;
  display: grid;
  grid-template-columns: $col minmax(0, 1fr);
  column-gap: $gap;
  padding-bottom: 3rem;

  &:last-child {
    padding-bottom: 0;
  }

  // Marco da fase
  &::before {
    content: '';
    position: absolute;
    left: var(--x);
    top: 0.3rem;
    width: 18px;
    height: 18px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: var(--color-bg);
    border: 3px solid var(--color-accent);
    z-index: 1;
  }

  &.current::before {
    background: var(--color-accent);
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--color-accent) 22%, transparent);
  }
}

.when {
  display: grid;
  gap: 0.25rem;
  align-content: start;
  justify-items: end;
  text-align: right;

  .period {
    font-family: $font-code;
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--color-fg);
    white-space: nowrap;
  }

  .duration {
    padding: 0 0.5rem;
    border-radius: 99px;
    border: 1px solid var(--color-line);
    color: var(--color-accent-text);
  }

  .org {
    font-size: 0.8rem;
    color: var(--color-text-muted);
  }
}

.body {
  display: grid;
  gap: 1rem;
  min-width: 0;

  h3 {
    font-size: $fs-h3;
    font-weight: 700;
  }

  .team {
    font-weight: 500;
    color: var(--color-text-muted);
  }

  .summary {
    margin: 0.5rem 0 0.75rem;
    max-width: 62ch;
  }
}

.stints {
  display: grid;
  gap: 0.75rem;
  list-style: none;
}

.stint {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem;
  border-radius: $radius;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
  // Mantém o atraso escalonado da entrada (v-reveal) junto com o hover.
  transition:
    border-color $t-fast ease,
    opacity $t-enter ease-out var(--reveal-delay, 0ms),
    transform $t-enter ease-out var(--reveal-delay, 0ms);

  &:hover {
    border-color: var(--color-accent);
  }

  // Ponto da empresa na linha, ligado ao card por um traço.
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
  }

  &::before {
    left: var(--stint-x);
    width: 9px;
    height: 9px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: var(--color-bg);
    border: 2px solid var(--color-accent);
    z-index: 1;
  }

  &::after {
    left: var(--stint-x);
    width: calc(#{$gap} / 2);
    height: 1px;
    background: var(--color-connector);
  }
}

.logos {
  display: flex;
  gap: 0.375rem;

  img {
    width: 44px;
    height: 44px;
    padding: 5px;
    border-radius: 9px;
    background: #fff;
    border: 1px solid var(--color-logo-border);
    object-fit: contain;
  }
}

.stint-text {
  display: grid;
  gap: 0.125rem;
  min-width: 0;

  b {
    color: var(--color-fg);
    font-weight: 600;
  }

  .role {
    color: var(--color-accent-text);
  }

  span:last-child {
    font-size: $fs-small;
  }
}

@media (max-width: $bp-sm) {
  .timeline {
    --x: 9px;
    --stint-x: calc(9px - 2.25rem);
  }

  .phase {
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    padding-left: 2.25rem;
  }

  .when {
    grid-auto-flow: column;
    justify-content: start;
    justify-items: start;
    align-items: center;
    gap: 0.625rem;
    text-align: left;
  }

  .stint {
    grid-template-columns: 1fr;
  }

  .stint::after {
    width: calc(2.25rem - 9px);
  }
}
</style>
