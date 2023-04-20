<script setup>
import ImageBlock from './ImageBlock.vue'
import GitHubCodeStats from './GitHubCodeStats.vue'
import InlineLogo from '../components/InlineLogo.vue'

defineProps({
  imgsrc: { type: String },
  href: { type: String },
  hoverText: { type: String, default: 'Visit Site →' },
  title: { type: String },
  subtitle: { type: String },
  builtWith: { type: Array },
  sourceCode: { type: String },
  repo: { type: String },
})
</script>

<template>
  <div class="mb-20">
    <div class="mb-3 flex items-center justify-between">
      <h3 class="font-thin">
        <strong class="">{{ title }}</strong> {{ subtitle }}
      </h3>
      <a
        class="mr-2 cursor-pointer rounded border-0 border-faded/50 bg-faded/20 px-3 py-1 text-sm no-underline"
        :href="href"
        target="_blank"
      >
        Live site
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xs" />
      </a>
    </div>
    <ImageBlock :src="imgsrc" :href="href" :hover-text="hoverText" class="mb-3" />
    <div class="flex justify-between px-2 text-lg">
      <!-- <p>
        built with:
        <InlineLogo v-for="tech in builtWith" :key="tech" :text="tech" :full-color="false" />
      </p> -->
      <GitHubCodeStats user="AbleLincoln" :repo="repo" />
      <!-- TODO: make dynamic with stats from github -->
      <a class="cursor-pointer" target="_blank" :href="sourceCode">
        source code <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
  </div>
</template>
