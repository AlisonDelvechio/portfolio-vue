<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="white" stroke-width="4"/>
          <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="white">A</text>
        </svg>
        <!-- <h1 class="logo-text">AlisonDelvechio_</h1> -->
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
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(8px);
  padding: 1.5rem 0;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between; 
    position: relative;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 40px;
      height: 40px;
    }

    .logo-text {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
  }

  nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    
    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 1.2rem;

      li a {
        color: $primary-color;
        text-decoration: none;
        font-weight: 600;
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: $primary-color;
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
      background: $primary-color;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    .container {
      justify-content: center;
      position: relative;
    }

    .logo {
      order: 2; // logo no centro
    }

    .menu-toggle {
      display: flex;
      order: 1;
      position: absolute;
      left: 1rem; // botão hambúrguer à esquerda
    }

    nav {
      position: absolute;
      top: 100%;
      left: 1rem; // menu também à esquerda
      background: rgba(18, 18, 18, 0.95);
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
</style>