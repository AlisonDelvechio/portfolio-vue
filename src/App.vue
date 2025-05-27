<template>
  <div id="app">
    <Header />
    <Home />
    <!-- <Projects /> -->
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
</script>