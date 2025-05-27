<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">MeuPortfólio</h1>
      
      <nav :class="{'is-open': menuOpen}" aria-label="Main Navigation">
        <ul>
          <li><a href="#projetos">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

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
  width: 100%;
  background-color: $primary-color;
  padding: 1rem 0;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem; 
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  nav ul {
    display: flex;
    gap: 2rem; // um pouco mais de espaço
    list-style: none;
    padding: 0;
    margin: 0;

    li a {
        color: #fff;
        text-decoration: none;
        font-weight: 600; // um pouco mais forte
        position: relative;

        &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: #fff;
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
      background: #fff;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    nav {
      display: none;
      position: absolute;
      top: 60px;
      right: 1rem;
      background: $primary-color;
      padding: 1rem;
      border-radius: 8px;

      ul {
        flex-direction: column;
        gap: 1rem;
      }
    }

    nav.is-open {
      display: block;
    }

    .menu-toggle {
      display: flex;
    }
  }
}
</style>