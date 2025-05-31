<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo" @click="goToHomeSection">
        <img :src="logoSrc" alt="Logo Alison" class="logo-img" />
      </div>

      <!-- Navegação -->
      <nav :class="{ 'is-open': menuOpen }" aria-label="Main Navigation">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="#expertise">Expertise</router-link></li>
          <li><router-link to="#projects">Projetos</router-link></li>
          <li><router-link to="#contato">Contato</router-link></li>
        </ul>
      </nav>

      <!-- Botão de menu mobile -->
      <button 
        class="menu-toggle"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-controls="main-nav"
        aria-label="Abrir ou fechar o menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- Botão modo light/dark -->
      <div class="theme-switch">
        <label class="switch">
          <input type="checkbox" v-model="isDarkMode" @change="toggleTheme">
          <span class="slider">
            <Icon 
              :icon="isDarkMode ? 'mdi:moon-waning-crescent' : 'mdi:white-balance-sunny'" 
              width="22" 
              height="22" 
              class="icon" 
              :color="isDarkMode ? '#333' : '#555'" 
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
import { useRouter } from 'vue-router'
import LogoAlisonLight from '@/assets/Logo-Alison-V1.svg'
import LogoAlisonDark from '@/assets/Logo-Alison-V1-Black.svg'

const menuOpen = ref(false)
const isDarkMode = ref(true)

const logoSrc = computed(() => {
  return isDarkMode.value ? LogoAlisonDark : LogoAlisonLight
})

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

const router = useRouter();

function goToHomeSection() {
  router.push({ path: '/', hash: '#home' })
}

function toggleTheme() {
  if (isDarkMode.value) {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
  } else {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }
}

onMounted(() => {
  toggleTheme()

  const navEl = document.querySelector('nav')
  const toggleBtn = document.querySelector('.menu-toggle')

  function handleClickOutside(event: MouseEvent) {
    if (
      menuOpen.value &&
      navEl && toggleBtn &&
      !navEl.contains(event.target as Node) &&
      !toggleBtn.contains(event.target as Node)
    ) {
      menuOpen.value = false
    }
  }

  document.addEventListener('click', handleClickOutside)

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as vars;

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(8px);
  padding: 1.5rem 0;

  body.light & {
    background: rgba(245, 245, 245, 0.8);
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; 
  }

  .logo {
    position: absolute;
    left: -18rem; 
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    .logo-img {
      width: 20rem;
      height: auto;
    }
  }

  nav {
    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 1.2rem;

      li a {
        color: vars.$primary-color-dark;

        body.light & {
          color: vars.$primary-color-light;
        }

        text-decoration: none;
        font-weight: 600;
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: vars.$primary-color-dark;

          body.light & {
            background: vars.$primary-color-light;
          }

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
    display: none;
    flex-direction: column;
    gap: 0.3rem;
    background: none;
    border: none;
    cursor: pointer;

    .bar {
      width: 25px;
      height: 3px;
      background: vars.$primary-color-dark;

      body.light & {
        background: vars.$primary-color-light;
      }

      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    .container {
      justify-content: center;
    }

    .logo {
      margin-right: 2rem;
      position: static; 
      order: 2; 

      .logo-img {
        width: 15rem;
        height: auto;
      }
    }

    .menu-toggle {
      display: flex;
      order: 1;
      position: absolute;
      left: 1rem;
    }

    nav {
      position: absolute;
      top: 100%;
      left: 1rem;
      background: rgba(18, 18, 18, 0.95);

      body.light & {
        background: rgba(245, 245, 245, 0.95);
      }

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

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.theme-switch {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    right: 0.5rem;
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;

    background-color: #333;
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
    background-color: #333;

    &::before {
      transform: translateX(30px);
    }

    .icon {
      transform: translateX(30px);
    }
  }

  body.light & .slider {
    background-color: #ddd;

    input:checked + & {
      background-color: #ddd;
    }
  }
}

</style>