<!-- 
- watw
- fasi
- push2ftp (no image)
- dennisclausen?
 -->

<script setup>
import ProjectItem from '../components/ProjectItem.vue'
import watwsite from '../assets/img/watwsite.png'
import fasisite from '../assets/img/fasisite.png'
import push2sftp from '../assets/img/push2sftp.png'
</script>

<template>
  <ProjectItem
    title="Wyman & the Wolves"
    subtitle="band site"
    :imgsrc="watwsite"
    href="https://www.wymanandthewolves.com/"
    :built-with="['Vue']"
    source-code="https://github.com/AbleLincoln/wymanandthewolves"
    repo="wymanandthewolves"
  />

  <ProjectItem
    title="Food Allergy Science Initiative"
    subtitle="research organization site"
    :imgsrc="fasisite"
    href="https://foodallergyscience.org/symposium"
    :built-with="['WordPress']"
    source-code="https://github.com/AbleLincoln/fasi"
    repo="fasi"
  />

  <ProjectItem
    title="Push to SFTP"
    subtitle="GitHub Action"
    :imgsrc="push2sftp"
    href="https://github.com/marketplace/actions/push-to-sftp"
    hover-text="View Project →"
    :built-with="['JavaScript']"
    source-code="https://github.com/AbleLincoln/push-to-sftp"
    repo="push-to-sftp"
  />
</template>
