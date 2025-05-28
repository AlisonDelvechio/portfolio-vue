<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo" @click="scrollToTop">
        <img :src="logoSrc" alt="Logo Alison" class="logo-img" />
      </div>

      <!-- Navegação -->
      <nav :class="{ 'is-open': menuOpen }" aria-label="Main Navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <!-- Botão de menu mobile -->
      <button 
        class="menu-toggle"
        @click="toggleMenu"
        :aria-expanded="menuOpen.toString()"
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
            <span class="icon">{{ isDarkMode ? '🌙' : '🌞' }}</span>
            <!-- <span class="icon">{{ isDarkMode ? '🌞' :  '🌙'  }}</span> -->
          </span>
        </label>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">import { ref, computed, onMounted } from 'vue';
import LogoAlisonLight from '@/assets/Logo-Alison-V1.svg';
import LogoAlisonDark from '@/assets/Logo-Alison-V1-Black.svg';

const menuOpen = ref(false);
const isDarkMode = ref(true);

const logoSrc = computed(() => {
  return isDarkMode.value ? LogoAlisonDark : LogoAlisonLight;
});

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
  if (isDarkMode.value) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  }
}

onMounted(() => {
  toggleTheme();
});
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
      position: static; 
      order: 2; 

      .logo-img {
        width: 16rem;
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
      display: none;

      ul {
        flex-direction: column;
        gap: 1rem;
      }
    }

    nav.is-open {
      display: block;
      animation: fadeInLeft 0.3s ease forwards;
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

    background-color: #333;  // mais escuro como pediu
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
      font-size: 14px;
      pointer-events: none;
      transition: transform 0.4s;
    }
  }

  input:checked + .slider {
    background-color: #333;  // ou vars.$primary-color-dark se quiser padronizar

    &::before {
      transform: translateX(30px);
    }

    .icon {
      transform: translateX(30px);
    }
  }

  body.light & .slider {
    background-color: #ddd;  // mais claro no modo light

    input:checked + & {
      background-color: #ddd;
    }
  }
}
</style>