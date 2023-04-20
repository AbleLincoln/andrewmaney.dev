<script setup>
defineProps({
  src: String,
  caption: String,
  href: String,
  hoverText: {
    type: String,
    default: 'Visit Site →',
  },
})
</script>

<template>
  <div>
    <a v-if="false" :href="href" target="_blank" class="relative block">
      <div
        class="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-black/60 text-4xl text-white/80 opacity-0 transition duration-300 ease-in hover:opacity-100"
      >
        <span class="hover-text">{{ hoverText }}</span>
        <!-- TODO: hover text should be a slot -->
      </div>
      <img :src="src" class="w-full rounded-lg" :alt="caption" />
    </a>
    <img v-else :src="src" class="w-full rounded-lg" :alt="caption" />
    <caption v-if="caption" class="mt-1 block text-center opacity-60">
      {{
        caption
      }}
    </caption>
  </div>
</template>

<style scoped></style>
