<template>
  <section id="sobre" class="section container" aria-labelledby="sobre-title">
    <h2 id="sobre-title" v-reveal class="section-title">Sobre</h2>

    <div class="about">
      <div v-reveal class="about-text">
        <p>
          Comecei em 2019 como QA na BSN Tecnologia, escrevendo planos de teste e procurando bugs. Um ano
          depois passei para o desenvolvimento, em apps web e mobile com Angular, Ionic e Laravel. O hábito
          de pensar em como as coisas quebram veio junto.
        </p>
        <p>
          Em 2021 entrei no Bradesco Seguros, contratado por consultoria. Até 2025 fiquei num time de
          negócios, cuidando de sites, páginas e componentes para várias frentes digitais. Desde 2025 estou
          no time de TI, na biblioteca de componentes, trabalhando com Stencil, Angular e Ionic.
        </p>
        <p>
          Gosto do ponto onde design e código se encontram: um componente bem resolvido poupa trabalho de
          muita gente depois.
        </p>
      </div>

      <dl v-reveal="80" class="facts">
        <div>
          <dt class="label">Formação</dt>
          <dd>
            <b>Análise e Desenvolvimento de Sistemas</b>
            <span>Tecnólogo pela UniCesumar, 2023 · Técnico pela ETEC Adamantina, 2020</span>
          </dd>
        </div>
        <div>
          <dt class="label">Palestras</dt>
          <dd v-for="talk in talks" :key="talk.title">
            <b>{{ talk.title }}</b>
            <span>{{ talk.where }} · {{ talk.when }}</span>
          </dd>
        </div>
        <div>
          <dt class="label">Fora do expediente</dt>
          <dd>
            <b>Compêndio de Tormenta 20</b>
            <span>
              Classes, poderes e itens para o Foundry VTT, feitos para a mesa que eu mestrava. Também jogo,
              leio e desenho.
            </span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
// Dados dos certificados das palestras.
const talks = [
  {
    title: 'Do curso de DS ao desenvolvimento front-end',
    where: 'SIPAT da ETEC Prof. Eudécio Luiz Vicente, Adamantina',
    when: 'maio de 2026',
  },
  {
    title: 'Roda de conversa: Caminhos da TI',
    where: 'Turma do técnico em Desenvolvimento de Sistemas da mesma ETEC',
    when: 'setembro de 2024',
  },
]
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: clamp(2rem, 4vw, 3.5rem);
}

.about-text {
  display: grid;
  gap: 1rem;
  align-content: start;
  max-width: 62ch;
}

.facts {
  display: grid;
  gap: 1.25rem;
  align-content: start;
  padding-left: 1.5rem;
  border-left: 1px solid var(--color-line);

  > div {
    display: grid;
    gap: 0.5rem;
  }

  dt {
    color: var(--color-text-muted);
    text-transform: uppercase;
  }

  dd {
    display: grid;
    gap: 0.125rem;
  }

  b {
    color: var(--color-fg);
    font-weight: 500;
    font-size: 0.95rem;
  }

  span {
    font-size: $fs-small;
  }
}

@media (max-width: 760px) {
  .about {
    grid-template-columns: 1fr;
  }

  .facts {
    padding-left: 0;
    padding-top: 1.25rem;
    border-left: 0;
    border-top: 1px solid var(--color-line);
  }
}
</style>
