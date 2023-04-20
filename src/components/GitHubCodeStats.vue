<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['user', 'repo'])
const languages = ref([])

onMounted(async () => {
  const response = await fetch(
    `https://linguistiql.onrender.com?user=${props.user}&repo=${props.repo}`
  )
  const data = await response.json()
  console.log(data)
  languages.value = data.languages
})
</script>

<template>
  <div class="graph">
    <div class="progress">
      <div
        v-for="language in languages"
        :key="language.name"
        :style="{ width: `${language.size}%`, backgroundColor: language.color }"
      ></div>
    </div>

    <div class="text">
      <p v-for="language in languages" :key="language.name">
        <span class="circle" :style="{ backgroundColor: language.color }"></span>
        {{ language.name }}
        <span class="percent">{{ Math.round(language.size * 10) / 10 }}%</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.graph {
  background-color: #22272e;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  padding: 10px 10px 2px 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.progress {
  display: flex;
  height: 10px;
  border-radius: 10px;
}

.progress > * {
  margin-right: 2px;
}

.progress > *:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.progress > *:last-child {
  margin-right: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.text {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.9);
  font-family: sans-serif;
  font-size: 12px;
  padding: 10px 5px 0px;
}

p {
  margin: 0;
  line-height: 1.5rem;
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  display: inline-block;
  margin-right: 7px;
}

.percent {
  opacity: 60%;
}
</style>
