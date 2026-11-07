<template>
  <header class="header">
    <div class="container">
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

      <div class="theme-switch">
        <label class="switch">
          <input
            type="checkbox"
            :checked="theme === 'dark'"
            aria-label="Tema escuro"
            @change="toggleTheme"
          />
          <span class="slider">
            <Icon
              :icon="theme === 'dark' ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny'"
              width="22"
              height="22"
              class="icon"
              :color="theme === 'dark' ? '#333' : '#555'"
            />
          </span>
        </label>
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
  { label: 'Início', hash: '#home' },
  { label: 'Expertise', hash: '#expertise' },
  { label: 'Projetos', hash: '#projects' },
  { label: 'Experiência', hash: '#experiencia' },
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
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: var(--color-header-bg);
  backdrop-filter: blur(8px);
  padding: 1.5rem 0;

  .container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: 'logo nav theme';
    align-items: center;
    gap: 1.5rem;
  }

  .logo {
    grid-area: logo;
    display: flex;
    align-items: center;
    min-width: 0;

    .logo-img {
      width: 16rem;
      max-width: 100%;
      height: auto;
    }
  }

  nav {
    grid-area: nav;

    ul {
      display: flex;
      gap: 1.75rem;
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 1.2rem;

      li a {
        color: var(--color-fg);
        text-decoration: none;
        font-weight: 600;
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: var(--color-fg);
          transition: width 0.3s;
          position: absolute;
          bottom: -4px;
          left: 0;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }

  .menu-toggle {
    grid-area: menu;
    display: none;
    flex-direction: column;
    gap: 0.3rem;
    background: none;
    border: none;
    cursor: pointer;

    .bar {
      width: 25px;
      height: 3px;
      background: var(--color-fg);
      border-radius: 2px;
    }
  }

  @media (max-width: 1100px) {
    nav ul {
      gap: 1.25rem;
      font-size: 1.05rem;
    }
  }

  @media (max-width: 900px) {
    .container {
      grid-template-columns: auto 1fr auto;
      grid-template-areas: 'menu logo theme';
      padding: 0 1rem;
    }

    .logo {
      justify-content: center;

      .logo-img {
        width: 15rem;
      }
    }

    .menu-toggle {
      display: flex;
      padding: 0.5rem;
    }

    nav {
      position: absolute;
      top: 100%;
      left: 1rem;
      grid-area: auto;
      background: var(--color-surface);
      box-shadow: var(--shadow-menu);

      padding: 1rem 2rem;
      border-radius: 8px;

      opacity: 0;
      visibility: hidden;
      transform: translateX(-20px);
      transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
      pointer-events: none;

      ul {
        flex-direction: column;
        gap: 1rem;
      }
    }

    nav.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
      pointer-events: auto;
    }
  }
}

.theme-switch {
  grid-area: theme;
  justify-self: end;
  display: flex;
  align-items: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;

  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
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
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;

    background-color: var(--color-switch-bg);
    border-radius: 34px;
    transition: background-color 0.4s;

    &::before {
      content: "";
      position: absolute;
      left: 4px;
      bottom: 4px;
      width: 22px;
      height: 22px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.4s;
    }

    .icon {
      position: absolute;
      left: 4px;
      bottom: 4px;
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      transition: transform 0.4s;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  input:checked + .slider {
    &::before {
      transform: translateX(30px);
    }

    .icon {
      transform: translateX(30px);
    }
  }

}
</style>