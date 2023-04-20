<script setup>
import BRANDS from '../brands'

const props = defineProps({ skill: { type: String, default: '' } })

const { icon, color } = BRANDS[props.skill]
</script>

<template>
  <div class="px-8 py-6 text-center text-xl">
    <font-awesome-icon
      :icon="['fab', icon]"
      class="mr-1 align-middle text-3xl"
      :style="{ color }"
    />
    {{ skill }}
  </div>
</template>
