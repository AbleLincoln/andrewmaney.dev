<script setup>
import ImageBlock from './ImageBlock.vue'
// import GitHubCodeStats from './GitHubCodeStats.vue'
import Linguistical from 'linguistical'
import('linguistical/dist/style.css')

defineProps({
  imgsrc: { type: String },
  href: { type: String },
  hoverText: { type: String, default: 'Visit Site →' },
  title: { type: String },
  subtitle: { type: String },
  builtWith: { type: Array },
  sourceCode: { type: String },
  repo: { type: String },
  user: { type: String, default: 'AbleLincoln' },
})
</script>

<template>
  <div class="mb-20">
    <div class="mb-3 flex items-center justify-between">
      <h3 class="font-thin">
        <strong class="">{{ title }}</strong> <span class="hidden md:inline">{{ subtitle }}</span>
      </h3>
      <a
        class="cursor-pointer rounded border-0 border-faded/50 bg-faded/20 px-3 py-1 text-sm no-underline md:mr-2"
        :href="href"
        target="_blank"
      >
        <span class="hidden md:inline">Live site</span>
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xs" />
      </a>
    </div>
    <ImageBlock :src="imgsrc" :href="href" :hover-text="hoverText" class="mb-3" />
    <div class="flex -translate-y-0 items-start justify-end text-lg">
      <!-- <a class="mr-2 cursor-pointer text-base no-underline" target="_blank" :href="sourceCode">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a> -->

      <Linguistical
        :user="user"
        :repo="repo"
        theme="dark"
        class="max-w-sm rounded-lg shadow-none"
      />
    </div>
  </div>
</template>
