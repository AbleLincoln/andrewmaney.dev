<script setup>
import { RouterView } from 'vue-router'

const links = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' },
  { to: '/projects', name: 'Projects' },
  { to: '/music', name: 'Music' },
]
</script>

<template>
  <header class="mb-14">
    <h1 class="mb-3 text-xl font-medium">🎸 Andrew Maney</h1>

    <nav>
      <router-link
        v-for="(link, i) in links"
        :key="link.name"
        :to="link.to"
        class="mr-6 pb-1 text-lg !text-faded no-underline hover:border-b-2 hover:!text-white"
        :style="{ borderBottomColor: `var(--rainbow-${i + 1})` }"
      >
        {{ link.name }}
      </router-link>
    </nav>
  </header>

  <main class="mb-12">
    <router-view></router-view>
  </main>

  <footer class="absolute bottom-2">
    <small class="text-faded">
      Inspired by
      <a href="https://www.taniarascia.com/" target="_blank" class="no-underline"
        >💾 Tania Rascia</a
      >
    </small>
  </footer>
</template>

<style scoped></style>
