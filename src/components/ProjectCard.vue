<template>
  <div class="project-card">
    <img :src="image" :alt="title" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="links">
      <a :href="codeLink" target="_blank">Ver Código</a>
      <a :href="liveLink" target="_blank">Ver Online</a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  description: string;
  codeLink: string;
  liveLink: string;
}>();
</script>

<style lang="scss" scoped>
.project-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .links {
    margin-top: 10px;

    a {
      margin: 0 5px;
      color: $primary-color;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>