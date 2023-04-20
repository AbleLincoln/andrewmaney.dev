<script setup>
import BRANDS from '../brands'

const props = defineProps({
  text: { type: String, required: true },
  fullColor: { type: Boolean, default: true },
})

const { icon, color } = BRANDS[props.text]
</script>

<template>
  <span :style="{ color: fullColor ? color : '' }" class="ml-1 whitespace-nowrap">
    <font-awesome-icon :icon="['fab', icon]" :style="{ color }" class="text-xl" />
    <b class="hidden sm:inline">{{ text }}</b>
  </span>
</template>

<style>
b:before {
  content: ' ';
}
</style>
