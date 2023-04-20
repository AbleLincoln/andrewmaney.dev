<script setup>
import ImageBlock from '../components/ImageBlock.vue'
import InlineLogo from '../components/InlineLogo.vue'

import portrait from '../assets/img/meonguitar.jpg'
</script>

<template>
  <section class="grid gap-5 sm:grid-cols-5">
    <div class="col-span-3">
      <h2 class="mb-4 text-3xl font-bold">
        Hello, I'm <span class="whitespace-nowrap">Andrew 😊</span>
      </h2>
      <p class="mb-5 max-w-lg text-lg">
        I am a programmer from Los Angeles, CA. I like to build things with
        <InlineLogo text="JavaScript" />. When I'm not coding you can catch me playing music around
        the city.
      </p>
    </div>
    <ImageBlock :src="portrait" class="col-span-2" caption="Busking in Venice Beach" />
  </section>
</template>
