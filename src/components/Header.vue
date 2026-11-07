<template>
  <header class="header theme-transition">
    <div class="container header-inner">
      <router-link to="/#home" class="logo" aria-label="Alison Delvechio, ir para o início" @click="closeMenu">
        <img :src="logoSrc" alt="" class="logo-img" width="513" height="44" />
      </router-link>

      <nav id="main-nav" ref="navEl" :class="{ 'is-open': menuOpen }" aria-label="Navegação principal">
        <ul>
          <li v-for="link in links" :key="link.hash">
            <router-link :to="{ path: '/', hash: link.hash }" @click="closeMenu">{{ link.label }}</router-link>
          </li>
        </ul>
      </nav>

      <div class="actions">
        <label class="switch">
          <input type="checkbox" :checked="theme === 'dark'" aria-label="Tema escuro" @change="toggleTheme" />
          <span class="slider">
            <Icon
              :icon="theme === 'dark' ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny'"
              class="icon"
              aria-hidden="true"
            />
          </span>
        </label>

        <button
          ref="toggleBtn"
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="main-nav"
          :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
          @click="menuOpen = !menuOpen"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import { useTheme } from '@/composables/useTheme'
import LogoAlisonLight from '@/assets/Logo-Alison-V1.svg'
import LogoAlisonDark from '@/assets/Logo-Alison-V1-Black.svg'

const links = [
  { label: 'Sobre', hash: '#sobre' },
  { label: 'Experiência', hash: '#experiencia' },
  { label: 'Projetos', hash: '#projects' },
  { label: 'Contato', hash: '#contato' },
]

const { theme, toggleTheme } = useTheme()
const logoSrc = computed(() => (theme.value === 'dark' ? LogoAlisonDark : LogoAlisonLight))

const menuOpen = ref(false)
const navEl = ref<HTMLElement | null>(null)
const toggleBtn = ref<HTMLElement | null>(null)

function closeMenu() {
  menuOpen.value = false
}

function onClickOutside(event: MouseEvent) {
  const target = event.target as Node
  if (menuOpen.value && !navEl.value?.contains(target) && !toggleBtn.value?.contains(target)) {
    closeMenu()
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    closeMenu()
    toggleBtn.value?.focus()
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  background: var(--color-header-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-line);
}

.header-inner {
  height: $header-height;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  min-width: 0;
  margin-right: auto;

  .logo-img {
    width: 13rem;
    max-width: 100%;
    height: auto;
  }
}

nav ul {
  display: flex;
  gap: 1.75rem;
  list-style: none;
  font-size: 0.95rem;

  a {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 500;
    padding-block: 0.25rem;
    border-bottom: 2px solid transparent;
    transition:
      color $t-fast ease,
      border-color $t-fast ease;

    &:hover {
      color: var(--color-fg);
      border-bottom-color: var(--color-accent);
    }
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;

  input {
    position: absolute;
    inset: 0;
    opacity: 0;
    margin: 0;
    cursor: pointer;
    z-index: 1;
  }

  input:focus-visible + .slider {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
  }

  .slider {
    position: absolute;
    inset: 0;
    border-radius: 99px;
    background: var(--color-switch-bg);
    transition: background-color $t-theme ease;
  }

  .icon {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    padding: 3px;
    border-radius: 50%;
    background: var(--color-surface);
    color: var(--color-fg);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    transition: transform $t-theme ease;
  }

  input:checked + .slider .icon {
    transform: translateX(24px);
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  background: none;
  border: 0;
  cursor: pointer;

  .bar {
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: var(--color-fg);
  }
}

@media (max-width: $bp-md) {
  .header-inner {
    gap: 1rem;
  }

  .logo .logo-img {
    width: 11rem;
  }

  .menu-toggle {
    display: flex;
  }

  nav {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: clamp(1rem, 4vw, 3rem);
    padding: 1rem 1.5rem;
    border-radius: $radius;
    border: 1px solid var(--color-line);
    background: var(--color-surface);
    box-shadow: var(--shadow-menu);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition:
      opacity $t-fast ease,
      transform $t-fast ease,
      visibility $t-fast;

    &.is-open {
      opacity: 1;
      visibility: visible;
      transform: none;
    }

    ul {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
}
</style>
