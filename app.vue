<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!--DONT REMOVE IS GOOD FOR SEO AND ACCESIBILITY-->
    <NuxtRouteAnnouncer />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'JS quiz',
  meta: [{ name: 'description', content: 'Nuxtermind' }],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: "console.log('Welcome to JS quiz!!!')" }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.svg' }],
})
useSeoMeta({
  title: 'JS quiz',
  ogTitle: 'JS quiz',
  description:
    'JS quiz is modern version of the mastermind/secret code game with a touch of some modern features. Players will be allowed to choose a character and release powers during the gameplay. A timer will be alwys set and online torunament mode will be availble so that it is possible to play online in real time.',
  ogDescription:
    'JS quiz is modern version of the mastermind/secret code game with a touch of some modern features. Players will be allowed to choose a character and release powers during the gameplay. A timer will be alwys set and online torunament mode will be availble so that it is possible to play online in real time.',
  ogImage: '/public/icon.svg',
  twitterCard: 'summary_large_image',
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
