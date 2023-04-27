<script setup>
import SkillItem from '../components/SkillItem.vue'
</script>

<template>
  <section class="grid gap-5 sm:grid-cols-5">
    <div class="col-span-3">
      <h2>Programmer by day 🌞</h2>
      <p>
        I spend my mornings building websites for people. I work primarily on a freelance basis. My
        clients include <a href="https://foodallergyscience.org/" target="_blank">doctors</a>,
        <a href="https://www.dennisclausen.com/" target="_blank">authors</a>, and
        <a href="https://izzyouterspace.com/music" target="_blank">artists</a>.
      </p>
      <p>
        I am very fond of the open-source community. I regularly contribute to
        <a href="https://github.com/fabiospampinato/khroma" target="_blank">a few</a>
        <a href="https://github.com/mguterl/chai-datetime" target="_blank" class="whitespace-nowrap"
          >open-source</a
        >
        <a href="https://github.com/etesync/etesync-web" target="_blank">projects</a>. I've even
        built a
        <a href="https://github.com/AbleLincoln/push-to-sftp" target="_blank">GitHub action</a> that
        is used by 30+ projects including WooCommerce!
      </p>

      <p>I am proficient in the following languages, tools, and frameworks:</p>
    </div>
  </section>

  <section class="mb-8 flex max-w-lg flex-wrap justify-center">
    <SkillItem skill="HTML" />
    <SkillItem skill="CSS" />
    <SkillItem skill="JavaScript" />
    <SkillItem skill="Vue" />
    <SkillItem skill="React" />
    <SkillItem skill="Node" />
    <SkillItem skill="PHP" />
    <SkillItem skill="WordPress" />
  </section>

  <section class="mb-8 grid gap-5 sm:grid-cols-5">
    <div class="col-span-3">
      <h2>Musician by night 🌚</h2>
      <p>
        When I'm not coding, I'm making music. I have been singing and playing guitar since I was 5
        years old. I play in a few bands around the Los Angeles area. My main project is the
        Americana band
        <a href="https://www.wymanandthewolves.com/" target="_blank">Wyman & the Wolves</a>. I also
        make jazz music with the group
        <a href="https://soundcloud.com/mcchicken-official" target="_blank">McChicken</a>.
      </p>
      <p>
        You can check out some of my solo stuff on
        <a href="https://soundcloud.com/garlic-loaf" target="_blank">SoundCloud</a> or
        <a href="https://www.instagram.com/ayymaney/" target="_blank">Instagram</a>. I like jazz,
        blues, R&B, soul, rock, and country music.
      </p>
      <p>I am available to hire for gigs and recording.</p>
    </div>
  </section>

  <section class="">
    <h2>Contact</h2>
    <p>You can reach me via email: <strong>maneyandrew</strong> at <strong>gmail.com</strong></p>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
